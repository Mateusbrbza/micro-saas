import { auth } from "@/services/auth";
import { MyProfileForm } from "./_components/form";

export default async function Settings() {
  const session = await auth();

  return <MyProfileForm user={session?.user} />;
}
