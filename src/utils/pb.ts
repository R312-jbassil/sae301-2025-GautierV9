import PocketBase from "pocketbase";

const baseUrl = (import.meta as any).env?.PUBLIC_PB_URL ?? "http://127.0.0.1:8090";

const pb = new PocketBase(baseUrl);

export function loadAuthFromCookie(cookieHeader: string) {
  if (cookieHeader) {
    pb.authStore.loadFromCookie(cookieHeader, "pb_auth");
  }
}

export function exportAuthCookieValue() {
  const header = pb.authStore.exportToCookie({
    httpOnly: true,
    secure: (import.meta as any).env?.PROD ?? false,
    sameSite: "Strict",
    path: "/",
  });
  const m = header.match(/pb_auth=([^;]+)/);
  return m ? m[1] : "";
}

export default pb;