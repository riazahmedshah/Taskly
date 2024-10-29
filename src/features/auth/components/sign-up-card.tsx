"use client";
import {z} from "zod"
import {FcGoogle} from "react-icons/fc"

import { DottedSeparator } from "@/components/dotteed-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { registerSchema } from "../Schemas"
import { useRegister } from "../api/use-register"





export const SignUpCard = () => {

    const { mutate, isPending } = useRegister();
   

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name:"",
            email:"",
            password: ""
        }
    })
    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        console.log("Form submitted with values:", values); // Debugging
        mutate({
            json: values
        });
    }
    return(
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to our {" "}
                    <Link href="/privacy">
                        <span className="text-blue-700">Privacy Policy</span>
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy">
                        <span className="text-blue-700">Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type="email"
                                            placeholder="Enter email address"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type="password"
                                            placeholder="Enter password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isPending} size="lg" className="w-full">
                            Sign up
                        </Button>
                        
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator/>
                <CardContent className="p-7 flex flex-col gap-y-4">
                    <Button 
                      disabled={isPending}
                      variant="secondary"
                      size="lg"
                      className="w-full">
                        <FcGoogle />
                        <span>Login with Google</span>
                    </Button>
                </CardContent>
            </div>
        </Card>
    )
}