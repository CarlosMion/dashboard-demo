"use client";

import { PropsWithChildren, useCallback, useState } from "react";
import { MainContainer, Row, Content } from "./styled";
import Drawer from "@/layout/Drawer";
import Header from "@/layout/Header";
import { ToastContainer } from "react-toastify";

export default function MainLayout({ children }: PropsWithChildren) {
  const [isDrawerOpen, setIDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIDrawerOpen((prev) => !prev);
  }, []);

  return (
    <MainContainer>
      <ToastContainer />
      <Row>
        <Drawer toggleDrawer={toggleDrawer} isOpen={isDrawerOpen} />
        <Header toggleDrawer={toggleDrawer} />
      </Row>
      <Content>{children}</Content>
    </MainContainer>
  );
}
