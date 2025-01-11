"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { usePostAddress } from "@/hooks/Api/usePostAddress";
import useGetAddress from "@/hooks/Api/useGetAddress";
import Loading from "./loading";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters." }),
  contact: z.string().regex(/^7\d{9}$/, {
    message: "Contact must be a valid Kazakhstan number (7XXXXXXXXX).",
  }),
  zipcode: z
    .string()
    .regex(/^\d{6}$/, { message: "Zip code must be 6 digits." }),
  vat: z.string().regex(/^\d{6}$/, { message: "VAT number must be 6 digits." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function EditAddressForm() {
  const { data: addressData, isLoading } = useGetAddress();
  const { isPending, postAddress } = usePostAddress();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      contact: "",
      zipcode: "",
      vat: "",
    },
  });

  useEffect(() => {
    if (addressData) {
      form.reset({
        name: addressData.name || "",
        email: addressData.email || "",
        address: addressData.address || "",
        contact: addressData.contact || "",
        zipcode: addressData.zipcode || "",
        vat: addressData.vat || "",
      });
    }
  }, [addressData, form]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postAddress(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-zinc-950">
      <div className="max-w-[600px] mx-auto">
        <div className="bg-white dark:bg-zinc-800 rounded-lg border dark:border-zinc-700 shadow-sm p-6">
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Edit address
            </h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John doe"
                          className="dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@example.com"
                          className="dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">
                      Detailed Address
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your address"
                        className="min-h-[100px] dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">
                      Contact
                    </FormLabel>
                    <FormControl>
                      <div className="flex">
                        <div className="w-[80px] h-10 flex items-center justify-center border border-input bg-background text-sm dark:bg-zinc-900 dark:border-zinc-700 dark:text-gray-100">
                          +7
                        </div>
                        <Input
                          placeholder="700 000 0000"
                          className="flex-1 ml-2 dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-700"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Zip code
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="000000"
                          className="dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        VAT Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="000000"
                          className="dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button
                  type="submit"
                  className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900 dark:text-white"
                >
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
