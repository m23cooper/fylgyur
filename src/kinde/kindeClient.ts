import {createKindeBrowserClient} from "@kinde-oss/kinde-typescript-sdk";

const {
    VITE_APP_KINDE_AUTH_DOMAIN,
    VITE_APP_KINDE_CLIENT_ID,
    VITE_APP_KINDE_REDIRECT_URL,
    VITE_APP_KINDE_LOGOUT_REDIRECT_URL,
} = import.meta.env;

export const kindeClient = createKindeBrowserClient({
    authDomain: VITE_APP_KINDE_AUTH_DOMAIN,
    clientId: VITE_APP_KINDE_CLIENT_ID,
    logoutRedirectURL: VITE_APP_KINDE_REDIRECT_URL,
    redirectURL: VITE_APP_KINDE_LOGOUT_REDIRECT_URL
});