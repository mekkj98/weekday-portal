import Grid from "@mui/material/Grid";
import JobListFilterMinBasePay from "./basePay";
import {
  JobListFilterCompanyLocation,
  JobListFilterCompanyName
} from "./company";
import JobListFilterExperience from "./experience";
import JobListFilterRemoteOnSite from "./remoteOnSite";
import JobListFilterRole from "./role";
import JobListFilterTechStack from "./techStack";

export default function JobListFilter() {
  return (
    <Grid container gap={2} my={2} alignItems="flex-end">
      <Grid item>
        <JobListFilterRole />
      </Grid>

      <Grid item>
        <JobListFilterExperience />
      </Grid>

      <Grid item>
        <JobListFilterRemoteOnSite />
      </Grid>

      <Grid item>
        <JobListFilterTechStack />
      </Grid>

      <Grid item>
        <JobListFilterMinBasePay />
      </Grid>

      <Grid item>
        <JobListFilterCompanyLocation />
      </Grid>
      <Grid item>
        <JobListFilterCompanyName />
      </Grid>
    </Grid>
  );
}
