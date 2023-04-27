import { Content, Wrapper } from "./styled";

export function Footer() {

    const date = new Date();
    const year = date.getFullYear();
  return (
    <Wrapper>
      <Content>
        <p> © {year} - {String('<lucas vaz/>')} </p>
         <img src="./logo.png" /> 
      </Content>
    </Wrapper>
  );
}
