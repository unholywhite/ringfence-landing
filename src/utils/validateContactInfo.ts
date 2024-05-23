import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';

import { ContactErrors, ContactInfo } from '../types';

export function validateContactInfo(data: ContactInfo) {
  const errors = reduce(
    data,
    (acc: ContactErrors, v: string, k: string) => {
      if (isEmpty(v)) {
        acc[k as keyof ContactInfo] = 'Field can not be empty';
      }

      return acc;
    },
    {}
  );

  return errors;
}
