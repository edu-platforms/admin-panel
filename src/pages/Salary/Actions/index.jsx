import { Link } from "react-router-dom";
import { Button } from "antd";
import { salaryDictionary } from "../dictionary";

export const SalaryActions = ({ record }) => {
  return (
    <Link to={`/salary/1`}>
      <Button type="primary">
        {salaryDictionary.action}
      </Button>
    </Link>
  );
};
