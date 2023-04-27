
import {
  Wrapper,
  NavBar,
  IconMdMenu,
  IconMdClose,
  NavList,
  NavBarMobile,
} from "./styled";
import { useState, useEffect } from "react";



const navData = [
  {
    id: 1,
    title: "SOBRE MIM",
    section: "sobremim",
  },
  {
    id: 2,
    title: "PROJETOS",
    section: "projetos",
  },
  {
    id: 3,
    title: "CONTATO",
    section: "contato",
  },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const screenWidth = () => {
    if (pageWidth > 900) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    screenWidth();
  }, [pageWidth]);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <Wrapper>
      <NavBar>
        <img src="./images/lucasvazlogo.png" alt="logo" />
        {isOpen ? (
          <IconMdClose onClick={handleOpen} />
        ) : (
          <IconMdMenu onClick={handleOpen} />
        )}
        <NavList>
          {navData.map((item) => (
            <ul key={item.id}>
              <a href={`#${item.section}`}>
                <li>{item.title}</li>
              </a>
            </ul>
          ))}
        </NavList>
      </NavBar>
      {isOpen && (
        <NavBarMobile>
          {navData.map((item) => (
            <ul key={item.id}>
              <a href={`#${item.section}`} onClick={handleOpen}>
                <li>{item.title}</li>
              </a>
            </ul>
          ))}
        </NavBarMobile>
      )}
    </Wrapper>
  );
}
