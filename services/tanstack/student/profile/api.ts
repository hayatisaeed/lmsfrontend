import api, { requestWrapper } from "@/core/config/api";

//types
import { TStudentIdentity } from "@/types/student";

export async function postStudentEducationApi(data: {
  national_id: string;
  date_of_birth: string;
}) {
  return requestWrapper<TStudentIdentity>(
    api.post("/api/users/profile/identity/", data)
  );
}

export async function getStudentEducationApi() {
  return requestWrapper<TStudentIdentity>(
    api.get("/api/users/profile/identity/")
  );
}
