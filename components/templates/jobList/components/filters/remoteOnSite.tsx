import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch } from "@/store/hooks";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function JobListFilterRemoteOnSite() {
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
        remote: newValue,
      })
    );
  };

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
        onChange={onChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label={undefined} placeholder="Remote" />
        )}
      />
    </Stack>
  );
}

const roles = [
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
  { label: "In Office", value: "in office" },
];
