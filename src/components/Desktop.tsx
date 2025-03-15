import React, { useState } from "react";
import Window from "./Window";
import { DesktopWrapper } from "./styles/Desktop.styles";

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState([
    { id: 1, title: "Sobre Mim", content: "Texto sobre mim" },
    { id: 2, title: "Projetos", content: "Meus projetos legais" },
  ]);

  const closeWindow = (id: number) => {
    setWindows(windows.filter((win) => win.id !== id));
  };

  return (
    <DesktopWrapper>
      {windows.map((win) => (
        <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)}>
          {win.content}
        </Window>
      ))}
    </DesktopWrapper>
  );
};

export default Desktop;