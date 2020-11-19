import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): unknown {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] =
      validationErrors[error.path] || error.message;
  });

  return validationErrors;
}
