import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { SlDocs } from "react-icons/sl"

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

interface projectType {
  id: number,
  name: string,
  html_url: string,
  description: string,
  homepage: string,
  docs?: string
}
type projectsType = projectType[]

export const Project = (): JSX.Element => {
  // const [repositories, setRepositories] = useState<ReposType[]>([]);
  const selectedProjects: projectsType = [
    // id: ,
    // name: ,
    // homepage: ,
    // description:,
    // html_url: ,
    // docs:
    {
      id: 1,
      name: "Motors Shop (Front End)",
      homepage: "https://motors-shop-g19-front.web.app/",
      description: "A Kenzie Shop é um marketplace online com Front End desenvolvido em React(Vite) que tem como principal objetivo proporcionar uma plataforma onde as pessoas possam comprar e anunciar veículos. Com uma ampla gama de opções disponíveis, desde carros e motos até caminhões e barcos, a Kenzie Shop se esforça para oferecer uma experiência de compra e venda de veículos fácil, conveniente e segura.",
      html_url: "https://github.com/grupo19-t14-paulo/grupo19-t14-paulo-Projeto-Full-Stack/tree/main",
      docs: "https://www.notion.so/Motors-Shop-766e894a660e477b880461347076641c"
    },
    {
      id: 2,
      name: "Motors Shop (Back End)",
      homepage: "",
      description: "O Back End da Kenzie Shop foi desenvolvido no framework Express, garantindo uma API robusta para interagir com o Front End em React(Vite). Com foco em desempenho e segurança, oferece uma experiência de compra e venda de veículos fácil e conveniente.",
      html_url: "https://github.com/grupo19-t14-paulo/grupo19-t14-paulo-Projeto-Full-Stack",
      docs: "https://github.com/grupo19-t14-paulo/grupo19-t14-paulo-Projeto-Full-Stack/tree/main/back#readme"
    },
    {
      id: 4,
      name: "BiblioteKa (Back End)",
      homepage: "https://biblioteka-77uf.onrender.com/api/docs/swagger-ui/#/",
      description: "O BandKamp é um sistema gerenciador de bibliotecas, desenvolvido em Django para permitir a organização e empréstimos de livros de forma eficiente e facilitada. Principais tecnologias: Django, Python-dotenv, e gunicorn(deploy pode entrar e modo repouso, então póde demorar um pouco pra carregar)",
      html_url: "https://github.com/M5-T14-G41/projeto-backend",
      docs: "https://biblioteka-77uf.onrender.com/api/docs/swagger-ui/#/"
    },
    {
      id: 5,
      name: "KenzieBurguer (Front End)",
      homepage: "https://hamburgueria-ver2.vercel.app/",
      description: "Projeto que simula um site de pedidos de uma hamburgueria, contando com login, carrinho e feed de produtos. Tecnologias:  React, TypeScript, styled components, React router dom, Context e bibliotecas   conhecidas como, react-hook-form e yup entre outras.",
      html_url: "https://github.com/Kenzie-Academy-Brasil-Developers/hamburgueria-ver2"
    },
    {
      id: 6,
      name: "Close Worker (Front End)",
      homepage: "https://close-work.vercel.app/home",
      description: "Projeto realizado em equipe que visa a aproximação de fornecedores de serviços diversos e clientes de locais próximos. Com a primeira etapa de desenvolvimento focada na área de Jacarepaguá-RJ. Tecnologias: React, TypeScript, styled components, React router dom, Context e bibliotecas   conhecidas como, react-hook-form e yup entre outras.",
      html_url: "https://github.com/closeWorker/closeWork"
    },
    {
      id: 7,
      name: "Nu Kenzie (Front End)",
      homepage: "https://nu-kenzie-green-kappa.vercel.app/",
      description: "Nu Kenzie é um gerenciador de entrada e saída de valores desenvolvido em React com um design simples de fácil aprendizado onde o usuário pode registrar suas movimentações financeiras",
      html_url: "https://github.com/Kenzie-Academy-Brasil-Developers/Nu-Kenzie-"
    },
  ]




  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(
  //       `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
  //     );

  //     const json = await data.json();

  //     setRepositories(json);

  //     return json;
  //   };

  //   fetchData();
  // }, []);

  return (
    <>

      {selectedProjects.map((project) => (
        < ProjectWrapper key={project.id} >
          <ProjectTitle
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="brand1"
          >
            {project.name}
          </ProjectTitle>
          < Text type="body1" color="grey2" >
            {project.description}
          </Text >
          <ProjectLinks>
            <ProjectLink target="_blank" href={project.html_url}>
              <FaGithub /> Github Code
            </ProjectLink>

            {project.homepage && (
              <ProjectLink target="_blank" href={project.homepage}>
                <FaShare /> App
              </ProjectLink>

            )}
            {project.docs && (<ProjectLink target="_blank" href={project.docs}>
              <SlDocs /> Docs
            </ProjectLink>
            )}
          </ProjectLinks>

        </ProjectWrapper >
      ))}

      {/* {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="brand1"
            >
              {repository.name + "AAAAa"}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  href={repository.homepage}
                >
                  <FaShare /> See demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))} */}
    </>
  );
};
