
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  organizationName: z.string().min(2, {
    message: "Organization name must be at least 2 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactPhone: z.string().optional(),
  organizationUrl: z.string().url({
    message: "Please enter a valid URL (e.g., https://example.com).",
  }),
});

export default function JoinPage() {
  const db = useFirestore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      organizationUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!db) return;
    setIsSubmitting(true);

    const requestsRef = collection(db, 'provider-requests');
    const data = {
      ...values,
      createdAt: serverTimestamp(),
    };

    addDoc(requestsRef, data)
      .then(() => {
        setIsSubmitted(true);
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: requestsRef.path,
          operation: 'create',
          requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              Community Partnership
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              Solution Provider Sign Up
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Join our network of verified organizations providing critical wildfire resilience and recovery resources.
            </p>
          </div>

          {isSubmitted ? (
            <Card className="border-accent/20 bg-accent/5 overflow-hidden">
              <CardContent className="p-12 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="bg-accent p-4 rounded-full">
                    <CheckCircle2 className="w-12 h-12 text-accent-foreground" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-primary">Thank You!</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your request to join has been submitted successfully. Our team will review your application and contact you at <strong>{form.getValues('contactEmail')}</strong> shortly.
                </p>
                <Button asChild className="rounded-full px-8 h-12">
                  <a href="/">Return to Home</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl border-none">
              <CardHeader className="bg-primary text-primary-foreground p-8 rounded-t-lg">
                <CardTitle className="text-2xl font-bold">Partner Details</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  Please provide information about your organization and primary contact.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Resilience Solutions Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Full Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contactEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Email</FormLabel>
                            <FormControl>
                              <Input placeholder="email@organization.org" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="contactPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organizationUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://www.yourwebsite.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 text-lg rounded-full shadow-lg transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request to Join"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
