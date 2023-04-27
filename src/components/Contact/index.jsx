import { Content, Wrapper, Title, IconsContainer, Download } from "./styled";

import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare, FaFileDownload } from "react-icons/fa";


import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


export function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <Wrapper id="contato">
      <Content>
        <Title>
          <span data-aos="fade-right">
            <p>VAMOS</p>
            <br />
            <p>CONVERSAR?</p>
          </span>
        </Title>

        <IconsContainer>
          <span data-aos="fade-up" data-aos-delay="100">
            <a href="https://www.linkedin.com/in/lucasvazz/" target="_blank">
              <FaLinkedin size={150} />
            </a>
          </span>

          <span data-aos="fade-up" data-aos-delay="300">
            <a href="https://github.com/httpslucasvaz" target="_blank">
              <FaGithubSquare size={150} />
            </a>
          </span>

          <span data-aos="fade-up" data-aos-delay="500">
            <a href="mailto:httpslucasvaz@gmail.com">
              <FaEnvelopeSquare size={150} />
            </a>
          </span>
        </IconsContainer>
        <Download data-aos="fade-up" data-aos-delay="200">
        <a href="/pdf/Profile.pdf" download>
            <span>
               <h2>MEU CURRÍCULO</h2> <FaFileDownload size={30} />
            </span>
            </a>
        </Download>
      </Content>
    </Wrapper>
  );
}
