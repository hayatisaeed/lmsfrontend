// axios
import api from "@/core/config/api";

// NEXT
import { redirect } from "next/navigation";

export default async function Main() {
  try {
    const response = await api.get("/api/users/profile/");

    if (response.status !== 200 || !response.data?.role) {
      return redirect("/login");
    }

    const role = response.data.role;

    const roleRoutes: Record<string, string> = {
      ADMIN: "/admin",
      STUDENT: "/student",
      PROFESSOR: "/professor",
    };

    return redirect(roleRoutes[role] ?? "/login");
  } catch {
    return redirect("/login");
  }
}
