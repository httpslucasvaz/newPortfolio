import { Title, Wrapper, Content, Card, CardContainer } from "./styled";
import data from "../../data/myProjects";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


export function MyProjects() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <Wrapper id="projetos">
      <Content>
        <Title>
          <span>
            <p data-aos="fade-down">MEUS</p>
            <p data-aos="fade-right">
              PRO <br />
              JETOS
            </p>
          </span>
        </Title>
        <CardContainer data-aos="fade-up">
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
