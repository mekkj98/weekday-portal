import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch } from "@/store/hooks";
import { InputLabel } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { darken, lighten, styled } from "@mui/system";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.contrastText,
  fontWeight: "600",
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function JobListFilterRole() {
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
        roles: newValue,
      })
    );
  };

  return (
    <Stack sx={{ width: "auto", minWidth: "100px" }}>
      <InputLabel
        sx={{ fontSize: 13, color: "common.black", fontWeight: "500" }}
      >
        Roles
      </InputLabel>
      <Autocomplete
        size="small"
        multiple
        options={roles}
        onChange={onChange}
        getOptionLabel={(option) => option.label}
        groupBy={(option) => option.group}
        filterSelectedOptions
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label={undefined} placeholder="Roles" />
        )}
      />
    </Stack>
  );
}

const roles = [
  { group: "Engineering", label: "backend", value: "backend" },
  { group: "Engineering", label: "frontend", value: "frontend" },
  { group: "Engineering", label: "fullstack", value: "fullstack" },
  { group: "Engineering", label: "iOS", value: "iOS" },
  { group: "Engineering", label: "flutter", value: "flutter" },
  { group: "Engineering", label: "react native", value: "react native" },
  { group: "Engineering", label: "android", value: "android" },
  { group: "Engineering", label: "tech lead", value: "tech lead" },
  { group: "Engineering", label: "dev-ops", value: "dev ops" },
  { group: "Engineering", label: "data engineer", value: "data engineer" },
  { group: "Engineering", label: "data science", value: "data science" },
  {
    group: "Engineering",
    label: "computer-vision",
    value: "computer vision",
  },
  { group: "Engineering", label: "nlp", value: "nlp" },
  { group: "Engineering", label: "deep-learning", value: "deep learning" },
  { group: "Engineering", label: "test / qa", value: "test qa" },
  { group: "Engineering", label: "Web3", value: "Web3" },
  { group: "Engineering", label: "sre", value: "sre" },
  {
    group: "Engineering",
    label: "data-infrastructure",
    value: "data infrastructure",
  },

  { group: "Design", label: "designer", value: "designer" },
  { group: "Design", label: "design manager", value: "design manager" },
  { group: "Design", label: "graphic designer", value: "graphic designer" },
  { group: "Design", label: "product designer", value: "product designer" },

  { group: "Product", label: "product manager", value: "product manager" },

  {
    group: "Operations",
    label: "Operations Manager",
    value: "operations manager",
  },
  {
    group: "Operations",
    label: "founder’s office/chief Of staff",
    value: "founder_office_chief_of staff",
  },

  {
    group: "Sales",
    label: "sales development representative",
    value: "sales_development representative",
  },
  { group: "Sales", label: "account executive", value: "account executive" },
  { group: "Sales", label: "account manager", value: "account manager" },

  {
    group: "Marketing",
    label: "digital marketing manager",
    value: "digital_marketing manager",
  },
  { group: "Marketing", label: "growth hacker", value: "growth hacker" },
  { group: "Marketing", label: "Marketing", value: "Marketing" },
  {
    group: "Marketing",
    label: "product marketing manager",
    value: "product_marketing manager",
  },

  { group: "Other Engineering", label: "hardware", value: "hardware" },
  { group: "Other Engineering", label: "mechanical", value: "mechanical" },
  { group: "Other Engineering", label: "Systems", value: "Systems" },

  {
    group: "Business Analyst",
    label: "business analyst",
    value: "business analyst",
  },

  { group: "Data Analyst", label: "data analyst", value: "data analyst" },

  {
    group: "Project Manager",
    label: "project manager",
    value: "project manager",
  },

  { group: "Management", label: "management", value: "management" },

  { group: "Legal", label: "legal", value: "legal" },

  { group: "hr", label: "hr", value: "hr" },

  { group: "Finance", label: "finance", value: "finance" },
];
