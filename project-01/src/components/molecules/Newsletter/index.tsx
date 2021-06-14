import React from 'react';
import { Form } from 'react-final-form';
import { Box, Text, Flex } from 'theme-ui';

import Button from 'components/atoms/Buttons/Button';
import { FormInput } from 'components/atoms/Fields/Input';
import {
  ButtonModeType,
  ButtonSize,
} from 'components/atoms/Buttons/Button/types';
import Message from 'components/atoms/Message';
import { MessageVariant } from 'components/atoms/Message/types';
import { NewsletterProps } from './types';
import { useNewsletterFormSubmitHandler } from './hooks';

const Newsletter: React.FC<NewsletterProps> = ({ title }) => {
  const submitHandler = useNewsletterFormSubmitHandler();

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit, submitting, submitSucceeded }) =>
        submitSucceeded ? (
          <Message variant={MessageVariant.Success}>
            You have successfully subscribed to the newsletter!
          </Message>
        ) : (
          <Box as="form" onSubmit={handleSubmit}>
            <Text as="h3" variant="newsletter.title">
              {title}
            </Text>
            <Flex variant="newsletter.content">
              <FormInput
                name="email"
                placeholder="Email Address"
                type="email"
                required
                disabled={submitting}
              />
              <Box variant="newsletter.action">
                <Button
                  type="submit"
                  size={ButtonSize.Medium}
                  modeType={ButtonModeType.Colored}
                  disabled={submitting}
                >
                  Subscribe
                </Button>
              </Box>
            </Flex>
          </Box>
        )
      }
    </Form>
  );
};

export default Newsletter;
