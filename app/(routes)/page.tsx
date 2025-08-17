//API
import { getUserProfileApi } from "@/services/api/common/server/api";

//NEXT
import { redirect } from "next/navigation";

export default async function Main() {
  const data = await getUserProfileApi();

  if (!data?.role) {
    redirect("/login");
  }

  const role = data.role;

  const roleRoutes: Record<string, string> = {
    Admin: "/admin",
    Student: "/student",
    Professor: "/professor",
  };

  redirect(roleRoutes[role] ?? "/login");
}
