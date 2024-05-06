import { JobDetailsApiResponseInterface } from "@/store/features/jobList/api";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

function CardJobListTopTags() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
        mb: 1,
      }}
    >
      <Chip
        label="⏳ Posted a month ago"
        variant="outlined"
        sx={{ py: "0px", rounded: "6px" }}
      />
      <Chip label="📈 1 application" variant="outlined" sx={{ py: "0px" }} />
    </Box>
  );
}

function CardJobListCompanyProfile({
  logoUrl,
  companyName,
  jobRole,
  location,
}: {
  logoUrl: string;
  companyName: string;
  jobRole: string;
  location: string;
}) {
  return (
    <Box display="flex" columnGap="8px" alignItems="center">
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: "50%",
          height: "40px",
          width: "40px",
        }}
      >
        <Image
          src={logoUrl}
          alt={companyName}
          height={40}
          width={40}
          unoptimized={true}
        />
      </Box>
      <Box>
        <Typography fontWeight="600" sx={{ color: "grey.700" }}>
          {companyName}
        </Typography>
        <Typography fontSize={14} fontWeight="500">
          {jobRole}
        </Typography>
        <Typography fontSize={14}>{location}</Typography>
      </Box>
    </Box>
  );
}

function CardJobListEstimatedSalary({
  salaryCurrencyCode,
  minJdSalary,
  maxJdSalary,
}: {
  salaryCurrencyCode: string;
  minJdSalary: number | null;
  maxJdSalary: number | null;
}) {
  return (
    <Box display="flex" alignItems="center" columnGap="8px" my={0.5}>
      <Typography fontSize={14}>
        Estimated Salary: {salaryCurrencyCode === "USD" ? "$" : "₹"}
        {minJdSalary ? `${minJdSalary} - ` : ""}
        {maxJdSalary || ""} LPA ✅
      </Typography>
    </Box>
  );
}

function CardJobListAbout({
  jobDetailsFromCompany,
}: {
  jobDetailsFromCompany: string;
}) {
  return (
    <>
      <Box
        sx={{
          maskImage:
            "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
        }}
      >
        <Typography variant="h6" fontWeight={500} fontSize={17}>
          About Company:
        </Typography>
        <Typography sx={{ color: "grey.700" }}>
          {jobDetailsFromCompany}
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          position: "absolute",
          width: "100%",
          bottom: "0px",
        }}
      >
        <Link href="/" style={{ backgroundColor: "rgba(255,255, 255, 0.8)" }}>
          View Job
        </Link>
      </Box>
    </>
  );
}

function CardJobListExperience({
  minExp,
  maxExp,
}: {
  minExp: number | null;
  maxExp: number | null;
}) {
  return (
    <Box sx={{ my: 1.2 }}>
      <Typography fontWeight="500" sx={{ color: "grey.600" }}>
        Minimum Experience
      </Typography>
      <Typography>{minExp || maxExp} Years</Typography>
    </Box>
  );
}

export default function CardJobList({
  data,
}: {
  data: JobDetailsApiResponseInterface;
}) {
  return (
    <Card
      sx={{
        border: "1px solid rgba(0,0,0,0.059)",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "6px",
        m: "12px",
        height: "524px",
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "space-between",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
          height="100%"
          overflow="hidden"
        >
          <Box>
            <CardJobListTopTags />
            <CardJobListCompanyProfile
              jobRole={data.jobRole}
              location={data.location}
              logoUrl={data.logoUrl}
              companyName={data.companyName}
            />

            {/* only render salary if there is min or max salary from api */}
            {data.maxJdSalary || data.minJdSalary ? (
              <CardJobListEstimatedSalary
                minJdSalary={data.minJdSalary}
                maxJdSalary={data.maxJdSalary}
                salaryCurrencyCode={data.salaryCurrencyCode}
              />
            ) : null}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            position="relative"
            overflow="hidden"
            height="auto"
          >
            <CardJobListAbout
              jobDetailsFromCompany={data.jobDetailsFromCompany}
            />
          </Box>
        </Box>
        <Box flexGrow={1} mt="6px">
          {data.minExp || data.maxExp ? (
            <CardJobListExperience minExp={data.minExp} maxExp={data.maxExp} />
          ) : null}

          <Button
            disableElevation
            size="large"
            color="primary"
            variant="contained"
            fullWidth
          >
            ⚡ Easy Apply
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
