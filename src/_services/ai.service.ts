import { aiAxios } from '@/_services/axios';
import axios from 'axios';

const { VITE_AI_URL } = import.meta.env;

const _service = {
  ask: async ({ question }) => await aiAxios.post('/', question),
};

export const aiService = _service;
