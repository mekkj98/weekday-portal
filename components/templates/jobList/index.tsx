import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";
import { useDebounceValue, useResizeObserver } from "usehooks-ts";
import JobListFilter from "./components/filters";
import JobListGrid from "./components/list";

export default function JobsListPage() {
  const ref = useRef<HTMLDivElement>(null);

  // -- get container width dynamically and calculate columns which can bet fit easily --
  // -- we can also test and come up with a mapping for different screen size different card width to generate proper columns. --
  // -- for the sake of simplicity i'm using static value.
  const { width = 0 } = useResizeObserver({ ref, box: "border-box" });
  const [debouncedWidth, setDebouncedWidth] = useDebounceValue(width, 200);
  const cols = width > 720 ? Math.floor(width / 350) : width > 620 ? 2 : 1;

  const dispatch = useAppDispatch();
  const status = useAppSelector(jobListSlice.selectors.selectStatus);

  useEffect(() => {
    setDebouncedWidth(width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    if (status === undefined) {
      // -- make sure api get cancelled if user unmount the application --
      let controller = new AbortController();
      dispatch(jobListSlice.actions.fetchJobs(controller.signal));

      return () => {
        if (controller) controller.abort();
        dispatch(jobListSlice.actions.reset());
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100%" }} ref={ref}>
      <JobListFilter />
      {width && cols ? <JobListGrid width={debouncedWidth} columns={cols} /> : null}
    </Box>
  );
}
