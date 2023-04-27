import { Title, Wrapper, Content, Card, CardContainer } from "./styled";
import data from "../../data/myProjects";

export function MyProjects() {
  return (
    <Wrapper id="projetos">
      <Content>
        <Title>
          <span>
            <p>MEUS</p>
            <p>
              PRO <br />
              JETOS
            </p>
          </span>
        </Title>
        <CardContainer>
          {data.map((item) => (
            <Card key={item.id}>
              <h1> {item.title} </h1>
              <div>
                <a href={item.url} target="_blank">
                  GITHUB
                </a>
              </div>
            </Card>
          ))}
        </CardContainer>
      </Content>
    </Wrapper>
  );
}
