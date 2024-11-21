import type { TAsynchFormProps } from '@/types/TAsynchFormProps';

export type TAsynchForm = {
  id: string;
  title: string;
  key: string;
  order?: number; // order is merged onto these objects after load
  props: TAsynchFormProps;
};
