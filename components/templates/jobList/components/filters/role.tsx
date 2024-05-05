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
        getOptionLabel={(option) => option.label}
        groupBy={(option) => option.group}
        defaultValue={[roles[13]]}
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
  { group: "Engineering", label: "react native", value: "react_native" },
  { group: "Engineering", label: "android", value: "android" },
  { group: "Engineering", label: "tech lead", value: "tech_lead" },
  { group: "Engineering", label: "dev-ops", value: "dev_ops" },
  { group: "Engineering", label: "data engineer", value: "data_engineer" },
  { group: "Engineering", label: "data science", value: "data_science" },
  {
    group: "Engineering",
    label: "computer-vision",
    value: "computer_vision",
  },
  { group: "Engineering", label: "nlp", value: "nlp" },
  { group: "Engineering", label: "deep-learning", value: "deep_learning" },
  { group: "Engineering", label: "test / qa", value: "test_qa" },
  { group: "Engineering", label: "Web3", value: "Web3" },
  { group: "Engineering", label: "sre", value: "sre" },
  {
    group: "Engineering",
    label: "data-infrastructure",
    value: "data_infrastructure",
  },

  { group: "Design", label: "designer", value: "designer" },
  { group: "Design", label: "design manager", value: "design_manager" },
  { group: "Design", label: "graphic designer", value: "graphic_designer" },
  { group: "Design", label: "product designer", value: "product_designer" },

  { group: "Product", label: "product manager", value: "product_manager" },

  {
    group: "Operations",
    label: "Operations Manager",
    value: "operations_manager",
  },
  {
    group: "Operations",
    label: "founder’s office/chief Of staff",
    value: "founder_office_chief_of_staff",
  },

  {
    group: "Sales",
    label: "sales development representative",
    value: "sales_development_representative",
  },
  { group: "Sales", label: "account executive", value: "account_executive" },
  { group: "Sales", label: "account manager", value: "account_manager" },

  {
    group: "Marketing",
    label: "digital marketing manager",
    value: "digital_marketing_manager",
  },
  { group: "Marketing", label: "growth hacker", value: "growth_hacker" },
  { group: "Marketing", label: "Marketing", value: "Marketing" },
  {
    group: "Marketing",
    label: "product marketing manager",
    value: "product_marketing_manager",
  },

  { group: "Other Engineering", label: "hardware", value: "hardware" },
  { group: "Other Engineering", label: "mechanical", value: "mechanical" },
  { group: "Other Engineering", label: "Systems", value: "Systems" },

  {
    group: "Business Analyst",
    label: "business analyst",
    value: "business_analyst",
  },

  { group: "Data Analyst", label: "data analyst", value: "data_analyst" },

  {
    group: "Project Manager",
    label: "project manager",
    value: "project_manager",
  },

  { group: "Management", label: "management", value: "management" },

  { group: "Legal", label: "legal", value: "legal" },

  { group: "hr", label: "hr", value: "hr" },

  { group: "Finance", label: "finance", value: "finance" },
];
