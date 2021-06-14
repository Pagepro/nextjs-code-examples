import apiRoutes from 'setup/consts/apiRoutes';
import { makeMutationFn } from 'utils/reactQuery';
import { NewsletterSubscribeParams } from './types';

export const NEWSLETTER_SUBSCRIBE_MUTATION_FN = makeMutationFn<NewsletterSubscribeParams>(
  apiRoutes.newsletter,
);
