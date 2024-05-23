import isEmpty from 'lodash/isEmpty';
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
  MouseEvent
} from 'react';
import { createPortal } from 'react-dom';
import { toast } from 'react-toastify';

import { usePreventBodyScroll } from '@app/hooks/usePreventBodyScroll';
import { ContactErrors } from '@app/types';
import { Icon } from '@app/ui-kit';
import { Button } from '@app/ui-kit/Button';
import { Input } from '@app/ui-kit/Input';
import { validateContactInfo } from '@app/utils/validateContactInfo';

import s from './RegistrationModal.module.scss';
import { Form } from './types';
import { cleanupForm } from './utils/cleanupForm';
import { getFormData } from './utils/getFormData';

interface RegistrationModalProps {
  open: boolean;
  toggleOpen: (open?: boolean) => void;
}

export const RegistrationModal = (props: RegistrationModalProps) => {
  const { open, toggleOpen } = props;

  const [errors, setErrors] = useState<ContactErrors>({});
  const [el, setEl] = useState<HTMLElement>();

  usePreventBodyScroll(open);

  useEffect(() => {
    if (document.body) {
      setEl(document.body);
    }
  }, []);

  const closeModal = useCallback(() => {
    toggleOpen(false);
  }, []);

  const stopPropagation = useCallback(
    (e: MouseEvent<HTMLElement>) => e.stopPropagation(),
    []
  );

  const onSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      e.preventDefault();

      const form = e.currentTarget as typeof e.currentTarget & Form;
      const data = getFormData(form);
      const errors = validateContactInfo(data);

      setErrors(errors);

      if (isEmpty(errors)) {
        try {
          const response = await fetch('/api/registration', {
            method: 'POST',
            body: JSON.stringify(data)
          });

          if (response.status !== 200) {
            throw new Error();
          }

          cleanupForm(form);

          toast('Form sent successfully!');

          closeModal();
        } catch (e) {
          toast('Error occurred. Try again later.', {
            type: 'error'
          });
          console.error(e);
        }
      }
    },
    []
  );

  if (!el || !open) {
    return null;
  }

  return createPortal(
    <div className={s.root} onClick={closeModal}>
      <div className={s.modal} onClick={stopPropagation}>
        <div className={s.close} onClick={closeModal}>
          <Icon name="closeModal" className={s.closeIcon} />
        </div>

        <div className={s.img} />

        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.title}>Register for early access</div>
          <Input name="name" label="Your Name" error={errors.name} />
          <Input name="title" label="Title" error={errors.title} />
          <Input name="email" label="Email" type="email" error={errors.email} />
          <Input name="website" label="Website" error={errors.website} />
          <Button type="submit" variant="primary" className={s.submit}>
            Submit
          </Button>
        </form>
      </div>
    </div>,
    el
  );
};
