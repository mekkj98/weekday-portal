import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch } from "@/store/hooks";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function JobListFilterTechStack() {
  const dispatch = useAppDispatch();

  const onChange = (
    _: any,
    value: {
      label: string;
      value: string;
    }[]
  ) => {
    const newValue = value.map((v) => v.value.toLowerCase());
    dispatch(
      jobListSlice.actions.setFilter({
        techStack: newValue,
      })
    );
  };
  
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
        options={techStack}
        filterSelectedOptions
        onChange={onChange}
        renderInput={(params) => (
          <TextField {...params} placeholder="Tech Stack" />
        )}
      />
    </Stack>
  );
}

const techStack = [
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "GoLang", value: "GoLang" },
  { label: "Ruby/Rails", value: "Ruby/Rails" },
  { label: "C++", value: "C++" },
  { label: "Kotlin", value: "Kotlin" },
  { label: "Django", value: "Django" },
  { label: "C#", value: "C#" },
  { label: "GraphQL", value: "GraphQL" },
  { label: "Flask", value: "Flask" },
  { label: "Typescript", value: "Typescript" },
  { label: "AWS", value: "AWS" },
  { label: "Javascript", value: "Javascript" },
  { label: "Rust", value: "Rust" },
  { label: "NodeJS", value: "NodeJS" },
  { label: "React", value: "React" },
];
