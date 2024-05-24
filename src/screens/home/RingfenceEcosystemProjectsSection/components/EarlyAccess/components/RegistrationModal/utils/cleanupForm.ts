import { Form } from '@app/screens/home/RingfenceEcosystemProjectsSection/components/EarlyAccess/components/RegistrationModal/types';

export function cleanupForm(form: Form) {
  form.name.value = '';
  form.title.value = '';
  form.email.value = '';
  form.website.value = '';
}
