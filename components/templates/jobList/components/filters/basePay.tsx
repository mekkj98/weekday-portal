import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch } from "@/store/hooks";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function JobListFilterMinBasePay() {
  const dispatch = useAppDispatch();

  const onMinBasePayChange = (
    _: any,
    newValue: {
      label: string;
      value: number;
    } | null
  ) => {
    dispatch(
      jobListSlice.actions.setFilter({
        minBasePay: newValue?.value || undefined,
      })
    );
  };

  return (
    <Stack sx={{ width: "auto", minWidth: "190px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Min Base Pay
      </InputLabel>
      <Autocomplete
        size="small"
        options={basePay}
        filterSelectedOptions
        onChange={onMinBasePayChange}
        renderInput={(params) => (
          <TextField {...params} color="info" placeholder="Minimum Base Pay" />
        )}
      />
    </Stack>
  );
}

const basePay = [
  { label: "0L", value: 0 },
  { label: "10L", value: 10 },
  { label: "20L", value: 20 },
  { label: "30L", value: 30 },
  { label: "40L", value: 40 },
  { label: "50L", value: 50 },
  { label: "60L", value: 60 },
  { label: "70L", value: 70 },
];
