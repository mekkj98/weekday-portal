"use client";
import { CloseOutlined, KeyboardArrowDownRounded } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      light: "#88f4d6",
      main: "#55efc4",
      dark: "#44ebb6",
      contrastText: "#000000",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiChip :{
      defaultProps :{
        deleteIcon : <CloseOutlined/>,
        sx : {
          borderRadius: "4px"
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        endAdornment: (
          <Box sx={{ height: "100%", display: "flex" }}>
            <Divider
              variant="fullWidth"
              orientation="vertical"
              sx={{ height: "100%", width: "1px" }}
            />
            <KeyboardArrowDownRounded />
          </Box>
        ),
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <KeyboardArrowDownRounded />,
      },
    },
  },
});

export default theme;
