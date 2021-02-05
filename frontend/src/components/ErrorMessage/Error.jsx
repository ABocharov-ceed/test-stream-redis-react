import React from 'react';

import { Error } from './Error.style';

export const ErrorMessage = (error = {error: 'Some error'}) => {

  return (
    <Error data-testid="error-message">{error.error}</Error>
  )
}