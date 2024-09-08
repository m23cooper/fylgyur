import type { TUserRoles } from '@/types/TUserRoles';

export interface TUser {
  first_name: string;
  gdpr: boolean;
  hubspot_owner_id: string | null;
  id: number;
  last_name: string;
  roles: TUserRoles[];
  uuid: string | null;
}
