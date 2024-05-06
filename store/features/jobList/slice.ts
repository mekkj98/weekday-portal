import { createAppSlice } from "@/store/createAppSlice";
import type {
  JobDetailsApiResponseInterface,
  JobDetailsListResponseInterface,
} from "./api";
import { fetchJobs as fetchJobsApi } from "./api";

export interface JobListSliceState {
  status: undefined | "idle" | "loading" | "failed";
  data: JobDetailsListResponseInterface["jdList"][];
  viewData: JobDetailsApiResponseInterface[];
  hasMore: boolean;
  currentPage: number;
  perPageLimit: number;
  filters: {
    roles: string[];
    experience: number | undefined;
    remote: string[];
    techStack: string[];
    minBasePay: number | undefined;
    location: string;
    companyName: string;
  };
}

const initialState: JobListSliceState = {
  status: undefined,
  data: [],
  viewData: [],
  hasMore: true,
  currentPage: 0,
  perPageLimit: 10,
  filters: {
    companyName: "",
    location: "",
    experience: undefined,
    roles: [],
    remote: [],
    techStack: [],
    minBasePay: undefined,
  },
};

function filterSearchJobData(
  data: JobDetailsListResponseInterface["jdList"][],
  filters: JobListSliceState["filters"]
) {
  if (!data.length) return [];

  let flatData = [...data].flat();
  if (!flatData.length) return [];

  // -- filter by roles --
  if (filters.roles?.length) {
    flatData = [...flatData].filter(
      (job) =>
        job.jobRole &&
        filters.roles!.some((tech) =>
          job.jobRole!.toLowerCase().includes(tech.toLowerCase())
        )
    );
  }

  // -- filter by experience --
  if (filters.experience) {
    flatData = [...flatData].filter(
      (job) => job.minExp && job.minExp <= filters.experience!
    );
  }

  // since there is no tech stack in the data, I am using jobRole as tech stack
  if (filters.techStack?.length) {
    flatData = [...flatData].filter(
      (job) =>
        job.jobRole &&
        filters.techStack!.some((tech) =>
          job.jobRole!.toLowerCase().includes(tech.toLowerCase())
        )
    );
  }

  // -- filter by remote --
  // since there is no remote in the data, I am using location as remote or on site etc.
  if (filters.remote?.length) {
    flatData = [...flatData].filter(
      (job) =>
        job.location &&
        filters.remote!.some((remote) =>
          job.location!.toLowerCase().includes(remote.toLowerCase())
        )
    );
  }

  // -- filter by minBasePay --
  if (filters.minBasePay) {
    flatData = [...flatData].filter(
      (job) => job.minJdSalary && filters.minBasePay! <= job.minJdSalary
    );
  }

  // -- filter by location --
  if (filters.location) {
    flatData = [...flatData].filter(
      (job) =>
        job.location &&
        job.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  // -- filter by companyName --
  if (filters.companyName) {
    flatData = [...flatData].filter((job) =>
      job.companyName.toLowerCase().includes(filters.companyName!.toLowerCase())
    );
  }

  return flatData;
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const jobListSlice = createAppSlice({
  name: "jobList",
  initialState,
  reducers: (create) => ({
    setFilter: create.reducer(
      (state, action: { payload: Partial<JobListSliceState["filters"]> }) => {
        const newFilter = { ...state.filters, ...action.payload };
        console.log(filterSearchJobData(state.data, state.filters));

        state.filters = newFilter;
        state.viewData = filterSearchJobData(state.data, newFilter) as any;
      }
    ),
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
          const total = state.currentPage * state.perPageLimit;

          // updating the state with the new data
          state.status = "idle";
          state.currentPage += 1;
          state.hasMore = total < action.payload.totalCount;

          // appling filters on the new data
          // it is optimised to filter only the new data
          // and then concat the new data with the existing already filtered data
          // try with location delhi it has most data to test this scenario
          // or load more data and then apply filter
          state.viewData = state.viewData.concat(
            filterSearchJobData([action.payload.jdList], state.filters) as any
          );

          // saving the original data for future local filtering
          state.data.push(action.payload.jdList);
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
