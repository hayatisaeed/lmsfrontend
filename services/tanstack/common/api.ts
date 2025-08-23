import api from "@/core/config/api/api";
import { IUserSession } from "./type";
import { redirect } from "next/navigation";

export async function getUserSessionApi(): Promise<IUserSession> {
  try {
    const response = await api.get("/auth/session");
    return response.data;
  } catch {
    return redirect("/login");
  }
}
