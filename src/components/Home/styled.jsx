import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh + 5rem);
  align-items: center;
  justify-content: center;

  p:first-child {
    font-size: clamp(2rem, 5vw, 4rem);
    font-family: "Annie Use Your Telescope", "sans-serif";
    color: ${({ theme }) => theme.colors.dark};
    line-height: 0rem;
    position: absolute;
    margin-right: clamp(5rem, 20vw, 250px);
  }

  p {
    font-size: clamp(6rem, 12vw, 12rem);
    line-height: clamp(4rem, 8.9vw, 8.1rem);
    font-family: "Kanit", "sans-serif";
    color: ${({ theme }) => theme.colors.primary};
  }

 
`;

export const Text = styled.span`
  display: flex;
  font-size: clamp(1.8rem, 4vw, 4rem);
  font-family: "Annie Use Your Telescope", "sans-serif";
  line-height: clamp(1.5rem, 3vw, 3rem);
  justify-content: flex-end;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: clamp(-2rem, -6rem, -9rem);
    align-items: flex-end;
  
    img {
    width: clamp(6rem, 12vw, 19rem);
  }

  img:last-child {
    width: clamp(8rem, 14vw, 22rem);
    margin-top: clamp(-0.8rem, -5rem, -6rem);
  }
`;

export const Arrow = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`