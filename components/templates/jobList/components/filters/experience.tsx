import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function JobListFilterExperience() {
  return (
    <Stack sx={{ width: "auto", minWidth: "130px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Experience
      </InputLabel>
      <Autocomplete
        size="small"
        options={roles}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            color="info"
            placeholder="Experience"
          />
        )}
      />
    </Stack>
  );
}

const roles = [
  { label: "0L" },
  { label: "10L" },
  { label: "20L" },
  { label: "30L" },
  { label: "40L" },
  { label: "50L" },
  { label: "60L" },
  { label: "70L" },
];
