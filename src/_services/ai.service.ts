import { aiAxios } from '@/_services/axios';
import axios from 'axios';

const _service = {
  ask: async ({ question }) => await aiAxios.post('/', question),
};

export const aiService = _service;
