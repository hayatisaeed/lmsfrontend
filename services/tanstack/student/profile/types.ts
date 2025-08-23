export type TStudentIdentity = {
  national_id: string;
  date_of_birth: string;
  first_name: string;
  last_name: string;
  father_name: string;
  gender: "M" | "F";
  is_verified: boolean;
  submission_count: number;
};

export type TStudentEducation = any;


export type TLocation = {
  id: number;
  name: string;
  slug: string;
};

export type TOlympiads = {
  id: number;
  name: string;
  published: boolean;
  olympiad_degree: number;
};

export type TEducationalLevels = {
  id: number;
  name: string;
  is_high_school: boolean;
};

export type TStudyBranches = {
  id: number;
  educational_level: number;
  level_name: string;
  name: string;
};

export type TStudentParent = {
  phone: string;
  relation: string;
  is_verified: boolean;
};

export type TStudentType = {
  name: string;
  slug: string;
};
