import { Content, Wrapper, Title, IconsContainer, Download } from "./styled";

import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare, FaFileDownload } from "react-icons/fa";

export function Contact() {
  return (
    <Wrapper id="contato">
      <Content>
        <Title>
          <span>
            <p>VAMOS</p>
            <br />
            <p>CONVERSAR?</p>
          </span>
        </Title>

        <IconsContainer>
          <span>
            <a href="https://www.linkedin.com/in/lucasvazz/" target="_blank">
              <FaLinkedin size={150} />
            </a>
          </span>

          <span>
            <a href="https://github.com/httpslucasvaz" target="_blank">
              <FaGithubSquare size={150} />
            </a>
          </span>

          <span>
            <a href="mailto:httpslucasvaz@gmail.com">
              <FaEnvelopeSquare size={150} />
            </a>
          </span>
        </IconsContainer>
        <Download>
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
