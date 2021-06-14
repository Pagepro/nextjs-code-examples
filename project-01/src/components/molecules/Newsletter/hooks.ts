import { useCallback } from 'react';
import { SubmitHandler } from 'react-final-form';
import { useMutation } from 'react-query';
import { mapApiErrorsToFormErrors } from 'utils/finalForm';
import { NEWSLETTER_SUBSCRIBE_MUTATION_FN } from './consts';
import { NewsletterFormValues } from './types';

export const useNewsletterFormSubmitHandler = (): SubmitHandler<NewsletterFormValues> => {
  const { mutateAsync: subscribeToNewsletter } = useMutation(
    NEWSLETTER_SUBSCRIBE_MUTATION_FN,
  );

  return useCallback(
    async ({ email }) => {
      try {
        if (!email) {
          return {
            email: 'Email is required',
          };
        }

        await subscribeToNewsletter({ data: { email } });

        return undefined;
      } catch (error) {
        const { errors, generalError } = mapApiErrorsToFormErrors(error);

        return errors || (generalError ? { email: generalError } : undefined);
      }
    },
    [subscribeToNewsletter],
  );
};
