import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, coursesSelector } from "@/store";
import { courseDictionary } from "../dictionary";
import { Link } from "react-router-dom";
import { Space, Button, Tooltip } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { ROUTES } from "@/constants";

export const RequestActions = ({ record }) => {
  const dispatch = useDispatch();
  const { loading, deletedCourseId } = useSelector(coursesSelector);
  const handleRemove = () => dispatch(deleteCourse(record.course_id));

  return (
    <Space>
      <Tooltip placement="bottom" title={courseDictionary.remove}>
        <Button
          danger
          // disabled={loading.delete && deletedCourseId === record.course_id}
          loading={loading.delete && deletedCourseId === record.course_id}
          icon={<DeleteOutlined color="crimson" />}
          onClick={handleRemove}
        />
      </Tooltip>

      <Link to={`${ROUTES.courses}/${record.course_id}`}>
        <Tooltip placement="bottom" title={courseDictionary.view}>
          <Button type="primary" icon={<EyeOutlined />} />
        </Tooltip>
      </Link>
    </Space>
  );
};
