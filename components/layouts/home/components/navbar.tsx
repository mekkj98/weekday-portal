import logo from "@/assets/images/logo.png";
import {
  LinkedIn,
  LiveHelpRounded,
  MenuOpenRounded,
  MenuRounded,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { HomeLayoutCustomAppBar } from "./shared";

export default function HomeLayoutNavbar({
  onToggleLeftDrawer,
  leftDrawerOpen,
  renderStaticSidebar,
}: {
  renderStaticSidebar: boolean;
  leftDrawerOpen: boolean;
  onToggleLeftDrawer: (value: boolean) => void;
}) {
  const theme = useTheme();

  return (
    <HomeLayoutCustomAppBar
      renderStaticSidebar={renderStaticSidebar}
      open={renderStaticSidebar && leftDrawerOpen}
      position={renderStaticSidebar ? "fixed" : "relative"}
    >
      <Toolbar
        sx={{
          height: "100%",
          justifyContent: "space-between",
          position: "relative",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            flexGrow: 1,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => onToggleLeftDrawer(!leftDrawerOpen)}
            edge="start"
          >
            {leftDrawerOpen ? <MenuOpenRounded /> : <MenuRounded />}
          </IconButton>

          {!renderStaticSidebar ? (
              <Image
                src={logo.src}
                blurDataURL={logo.blurDataURL}
                alt="logo small"
                height={26}
                width={122}
                priority={true}
              />
          ) :
          <Typography variant="h5" fontWeight="500" noWrap component="div">
            👋 Keshav
          </Typography>}
        </Box>
        <Box display="flex" alignItems="center" columnGap="8px" sx={{}}>
          <IconButton color="inherit">
            <LiveHelpRounded />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </HomeLayoutCustomAppBar>
  );
}
