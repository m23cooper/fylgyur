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
  getHost: async ({ hostname }): Promise<THost | undefined> => {
    const ref = doc(db, 'hosts', hostname);

    try {
      const snapshot = await getDoc(ref);

      return snapshot.data() as THost;
    } catch (error) {
      // ErrorManager.onServiceError('getHost failed ' + error);
      throw new Error(error);
    }

    return;
  },
  //
  getForms: async ({ formIds }: { formIds: string[] }) => {
    const q = query(collection(db, 'forms'), where('id', 'in', formIds));

    try {
      const snapshot = await getDocs(q);
      const docs = _map(snapshot.docs, mapDocIds);
      return docs;
    } catch (error) {
      // ErrorManager.onServiceError('getForms failed ' + error);
      console.error(error);
      // throw new Error(error);
    }
  },
};

export const formsService = _service;
