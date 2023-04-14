import { Content, TextContent, Text, Wrapper } from "./styled";



export function Home() {
  return (
    <Wrapper>
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
        </div>
      </Content>
    </Wrapper>
  );
}
