/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    readonly VITE_FIREBASE_MEASUREMENT_ID: string;
    readonly VITE_KINDE_AUTH_DOMAIN: string;
    readonly VITE_KINDE_CLIENT_ID: string;
    readonly VITE_KINDE_CLIENT_SECRET: string;
    readonly VITE_KINDE_REDIRECT_URL: string;
    readonly VITE_KINDE_LOGOUT_REDIRECT_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
