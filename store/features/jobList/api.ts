
export interface JobDetailsApiResponseInterface {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface JobDetailsListResponseInterface {
  jdList: JobDetailsApiResponseInterface[];
  totalCount: number;
}

// A mock function to mimic making an async request for data
export const fetchJobs = async (
  offset: number,
  limit: number,
  signal: AbortSignal | null = null
) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({ limit, offset });
  const params: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body,
    signal
  };

  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    params
  );
  const result: JobDetailsListResponseInterface = await response.json();

  return result;
};
