import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

  background-color: #d6d6d6;
  transition: all 500ms;

  h3 {
    transform: rotate(90deg);
  }

  &:hover {
    flex: 3;
    cursor: pointer;
  }
`;


