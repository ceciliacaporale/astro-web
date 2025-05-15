import React, { useState, useRef } from "react";
import { DesktopWrapper, ContentArea, ContainerToggle } from "./Desktop.styles";
import LoadingWindow from "../../../components/LoadingWindow";
import ToggleIcon from "../../../components/ToggleIcon";
import MainWindow from "../../../components/MainWindow";
import RetroComputer from "../../../components/RetroComputer";
import Folder from "../../../components/Folder";
import SoftwareSkills from "../../../components/SoftwareSkills";
import MemoryStorage from "../../../components/MemoryStorage";
import Skills from "../../../components/Skills";
import Terminal from "../../../components/Terminal";
import WindowInfo from "../../../components/WindowInfo";
import ThemeWrapper from "../../../ThemeWrapper";
import ThemeToggleButton from "../../../components/ThemeToggleButton";

const Desktop: React.FC = () => {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleLoadingWindow = () => {
    setIsLoadingVisible(prev => !prev);
  };

  return (
    <ThemeWrapper>
      <DesktopWrapper>
        <ContentArea ref={containerRef}>
          <ContainerToggle>
            <ThemeToggleButton />
          </ContainerToggle>
          
          <LoadingWindow 
            isVisible={isLoadingVisible}
            onClose={() => setIsLoadingVisible(false)}
            onOpen={() => setIsLoadingVisible(true)}
          />
          
          {!isLoadingVisible && (
            <ToggleIcon onClick={() => setIsLoadingVisible(true)} />
          )}
          
          <MainWindow />
          <Skills containerRef={containerRef} />
          <WindowInfo containerRef={containerRef} />
          <Terminal containerRef={containerRef} />
          <MemoryStorage containerRef={containerRef} />
          <RetroComputer containerRef={containerRef} />
          <SoftwareSkills containerRef={containerRef} />
          <Folder containerRef={containerRef} />
        </ContentArea>
      </DesktopWrapper>
    </ThemeWrapper>
  );
};

export default Desktop;