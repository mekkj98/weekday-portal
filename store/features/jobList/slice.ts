import { createAppSlice } from "@/store/createAppSlice";
import type { JobDetailsApiResponseInterface, JobDetailsListResponseInterface } from "./api";
import { fetchJobs as fetchJobsApi } from "./api";

export interface JobListSliceState {
  status: undefined | "idle" | "loading" | "failed";
  data: JobDetailsListResponseInterface["jdList"][];
  viewData: JobDetailsApiResponseInterface[];
  hasMore: boolean;
  currentPage: number;
  perPageLimit: number;
}

const initialState: JobListSliceState = {
  status: undefined,
  data: [],
  viewData: [],
  hasMore: true,
  currentPage: 0,
  perPageLimit: 10,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const jobListSlice = createAppSlice({
  name: "jobList",
  initialState,
  reducers: (create) => ({
    fetchJobs: create.asyncThunk(
      async (signal: AbortSignal | null, { getState }) => {
        const state = getState() as JobListSliceState;
        const { currentPage, perPageLimit } = state;
       
        const offset = perPageLimit * (currentPage + 1);
        const response = await fetchJobsApi(offset, perPageLimit, signal);
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.currentPage += 1;
          state.hasMore = state.currentPage * state.perPageLimit < action.payload.totalCount;
          state.data.push(action.payload.jdList);
          state.viewData = state.viewData.concat(action.payload.jdList)
        },
        rejected: (state, rejected) => {
          if (rejected.error.name !== "AbortError") {
            state.status = "failed";
          }
        },
      }
    ),
    reset: create.reducer((state) => {
      state.status = "idle";
      state.data = [];
      state.viewData = [];
      state.hasMore = false;
      state.currentPage = 0;
      state.perPageLimit = 10;
    }),
  }),
  selectors: {
    selectData: (jobList) => jobList.data,
    selectStatus: (jobList) => jobList.status,
  },
});

// export const { fetchJobs } = jobListSlice.actions;
// export const { selectData, selectStatus } = jobListSlice.selectors;
