import { Link } from "react-router-dom";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

export const RequestActions = ({ record }) => {
  return (
    <Link to={`/tutors/new-requests/1`}>
      <Button type="primary" icon={<EyeOutlined />}>View profile</Button>
    </Link>
  );
};
