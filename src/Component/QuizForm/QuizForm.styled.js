import {
  Form as FormicForm,
  Field as FormicFild,
  ErrorMessage as FormicError,
} from "formik";
import styled from "styled-components";

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
  outline: 1px solid red;
  margin-top: 20px;
`;

export const Fild = styled(FormicFild)`
  padding: 4px;
  font: inherit;
`;

export const StyledGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormicError)`
  font-size: 6px;
  color: ${(p) => p.theme.colors.red};
`;
