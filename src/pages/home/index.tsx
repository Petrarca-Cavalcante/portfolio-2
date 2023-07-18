// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio-2`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                // width={"70px"}
                // height={"70px"}
              />
              <Text type="heading1" color="grey4" >Olá! Eu sou {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Transformo as suas{" "}
              <Text as="span" type="heading1" color="brand1">
                ideias
              </Text>{" "}
              em{" "}
              <Text as="span" type="heading1" color="brand1">
                realidade
              </Text>
            </Text>
            <Text type="body1" color="grey2">
              Seja Bem-vind@!
              <br />
              Desenvolvedor Web Full Stack em formação, já fiz mais de 40 projetos
              voltados para diversos fins como e-commerce, landpages, sites
              empresariais, contratação de serviços gerais, consulta em API’s
              abertas entre outros.
              <br />
              Para isto, usei diversas tecnologias, entre elas; React, Typescript,
              HTML5, CSS3, Express, Django juntamente de metodologias ágeis como
              SCRUM, KANBAN e GITFLOW.
              <br />
              E com isso estou aberto para uma oportunidade como Desenvolvedor
              Web Front, Back ou Full Stack.
              <br /><br/>
              Nesse ambiente, você encontrará as tecnologias que já possuo
              habilidade e também poderá verificar os projetos que já desenvolvi!

            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Ver código fonte deste portfolio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
