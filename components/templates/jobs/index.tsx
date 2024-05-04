import CardJobListCard from "@/components/common/cardJobList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useRef } from "react";
import { useResizeObserver } from "usehooks-ts";

export default function JobsListPage() {
  const ref = useRef<HTMLDivElement>(null);

  // -- get container width dynamically and calculate columns which can bet fit easily --
  // -- we can also test and come up with a mapping for different screen size different card width to generate proper columns. --
  // -- for the sake of simplicity i'm using static value.
  const { width = 0 } = useResizeObserver({ ref, box: "border-box" });
  const cols = Math.floor(width / 370);

  return (
    <Box sx={{ width: "100%" }} ref={ref}>
      {width ? (
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: 3,
          }}
        >
          <CardJobListCard />
          <CardJobListCard />
          <CardJobListCard />
          <CardJobListCard />
          <CardJobListCard />
        </Box>
      ) : null}
    </Box>
  );
}
