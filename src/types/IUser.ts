import type {IUserRoles} from "@/types/IUserRoles";


export interface IUser
{
	first_name: string;
	gdpr: boolean;
	hubspot_owner_id: string | null;
	id: number;
	last_name: string;
	roles: IUserRoles[];
	uuid: string | null;
}
