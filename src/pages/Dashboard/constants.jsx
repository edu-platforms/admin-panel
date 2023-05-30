import CountUp from "react-countup";

export const dashboardBreadcrumb = [{ label: "Dashboard" }];

export const formatter = (value) => <CountUp end={value} separator="," />;
