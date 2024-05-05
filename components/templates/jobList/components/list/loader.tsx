import { LoopRounded } from "@mui/icons-material";
import Box from "@mui/material/Box";

export default function JobListGridLoader() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" py={5}>
      <Box
        display="flex"
        columnGap="10px"
        alignItems="center"
        height="fit-content"
        width="fit-content"
      >
        <LoopRounded
          sx={{
            animation: "spin 1.2s linear infinite",
            "@keyframes spin": {
              "0%": {
                transform: "rotate(0)",
              },
              "100%": {
                transform: "rotate(360deg)",
              },
            },
          }}
        />
        Loading
      </Box>
    </Box>
  );
}
