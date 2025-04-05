import React from "react";
import HeroSection from "../HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import { ContainerMaintenance } from "./FilesPage.styles";
import MaintenanceWindow from "../MaintenanceWindow";
import ThemeWrapper from "../../ThemeWrapper";

const FilesPage: React.FC = () => {
  
  return (
    <>
    <ThemeWrapper>
    <ResponsiveLayout>
        <HeroSection title="Arquivos" description="Bem-vindo à minha coleção de arquivos! Aqui você encontrará uma mistura de estudos, anotações, documentos e conteúdos relacionados ao meu aprendizado e evolução como desenvolvedora. Cada item reflete uma parte da minha jornada, compartilhando o conhecimento adquirido, insights e reflexões ao longo do caminho. Fique à vontade para explorar e acompanhar meu crescimento profissional!" />
       <ContainerMaintenance>
           <MaintenanceWindow/>
        </ContainerMaintenance>
      </ResponsiveLayout>
      </ThemeWrapper>
    </>
  );
};

export default FilesPage;