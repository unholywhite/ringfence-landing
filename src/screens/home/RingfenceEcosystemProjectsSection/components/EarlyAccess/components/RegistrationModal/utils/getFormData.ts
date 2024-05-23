import { Form } from '@app/ screens/home/RingfenceEcosystemProjectsSection/components/EarlyAccess/components/RegistrationModal/types';

export function getFormData(form: Form) {
  const {
    name: { value: name },
    title: { value: title },
    email: { value: email },
    website: { value: website }
  } = form;

  return {
    name,
    title,
    email,
    website
  };
}
