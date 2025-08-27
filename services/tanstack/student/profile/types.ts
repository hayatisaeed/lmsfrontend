export type TOlympiads = {
  id: number;
  name: string;
  olympiad_degree: number;
  published: boolean;
};

export type TLocation = {
  id: number;
  name: string;
  slug: string;
};

export type TStudentType = {
  name: string;
  slug: string;
};

export type TEducationalLevels = {
  id: number;
  name: string;
  min_grade: number;
  max_grade: number;
  is_high_school: boolean;
};

export type TStudyBranches = {
  id: number;
  name: string;
  level: number;
  is_active: boolean;
};

export type TIdentity = {
  first_name: string | null;
  last_name: string | null;
  father_name: string | null;
  gender: string | null;
  date_of_birth: string | null;
  national_id: string | null;
  avatar: null | string;
  verified: boolean;
};

export type TParent = {
  required: boolean;
  verified: boolean;
};

export type TLocationProfile = { province: string; city: string };

export interface IProfile {
  identity: TIdentity;
  parent: TParent;
  location: TLocationProfile;
  percent_complete: number;
}

interface LocationEducation {
  province_id: number;
  city_id: number;
  province: string;
  city: string;
}

export interface IEducation {
  id: number;
  level: number | null;
  grade: number | null;
  study_branch: number | null;
  olympiads: number[];
  school_name: string;
  school_type: number | null;
  location: LocationEducation;
}

// export type TStudentIdentity = {
//   national_id: string;
//   date_of_birth: string;
//   first_name: string;
//   last_name: string;
//   father_name: string;
//   gender: "M" | "F";
//   is_verified: boolean;
//   submission_count: number;
// };

// export type TStudentEducation = any;

// export type TStudentParent = {
//   phone: string;
//   relation: string;
//   is_verified: boolean;
// };
