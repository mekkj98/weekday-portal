import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function CardJobListCard() {
  return (
    <Card
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "6px",
      }}
    >
      <CardContent>
        {/* tags */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", mb: 1 }}>
          <Chip label="⏳ Posted a month ago" variant="outlined"  sx={{ py: "0px", rounded: "6px"}} />
          <Chip label="📈 1 application" variant="outlined" sx={{ py: "0px" }} />
        </Box>

        {/* details */}
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
              src="/icons/favicon-96x96.png"
              alt=""
              height={40}
              width={40}
            />
          </Box>
          <Box>
            <Typography fontWeight="600" sx={{ color: "grey.700" }}>
              Firefly
            </Typography>
            <Typography fontSize={14} fontWeight="500">
              Frontend Engineer
            </Typography>
            <Typography fontSize={14}>India</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" columnGap="8px" my={0.5}>
          <Typography fontSize={14}>
            Estimated Salary: $30 - 50 LPA ✅ ⚠️
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            maskImage:
              "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
          }}
        >
          <Typography variant="h6" fontWeight={500} fontSize={17}>
            About Company:
          </Typography>
          <Typography sx={{ color: "grey.700" }}>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the &quot;Software&quot;), to deal in the Software without
            restriction, including without limitation the rights to use, copy,
            modify, merge, publish, distribute, sublicense, and/or sell copies
            of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", width: "auto", mt: -1 }}>
          <Link href="/">See More</Link>
        </Box>

        <Box sx={{ my: 1.2 }}>
          <Typography fontWeight="500" sx={{ color: "grey.600" }}>
            Minimum Experience
          </Typography>
          <Typography>3 Years</Typography>
        </Box>

        <Button
          disableElevation
          size="large"
          color="primary"
          variant="contained"
          fullWidth
        >
          ⚡ Easy Apply
        </Button>
      </CardContent>
    </Card>
  );
}
