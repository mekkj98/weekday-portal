import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function JobListFilterRemoteOnSite() {
  return (
    <Stack sx={{ width: "auto", minWidth: "110px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Remote
      </InputLabel>
      <Autocomplete
        size="small"
        multiple
        options={roles}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label={undefined} placeholder="Remote" />
        )}
      />
    </Stack>
  );
}

const roles = [
  { label: "Remote" },
  { label: "Hybrid" },
  { label: "In Office" },
];
