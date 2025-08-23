interface User {
  id: string;
  phone: string;
  display_name: string;
  email: string | null;
  roles: string[];
}

interface ProfileCompletion {
  identity: boolean;
  education: boolean;
  location: boolean;
  parent: boolean;
  percent_complete: number;
}

export interface IUserSession {
  user: User;
  profile_completion: ProfileCompletion;
  is_new_user: boolean;
}
