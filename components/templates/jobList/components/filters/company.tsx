import { InputLabel } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";


export function JobListFilterCompanyLocation() {
  return (
    <Stack sx={{ width: "auto", minWidth: "90px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Location
      </InputLabel>
      <TextField
        placeholder="Location"
        size="small"
        color="info"
      />
    </Stack>
  );
}


export function JobListFilterCompanyName() {
  return (
    <Stack sx={{ width: "auto", minWidth: "160px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Search Company Name
      </InputLabel>
      <TextField
        placeholder="Search Company Name"
        size="small"
        color="info"
      />
    </Stack>
  );
}