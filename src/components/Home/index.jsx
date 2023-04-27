import { Content, TextContent, Text, Wrapper, Arrow } from "./styled";

export function Home() {
  return (
    <Wrapper id="home">
      <Content>
        <div>
          <p>MEU</p>
          <p>PORT</p>
          <p>FOLIO</p>
          <TextContent>
            <Text>desenvolvedor</Text>
            <Text>front-end</Text>
            <img src="./images/line1.svg" alt="line" />
            <img src="./images/line2.svg" alt="line" />
          </TextContent>
          <Arrow>
          <img src="./images/arrow.svg" alt="arrow" />
          </Arrow>
        </div>
      </Content>
    </Wrapper>
  );
}
