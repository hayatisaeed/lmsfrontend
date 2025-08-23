export type TVerifyOtpForRegistration = {
  access_expires_in: number;
  access_token: string;
  is_new_user: boolean;
  profile_completion: {
    identity: boolean;
    education: boolean;
    location: boolean;
    parent: boolean;
    percent_complete: number;
  };
  education: boolean;
  identity: boolean;
  location: boolean;
  parent: boolean;
  percent_complete: number;
};
