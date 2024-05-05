import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch } from "@/store/hooks";
import { InputLabel } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export function JobListFilterCompanyLocation() {
  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    dispatch(
      jobListSlice.actions.setFilter({
        location: e.target?.value?.toLowerCase() || "",
      })
    );
  };

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
        onChange={onChange}
      />
    </Stack>
  );
}

export function JobListFilterCompanyName() {
  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    dispatch(
      jobListSlice.actions.setFilter({
        companyName: e.target?.value?.toLowerCase() || "",
      })
    );
  };

  return (
    <Stack sx={{ width: "auto", minWidth: "160px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Search Company Name
      </InputLabel>
      <TextField
        onChange={onChange}
        placeholder="Search Company Name"
        size="small"
        color="info"
      />
    </Stack>
  );
}
