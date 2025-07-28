// import next-auth
import { signIn } from "next-auth/react";

// import ui
import { Button } from "@/shared/ui";

// import icon
import { Google as GoogleIcon } from "@/shared/icons";

export default function GoogleLoginButton() {
  async function handleSignInGoogle() {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  }

  return (
    <Button
      type="button"
      color="SECONDARY"
      size="XXL"
      icon={<GoogleIcon size="SM" />}
      onClick={handleSignInGoogle}
    >
      ورود با گوگل
    </Button>
  );
}
