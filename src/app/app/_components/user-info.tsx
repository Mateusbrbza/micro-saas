"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/services/auth";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
  user: Session['user']
}

export async function UserInfo({ user }: Props) {
  if (!user) return;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar>
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>

          <span>{user?.email}</span>

          <Button variant="outline" onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
  )
}
