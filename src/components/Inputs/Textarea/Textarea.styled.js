import styled from "styled-components";

export const STextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 3.5rem;
`;

export const STextarea = styled.textarea`
  width: 41.3125rem;
  height: 8.6875rem;
  border: 0.0625rem solid #2984ce;
  border-radius: 0.625rem;
  padding: 1.0625rem 1.25rem;

  &:focus {
    outline: none;
  }
`;
