"use client";

import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data)

    await signIn('email', { email: data.email })
  })

  return (
    <div className="mx-auto max-w-sm space-x-8">
      <div className="space-y-2 text-center">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below and we ll send you a magic link to sign in.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              {...form.register('email')}
            />
          </div>
          <Button className="w-full" type="submit">
            Send Magic Link
          </Button>
        </form>
      </div>
    </div>
  )
}
