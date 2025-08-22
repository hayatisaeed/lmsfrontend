import api from "@/core/config/api/api";
import { TgetUserProfile } from "./type";
import { redirect } from "next/navigation";

export async function getUserProfileApi(): Promise<TgetUserProfile> {
  try {
    const response = await api.get("/profile");
    return response.data;
  } catch {
    return redirect("/login");
  }
}
