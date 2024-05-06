import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch } from "@/store/hooks";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function JobListFilterExperience() {
  const dispatch = useAppDispatch();

  const onChange = (
    _: any,
    newValue: {
      label: string;
      value: number;
    } | null
  ) => {
    dispatch(
      jobListSlice.actions.setFilter({
        experience: newValue?.value || undefined,
      })
    );
  };

  return (
    <Stack sx={{ width: "auto", minWidth: "130px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Experience
      </InputLabel>
      <Autocomplete
        size="small"
        options={experience}
        onChange={onChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} color="info" placeholder="Experience" />
        )}
      />
    </Stack>
  );
}

const experience = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
];
