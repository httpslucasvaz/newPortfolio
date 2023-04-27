import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  z-index: 999;

  a {
    all: unset;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  height: 100%;
  max-width: 1180px;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  img {
    width: 8rem;
    margin-left: 1rem;
  }

`;

export const NavList = styled.div`
  display: flex;
  gap: 1em;
  ul {
    li {
      display: flex;
      list-style: none;
      font-size: clamp(1em, 1.3vw, 1.2em);
      font-weight: 600;
      cursor: pointer;
      padding: 0.5em 1em;
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavBarMobile = styled.nav`
  height: calc(100vh - 5rem);
  width: 100%;
  position: absolute;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      list-style: none;
      font-size: clamp(2em, 1.9vw, 3em);
      font-weight: 600;
      cursor: pointer;
      padding: 0.5em 1em;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const IconMdMenu = styled(MdMenu)`
  display: none;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3em;
  margin-right: 0.3em;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const IconMdClose = styled(MdClose)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3em;
  margin-right: 0.3em;

  @media (max-width: 900px) {
    display: block;
  }
`;
