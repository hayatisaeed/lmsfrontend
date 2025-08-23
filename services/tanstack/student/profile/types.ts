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
