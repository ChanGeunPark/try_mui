import { Box, Button } from "@mui/material";
import React from "react";
import { HeaderStyle } from "./MainLayout.style";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <HeaderStyle $size="lg">
        <h1>LOGO</h1>
        <Button variant="contained">Login</Button>
      </HeaderStyle>
      {children}
    </div>
  );
};

export default MainLayout;
