import styled from "styled-components";

export const SAdditionalResources = styled.div`
  margin-top: 11.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.437rem;
  cursor: pointer;
`;

export const SIcon = styled.div`
  animation-name: up-and-down;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;

  @keyframes up-and-down {
    0% {
      transform: translateY(15px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
