//cookie
import cookie from "js-cookie";

export function setAccessToken(access: string, expires?: number) {
  cookie.set("access", access, {
    expires: new Date(Date.now() + (expires || 10 * 60 * 1000)),
    path: "/",
  });
}

export function getAccessToken() {
  return cookie.get("access");
}

export function removeAccessToken() {
  cookie.remove("access");
}
