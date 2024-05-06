import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import HomeLayoutNavbar from "./components/navbar";
import { HomeLayoutCustomDrawerHeader } from "./components/shared";
import HomeLayoutSidebarLeft from "./components/sidebarLeft";

export default function MiniDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = useMediaQuery("(min-width: 1279px)");
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: x ? "row" : "column" }}>
      <HomeLayoutSidebarLeft
        open={open}
        onOpenChange={setOpen}
        renderStaticSidebar={x}
      />
      
      <HomeLayoutNavbar
        leftDrawerOpen={open}
        renderStaticSidebar={x}
        onToggleLeftDrawer={setOpen}
      />

      <Box component="main" sx={{ flexGrow: 1, px: {xs: 1, md: 3}, py: {xs: 2, md: 3} }}>
        {x ? <HomeLayoutCustomDrawerHeader /> : null}
        {children}
      </Box>
    </Box>
  );
}
