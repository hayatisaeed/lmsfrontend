export enum Visibility {
  PUBLIC = "public",
  PRIVATE = "private",
}

export enum AccessMode {
  FREE = "free",
  PURCHASE = "purchase",
}

export interface ICourse {
  id: string;
  name: string;
  description: string;
  banner_image: string;
  index_image: string;
  visibility: Visibility;
  access_mode: AccessMode;
  created_at: string;
  updated_at: string;
  is_joined: boolean;
}
