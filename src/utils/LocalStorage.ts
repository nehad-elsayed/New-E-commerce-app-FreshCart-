const TOKEN_KEY = " fresh cart token";

export function getLocalStorageToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function setLocalStorageToken(token: string) {
  return localStorage.setItem(TOKEN_KEY, token);
}
export function removeLocalStorageToken() {
  return localStorage.removeItem(TOKEN_KEY);
}
