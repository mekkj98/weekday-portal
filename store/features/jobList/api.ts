export interface JobDetailsApiResponseInterface {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
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
export const fetchJobs = async (offset: number, limit: number) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({ limit, offset });

  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    {
      method: "POST",
      headers: myHeaders,
      body,
    }
  );
  const result: JobDetailsListResponseInterface = await response.json();

  return result;
};
