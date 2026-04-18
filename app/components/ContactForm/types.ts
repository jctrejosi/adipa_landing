export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  minMessageLengthLabel: string;
  submitButtonLabel: string;

  successTitle: string;
  successDescription: string;
  successButtonLabel: string;
};
