import { swapiAxios as swapi } from '@/_services/axios';
import { AxiosResponse } from 'axios';

export const swapiService = {
  getFilms: (params): Promise<AxiosResponse> => swapi.get(`/films`, params),
};
