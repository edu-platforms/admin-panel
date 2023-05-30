import { Col, DatePicker, Form, Input, Row } from "antd";
import { PrimaryBtn } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { videosActions } from "@/store";
import { videosDictionary } from "../../../Videos/dictionary";
// import { videosDictionary } from "../dictionary";


export function Filter() {
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;

  const { studentName, tutorName, dateValue } = useSelector(
    (state) => state.videos.values
  );

  const clearFilter = () => dispatch(videosActions.clear());

  const handleInputChange = (event) => {
    if (event.target) {
      dispatch(
        videosActions.updateFilter({
          name: event.target.name,
          value: event.target.value,
        })
      );
    } else dispatch(videosActions.updateFilter({ name: "date", value: event }))
  };

  return (
    <div style={{ marginBottom: 40 }}>
      <Form autoComplete="false">
        <Row gutter={12} justify="space-between">
          <Col span={5}>
            <Input
              name="studentName"
              value={studentName}
              onChange={(event) => handleInputChange(event)}
              placeholder={videosDictionary.filterByStudent}
            />
          </Col>
          <Col span={5}>
            <Input
              name="tutorName"
              value={tutorName}
              onChange={(event) => handleInputChange(event)}
              placeholder={videosDictionary.filterByTutor}
            />
          </Col>
          <Col span={6}>
            <RangePicker
              name="date"
              value={dateValue}
              onChange={(event) => handleInputChange(event)}
              format="MM-DD-YYYY"
              size="small"
            />
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
