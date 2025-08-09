"use client";

// import next-auth
import { signIn } from "next-auth/react";

// import ui
import { Button } from "@/shared/ui";

// import icon
import { Google as GoogleIcon } from "@/assets/icons";

interface IGoogleLoginButtonProps {
  disabeld?: boolean;
  setLoadingGoogle: (changeLoading: boolean) => void;
  loadingGoogle: boolean;
}

export default function GoogleLoginButton({
  loadingGoogle,
  setLoadingGoogle,
  disabeld = false,
}: IGoogleLoginButtonProps) {
  async function handleSignInGoogle() {
    try {
      setLoadingGoogle(true);
      await signIn("google");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      setLoadingGoogle(false);
    }
  }

  return (
    <Button
      type="button"
      color="SECONDARY"
      size="XXL"
      disabled={disabeld || loadingGoogle}
      icon={<GoogleIcon size="SM" />}
      onClick={handleSignInGoogle}
      loading={loadingGoogle}
    >
      ورود با گوگل
    </Button>
  );
}
