//cookie
import cookie from "js-cookie";

export function setTokens({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) {
  cookie.set("access", access, {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    path: "/",
  });

  cookie.set("refresh", refresh, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
}

export function getAccessToken() {
  return cookie.get("access");
}

export function getRefreshToken() {
  return cookie.get("refresh");
}

export function clearTokens() {
  cookie.remove("access");
  cookie.remove("refresh");
}
