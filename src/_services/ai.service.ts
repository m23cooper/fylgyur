import { aiAxios } from '@/_services/axios';

export const aiService = {
  ask: ({ question }) => aiAxios.post('/', question),
};
