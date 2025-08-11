export type TVerifyOtpForRegistration = {
  access: string;
  is_new_user: boolean;
  message: string;
  refresh: string;
  user: {
    city: string | null;
    email: string | null;
    is_profile_complete: boolean;
    phone: string;
    state: string | null;
  };
};
