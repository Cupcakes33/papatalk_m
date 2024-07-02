"use client";
import React from "react";

import "../styles/global/reset.css";
import "../styles/global/globals.css";
import "../styles/designSystem/colorSystem.css";
import "../styles/designSystem/textSystem.css";
import "../styles/designSystem/sizeSystem.css";
import "swiper/css";
import DefaultContainer from "@/components/bootstrap/container/container_default";

import MuiProvider from "./provider_theme";

interface Props {
  children: React.ReactNode;
}
// 클라이언트에 접근하려면 deps가 하나 더 있어야함
const SettingProvider: React.FC<Props> = ({ children }) => {
  return (
    <MuiProvider>
      <DefaultContainer>{children}</DefaultContainer>
    </MuiProvider>
  );
};

export default SettingProvider;
