This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


#### step 1 : clone the repo

```bash
git clone https://github.com/mekkj98/weekday-portal.git 
```

#### step 2 : go to cloned directory

```bash
cd weekday-portal
```

#### step 3 : install dependency

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```


#### step 4:  run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Requirements

1. Job Cards: Each job listing should be displayed as a card containing the following information:

- Job title
- Company name
- Location
- Job description (limited to a certain number of characters with an option to expand)
- Experience required
- Apply button/link

2. Filters: Implement filters to allow users to refine the job listings based on:

- Min experience
- Company name
- Location
- Remote/on-site
- Tech stack
- Role
- Min base pay

3. Infinite Scroll: Implement infinite scroll to load additional job listings as the user scrolls down the page. The platform should fetch and display more jobs automatically without requiring the user to click on a "Load More" button.
Responsive Design: Ensure that the platform is responsive and works well on different screen sizes, including mobile devices (Optional)

** Note: You do not have to replicate the sidebar. **

### Technology Stack

You are required to use the following tech stack for the assignment
- ReactJs
- Redux
- CSS
- Material UI

**Please note that creating your logic for any other logic-related change is a better implementation than using 3rd party libraries**

## Key Implentation/Evaluation Points

**Redux**

Used Redux toolkit for redux store to keep coding standard.

**Typescript**

Used typescript for development type sefty and kept in mind to avoid any and unknow.

**implemented infinite scroll**

Implementation Infinite scroll data loading functionality using react-infinite-scroll-component
Also There is a problem in this Approch that initialy if user screen is large
let's say user open websit on 5000 x 10000 px screen and initial data is not enough to fill the screen then we can load more data to fill the screen. 

** Virutalisation **

Having infinite load is good but it is best to have virutalisation on the top of that to make sure user system doesn't hang when user scroll many jobs.

**Abort controllers to cancel api calls**

Used abort controller and signal to cancel api calls.

**Responsiveness**

Maintained the responsiveness of grid and complete layout works good at any screen size.

**Added favicon and menifest.json**

Added all the standard icons and manifest.

**Optimisation is key**

1. Made sure to make optimised api calls.
2. Less number of render on changes.
3. Reduced renders by added debounce to width on resizezObserver value.
4. Filtering is optimised when we call api and filter is already applied. It only apply filters on newly loaded data not the complement data. So we keep one original copy which any way we have to do because if use clear filter we don't wan to make all the api call. So when user apply filter we apply first filter on whole data but after that while filter is applied and newly data is being loaded from api. Applying filter to only data fetched from api make more sense.
5. Kept all the filter value in lower cases to make sure filtering works fine.


