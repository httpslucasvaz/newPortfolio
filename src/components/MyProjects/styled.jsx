import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 5rem);
  padding-top: 5rem;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;

  p:first-child {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-family: "Annie Use Your Telescope", "sans-serif";
    color: ${({ theme }) => theme.colors.dark};
    line-height: 0;
    position: absolute;
    margin-right: clamp(5rem, 20vw, 250px);
  }

  p {
    display: block;
    font-size: clamp(6rem, 12vw, 10rem);
    line-height: clamp(4rem, 8.9vw, 6.9rem);
    font-family: "Kanit", "sans-serif";
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    width: 100%;
    height: auto;
    border-right: 6px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 30rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.09);

  transition: all 500ms;

  h1 {
    margin-top: 2rem;
    transform: rotate(90deg);
    position: absolute;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;

    a {
      padding: 1rem;
      border-top: 3px solid ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark};

      &:active,
      :visited {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    @media (max-width: 850px) {
      height: 30rem;
    }
  }

  &:hover {
    flex: 3;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Teste = styled.div`
  color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;
