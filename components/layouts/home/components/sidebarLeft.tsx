import logoSmall from "@/assets/images/logo-small.png";
import logo from "@/assets/images/logo.png";
import { CloseRounded } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useTheme from "@mui/material/styles/useTheme";
import Image from "next/image";
import React, { useState } from "react";
import { homeLayoutSidebarLeftMainLinks } from "../constants";
import { HomeLayoutCustomDrawer, HomeLayoutCustomDrawerHeader } from "./shared";

export default function HomeLayoutSidebarLeft({
  open,
  onOpenChange,
  renderStaticSidebar,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  renderStaticSidebar: boolean;
}) {
  const theme = useTheme();
  const [drawerWidth, setDrawerWidth] = useState({})

  const MyDrawer = React.useMemo(() => {
    if(!renderStaticSidebar) setDrawerWidth({width: 300})
    return renderStaticSidebar ? HomeLayoutCustomDrawer : Drawer;
  }, [renderStaticSidebar]);

  return (
    <MyDrawer
      variant={renderStaticSidebar ? "permanent" : "temporary"}
      anchor="left"
      open={open}
      elevation={0}
      sx={{...drawerWidth}}
      PaperProps={{ sx: { border: 0, ...drawerWidth } }}
    >
      <HomeLayoutCustomDrawerHeader>
        {renderStaticSidebar && !open ? (
          <Image
            src={logoSmall.src}
            blurDataURL={logoSmall.blurDataURL}
            alt="logo small"
            height={42}
            width={42}
          />
        ) : null}

        {open ? (
          <Image
            src={logo.src}
            blurDataURL={logo.blurDataURL}
            alt="logo small"
            height={26}
            width={122}
            priority={true}
          />
        ) : null}

        {!renderStaticSidebar ? (
          <IconButton
            size="small"
            sx={{
              display: "inline-flex",
              position: "absolute",
              right: "16px",
              border: `1px solid ${theme.palette.divider}`,
            }}
            onClick={() => onOpenChange(false)}
          >
            <CloseRounded />
          </IconButton>
        ) : null}
      </HomeLayoutCustomDrawerHeader>
      {renderStaticSidebar ? <Divider /> : null}

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "8px",
          flexGrow: 1,
          borderRight: "1px solid",
          borderRightColor: theme.palette.divider,
        }}
      >
        {homeLayoutSidebarLeftMainLinks.map(({ text, icon }, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                justifyContent: open ? "center" : "center",
                px: open ? 2.5 : 0,
                flexWrap: !open ? "wrap" : "nowrap",
                flexDirection: !open ? "column" : "row",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "0px",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontSize: open ? 14 : 8 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MyDrawer>
  );
}
