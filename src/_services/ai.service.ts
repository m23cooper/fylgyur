import axios from 'axios';

const _service = {
  ask: async ({ question }) =>
    await axios.post(`https://eo3yeesdfhtuzia.m.pipedream.net`, question),
};

export const aiService = _service;
