import { Tag } from "antd";
import { allReportsDictionary } from "../dictionary";

export const Status = ({ status }) => (
  <Tag color={status === "Active" ? "green" : "blue"}>
    {status === "Active"
      ? allReportsDictionary.active
      : allReportsDictionary.solved}
  </Tag>
);
