import { createAppSlice } from "@/store/createAppSlice";
import type { JobDetailsListResponseInterface } from "./api";
import { fetchJobs as fetchJobsApi } from "./api";

export interface JobListSliceState {
  status: "idle" | "loading" | "failed";
  data: JobDetailsListResponseInterface["jdList"][];
  viewData: JobDetailsListResponseInterface["jdList"][];
  totalCount: number;
  currentPage: number;
  perPageLimit: number;
}

const initialState: JobListSliceState = {
  status: "idle",
  data: [],
  viewData: [],
  totalCount: 0,
  currentPage: 0,
  perPageLimit: 10,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    fetchJobs: create.asyncThunk(
      async ({}, { getState }) => {
        const state = getState() as JobListSliceState;
        const { currentPage, perPageLimit } = state;

        const offset = perPageLimit * (currentPage + 1);
        const response = await fetchJobsApi(offset, perPageLimit);
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.currentPage += 1;
          state.totalCount = action.payload.totalCount;
          state.data.push(action.payload.jdList);
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
    reset: create.reducer((state) => {
      state = { ...initialState };
    }),
  }),
  selectors: {
    selectData: (counter) => counter.data,
    selectStatus: (counter) => counter.status,
  },
});

export const { fetchJobs } = counterSlice.actions;
export const { selectData, selectStatus } = counterSlice.selectors;
