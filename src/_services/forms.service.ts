import { db } from '@/database/firebase';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import {
  each as _each,
  filter as _filter,
  map as _map,
  find as _find,
  map,
} from 'lodash-es';
import type { THost } from '@/types';
import ErrorManager from '@/utils/ErrorManager';

const mapDocIds = (doc) => {
  return { id: doc.id, ...doc.data() };
};

const _service = {
  getHost: async ({ hostname }: { hostname: string }): Promise<THost> => {
    const ref = doc(db, 'hosts', hostname);
    const snapshot = await getDoc(ref).catch((error) => {
      ErrorManager.onServiceError('getHost failed ' + error);
      throw new Error(error);
    });

    return snapshot.data() as THost;
  },
  //
  getForms: async ({ formIds }: { formIds: string[] }) => {
    const q = query(collection(db, 'forms'), where('id', 'in', formIds));
    const snapshot = await getDocs(q).catch((error) => {
      ErrorManager.onServiceError('getHost failed ' + error);
      throw new Error(error);
    });
    const docs = _map(snapshot.docs, mapDocIds);
    return docs;
  },
};

export const formsService = _service;
