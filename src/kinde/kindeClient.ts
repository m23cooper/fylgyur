import {createKindeBrowserClient} from "@kinde-oss/kinde-typescript-sdk";

const {
    VITE_KINDE_AUTH_DOMAIN,
    VITE_KINDE_CLIENT_ID,
    VITE_KINDE_REDIRECT_URL,
    VITE_KINDE_LOGOUT_REDIRECT_URL,
} = import.meta.env;

export const kindeClient = createKindeBrowserClient({
    authDomain: VITE_KINDE_AUTH_DOMAIN,
    clientId: VITE_KINDE_CLIENT_ID,
    logoutRedirectURL: VITE_KINDE_LOGOUT_REDIRECT_URL,
    redirectURL: VITE_KINDE_REDIRECT_URL,
});