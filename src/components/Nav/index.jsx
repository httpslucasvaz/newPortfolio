import { Wrapper, NavBar } from "./styled";

const navData = [
  {
    id: 1,
    title: "SOBRE MIM",
    section: "sobre-mim",
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
  return (
    <Wrapper>
      <NavBar>
      
        <p>lucasvaz</p>

        <span>
          {navData.map((item) => (
            <ul>
              <li>{item.title}</li>
            </ul>
          ))}
        </span>
      </NavBar>
    </Wrapper>
  );
}
