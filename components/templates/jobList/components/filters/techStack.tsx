import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/system';

const GroupItems = styled('ul')({
  padding: 0,
});

export default function JobListFilterTechStack() {
  return (
    <Stack sx={{ width: "auto", minWidth: "132px" }}>
       <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Tech stack
      </InputLabel>
      <Autocomplete
        size="small"
        multiple
        options={roles}
        defaultValue={[roles[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} placeholder="Tech Stack" />
        )}
      />
    </Stack>
  );
}

const roles = [
  { "label": "Python", "value": "Python" },
  { "label": "Java", "value": "Java" },
  { "label": "GoLang", "value": "GoLang" },
  { "label": "Ruby/Rails", "value": "Ruby/Rails" },
  { "label": "C++", "value": "C++" },
  { "label": "Kotlin", "value": "Kotlin" },
  { "label": "Django", "value": "Django" },
  { "label": "C#", "value": "C#" },
  { "label": "GraphQL", "value": "GraphQL" },
  { "label": "Flask", "value": "Flask" },
  { "label": "Typescript", "value": "Typescript" },
  { "label": "AWS", "value": "AWS" },
  { "label": "Javascript", "value": "Javascript" },
  { "label": "Rust", "value": "Rust" },
  { "label": "NodeJS", "value": "NodeJS" },
  { "label": "React", "value": "React" }
]