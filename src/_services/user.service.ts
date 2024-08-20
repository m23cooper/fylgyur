import { internalAxios, } from "@/_services/axios/internal.axios";
import { useUserStore, } from "@/_stores";

const _service = {
	//  @ts-ignore
	fetchUserPermissions: async () => await internalAxios.get(`/get-user-permissions`, useUserStore().token, { cache: { maxAge: 0 }, }),
	fetchUserAccess: async () => await internalAxios.post(`/me`, null,{ cache: { maxAge: 0 }, }),
	fetchLoggedInUser: async () => await internalAxios.get(`/get-logged-in-user`,{ cache: { maxAge: 0 }, }),
}

export const userService = _service
