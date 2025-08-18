"use server";

//API
import api from "@/core/config/api/apiServer";

//types
import { TgetUserProfile } from "./types";
import { redirect } from "next/navigation";

export async function getUserProfileApi(): Promise<TgetUserProfile> {
  try {
    const response = await api.get("/api/users/profile/");
    return response.data;
  } catch {
    return redirect("/login");
  }
}
