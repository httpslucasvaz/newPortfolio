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
  justify-content: space-around;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;

  p {
    display: block;
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: clamp(0.7rem, 3.8vw, 4.9rem);
    font-family: "Kanit", "sans-serif";
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    width: 100%;
    height: auto;
    border-right: 6px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.icons};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
  }

  a {
    all: unset;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Download = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    all: unset;
  }

  span {
    display: flex;
    gap: 1rem;
    width: 40rem;
    height: 6rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      width: 100%;
      height: 5rem;
    }
  }
`;
