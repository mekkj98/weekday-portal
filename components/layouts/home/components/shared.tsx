import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, Theme, styled } from "@mui/material/styles";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(12)} + 1px)`,
  },
});

// -- App tool bar + custom mixins --
export const HomeLayoutCustomDrawerHeader = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px",
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  renderStaticSidebar: boolean;
}

// -- custom app bar for margin's & width changes when sidebar is open
export const HomeLayoutCustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "open" && prop !== "renderStaticSidebar",
})<AppBarProps>(({ theme, open, renderStaticSidebar }) => ({
  height: renderStaticSidebar ? "65px" : "63px",
  paddingLeft:
    renderStaticSidebar && open
      ? `0px`
      : renderStaticSidebar && !open
      ? "90px"
      : "0px",
  background: theme.palette.common.white,
  color: theme.palette.common.black,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  width: `calc(100% - ${drawerWidth * (open && open ? 1 : 0)}px)`,
  ...(open && {
    marginLeft: drawerWidth,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// -- custom drawer for large screen sizes --
export const HomeLayoutCustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
