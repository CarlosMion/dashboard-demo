"use client";

import { User } from "@/types";
import { PropsWithChildren, useCallback, useState } from "react";
import { MainContainer } from "./styled";
import Drawer from "@/layout/Drawer";
import Header from "@/layout/Header";

interface MainLayoutProps extends PropsWithChildren {
  loggedInUser?: User;
}

export default function MainLayout({
  loggedInUser,
  children,
}: MainLayoutProps) {
  const [isDrawerOpen, setIDrawerOpen] = useState(true);

  const toggleDrawer = useCallback(() => {
    setIDrawerOpen((prev) => !prev);
  }, []);

  return (
    <MainContainer>
      <Drawer isOpen={isDrawerOpen} />
      <Header loggedInUser={loggedInUser} toggleDrawer={toggleDrawer} />
      {children}
    </MainContainer>
  );
}
