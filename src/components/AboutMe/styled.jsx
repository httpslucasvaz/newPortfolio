import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh + 5rem);
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
    font-size: clamp(2rem, 5vw, 4rem);
    font-family: "Annie Use Your Telescope", "sans-serif";
    color: ${({ theme }) => theme.colors.primary};
    line-height: 0rem;
    position: absolute;
    margin-right: clamp(5rem, 20vw, 250px);
  }

  p {
    display: block;
    font-size: clamp(6rem, 12vw, 12rem);
    line-height: clamp(4rem, 8.9vw, 8.1rem);
    font-family: "Kanit", "sans-serif";
    background-image: url("./images/lucasvaz.png");
    background-clip: text;
    -webkit-background-clip: text; /* Para navegadores da webkit, como o Safari e o Chrome */
    color: transparent;
  }

  span {
    width: 100%;
    height: auto;
    border-right: 6px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Text = styled.p`
    padding: 0.5rem;
    text-align: justify;
    font-size: clamp(1.2rem, 3vw, 2rem);
`