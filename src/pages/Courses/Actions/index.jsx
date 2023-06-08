import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, coursesSelector } from "@/store";
import { courseDictionary } from "../dictionary";
import { Link } from "react-router-dom";
import { Space, Button, Tooltip } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { ROUTES } from "@/constants";

export const RequestActions = ({ id }) => {
  const dispatch = useDispatch();
  const { loading, deletedCourseId } = useSelector(coursesSelector);

  const handleRemove = () => dispatch(deleteCourse({ id }));

  return (
    <Space>
      <Tooltip placement="bottom" title={courseDictionary.remove}>
        <Button
          danger
          disabled={loading.delete && deletedCourseId === id}
          loading={loading.delete && deletedCourseId === id}
          icon={<DeleteOutlined color="crimson" />}
          onClick={handleRemove}
        />
      </Tooltip>

      <Link to={`${ROUTES.courses}/${id}`}>
        <Tooltip placement="bottom" title={courseDictionary.view}>
          <Button type="primary" icon={<EyeOutlined />} />
        </Tooltip>
      </Link>
    </Space>
  );
};
