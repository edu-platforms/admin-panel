import { Col, DatePicker, Form, Input, Row } from "antd";
import { PrimaryBtn } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { userActions, usersSelector } from "@/store";
import { videosDictionary } from "@/pages/Videos/dictionary";

export function Filter() {
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;

  const { filter } = useSelector(usersSelector)

  console.log(filter);
  const clearFilter = () => dispatch(userActions.clearFilter());

  const handleFinish = (values) => {
    dispatch(userActions.setFilter(values))
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <Form autoComplete="false" onFinish={handleFinish}>
        <Row gutter={12} justify="space-between">
          <Col span={5}>
            <Form.Item
              name="email"
            >
              <Input
                placeholder={videosDictionary.filterByStudent}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item
              name="tutorName"
            >
              <Input
                placeholder={videosDictionary.filterByTutor}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              name="lessonDurationWeek"
            >
              <RangePicker
                format="MM-DD-YYYY"
                size="small"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <PrimaryBtn
              onClick={clearFilter}
              style={{
                backgroundColor: "#edeef7",
                color: "#4763E4",
              }}
            >
              {videosDictionary.clearFilter}
            </PrimaryBtn>
          </Col>

          <Col span={4}>
            <PrimaryBtn onClick={""}>{videosDictionary.showData}</PrimaryBtn>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
