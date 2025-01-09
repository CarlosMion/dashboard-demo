"use client";

import { PropsWithChildren, useCallback, useState } from "react";
import { MainContainer, Row } from "./styled";
import Drawer from "@/layout/Drawer";
import Header from "@/layout/Header";

export default function MainLayout({ children }: PropsWithChildren) {
  const [isDrawerOpen, setIDrawerOpen] = useState(true);

  const toggleDrawer = useCallback(() => {
    setIDrawerOpen((prev) => !prev);
  }, []);

  return (
    <MainContainer>
      <Row>
        <Drawer isOpen={isDrawerOpen} />
        <Header toggleDrawer={toggleDrawer} />
      </Row>
      {children}
    </MainContainer>
  );
}
