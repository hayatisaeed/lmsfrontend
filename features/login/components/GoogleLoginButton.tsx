"use client";

// import next-auth
import { signIn } from "next-auth/react";

// import ui
import { Button } from "@/shared/ui";

// import icon
import { Google as GoogleIcon } from "@/assets/icons";
import { useState } from "react";

export default function GoogleLoginButton() {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSignInGoogle() {
    try {
      setLoading(true);
      await signIn("google");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      color="SECONDARY"
      size="XXL"
      icon={<GoogleIcon size="SM" />}
      onClick={handleSignInGoogle}
      loading={loading}
    >
      ورود با گوگل
    </Button>
  );
}
