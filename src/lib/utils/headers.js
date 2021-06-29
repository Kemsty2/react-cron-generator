import { HEADER_VALUES } from "../meta";
import Minutes from "../cron-tab/minutes";
import Daily from "../cron-tab/daily";
import Hourly from "../cron-tab/hourly";
import Weekly from "../cron-tab/weekly";
import Monthly from "../cron-tab/monthly";
import Custom from "../cron-tab/custom";

const headers = [
  {
    label: HEADER_VALUES.MINUTES,
    id: "0",
    component: Minutes,
    initialCron: ["0", "0/1", "*", "*", "*", "?", "*"],
  },
  {
    label: HEADER_VALUES.HOURLY,
    id: "1",
    component: Hourly,
    initialCron: ["0", "0", "00", "1/1", "*", "?", "*"],
  },
  {
    label: HEADER_VALUES.DAILY,
    id: "2",
    component: Daily,
    initialCron: ["0", "0", "00", "1/1", "*", "?", "*"],
  },
  {
    label: HEADER_VALUES.WEEKLY,
    id: "3",
    component: Weekly,
    initialCron: ["0", "0", "00", "?", "*", "*", "*"],
  },
  {
    label: HEADER_VALUES.MONTHLY,
    id: "4",
    component: Monthly,
    initialCron: ["0", "0", "00", "1", "1/1", "?", "*"],
  },
  {
    label: HEADER_VALUES.CUSTOM,
    id: "5",
    component: Custom,
    initialCron: ["*", "*", "*", "*", "*", "*", "*"],
  },
];

export default headers;
