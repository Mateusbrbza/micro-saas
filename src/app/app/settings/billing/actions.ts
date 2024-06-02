"use server";

import { auth } from "@/services/auth";

export async function createSubscribeSession() {
  console.log("123");

  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }
}
