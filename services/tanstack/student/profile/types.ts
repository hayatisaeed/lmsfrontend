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

export type TStudentEducation = {
  data: "";
};
