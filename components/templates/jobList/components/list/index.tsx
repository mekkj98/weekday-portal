import CardJobList from "@/components/common/cardJobList";
import { jobListSlice } from "@/store/features/jobList/slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import InfiniteScroll from "react-infinite-scroll-component";
import { AutoSizer, Grid, WindowScroller } from "react-virtualized";
import JobListGridLoader from "./loader";
import { useEffect, useRef } from "react";
import { useResizeObserver } from "usehooks-ts";

// -- Job list grid component --
// -- To render the list of current jobs(post applying search and filter) --
export default function JobListGrid({
  columns,
  width,
}: {
  columns: number;
  width: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const sizes = useResizeObserver({ ref, box: "border-box" })

  const dispatch = useAppDispatch();

  // -- select data to render and status and also get hasMore to optimize the api call. --
  const data = useAppSelector((s) => jobListSlice.selectSlice(s).viewData);
  const status = useAppSelector(jobListSlice.selectors.selectStatus);
  const hasMore = useAppSelector((s) => jobListSlice.selectSlice(s).hasMore);

  // auto load data if data in not filled in full screen height;
  // let's say user open websit on 5000 x 10000 px screen
  // and initial data is not enough to fill the screen
  // then we can load more data to fill the screen.
  // -- this is just a optimization to load data --
  useEffect(() => {
    if(!sizes.height) return;
    if (sizes.height <= window.innerHeight && status === "idle") {
      dispatch(jobListSlice.actions.fetchJobs(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizes, status])

  // -- fetch next page data --
  const onNext = async () => {
    if (status === "loading") return;
    dispatch(jobListSlice.actions.fetchJobs(null));
  };

  const cellRenderer = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columns + columnIndex;

    // -- get item to render --
    const item = data[index];
    if (!item) return null;

    // -- render card --
    return (
      <div style={style}>
        <CardJobList data={item} key={item.jdUid} />
      </div>
    );
  };

  return (
    <Box display="block" height="100%" flex={1} ref={ref}>
      {/* -- Render grid only when data is available -- */}
      {data.length ? (
        <InfiniteScroll
          dataLength={data.length}
          hasMore={hasMore}
          next={onNext}
          loader={null}
          style={{ overflowX: "hidden" }}
        >
          {/* window scroll to make scrollbar window level and also manage height */}
          <WindowScroller>
            {({ height, isScrolling, scrollTop }) => (
              <AutoSizer disableHeight>
                {/* initially tried loading grid after 1000- 2000 item it slow down */}
                {/* By integrating virtualized grid it is optimized to load any size grid  */}
                {(pp) => (
                  <Grid
                    key={width}
                    autoHeight
                    width={pp.width}
                    height={height}
                    columnWidth={width / columns}
                    rowHeight={() => 550}
                    columnCount={columns}
                    rowCount={Math.ceil(data.length / columns)}
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
                    cellRenderer={cellRenderer}
                    overscanRowCount={5}
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        </InfiniteScroll>
      ) : null}

      {/* -- render loader to let user know data is being loaded --  */}
      {status === "loading" ? <JobListGridLoader /> : null}
    </Box>
  );
}
