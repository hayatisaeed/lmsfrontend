export type TgetUserProfile = {
  phone: string;
  display_name: string;
  email: string | null;
  is_profile_complete: boolean;
  role: "Student" | "Admin" | "Professor";
  state: string | null;
  city: string | null;
  created_at: string;
};
