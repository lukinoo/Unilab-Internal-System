import styled from "styled-components";

export const withCircle = (WrappedComponent) => {
  return (props) => {
    return (
      <SCircle>
        <WrappedComponent {...props}/>
      </SCircle>
    );
  };
};

const SCircle = styled.div`
  width: 3.4375rem;
  height: 3.4375rem;
  border-radius: 50%;
  border: 0.0625rem solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0rem 0rem 0.25rem 0.1rem rgba(255, 255, 255, 0.6),
    0rem 0rem 0.5rem 0.1rem rgba(255, 255, 255, 0.4),
    0rem 0rem 0.75rem 0.1rem rgba(255, 255, 255, 0.3),
    0rem 0rem 1rem 0.1rem rgba(255, 255, 255, 0.2);
`;
