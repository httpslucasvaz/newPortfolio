import { Content, TextContent, Text, Wrapper, Arrow } from "./styled";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <Wrapper id="home">
      <Content>
        <div>
          <p data-aos="fade-down">MEU</p>
          <p data-aos="fade-right">PORT</p>
          <p data-aos="fade-left">FOLIO</p>
          <TextContent data-aos="fade-up">
            <Text>desenvolvedor</Text>
            <Text>front-end</Text>
            <img src="./images/line1.svg" alt="line" />
            <img src="./images/line2.svg" alt="line" />
          </TextContent>
          <Arrow data-aos="fade-up">
            <img src="./images/arrow.svg" alt="arrow" />
          </Arrow>
        </div>
      </Content>
    </Wrapper>
  );
}
