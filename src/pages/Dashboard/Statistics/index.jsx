import { Col, Row, Statistic } from "antd";
import { formatter } from "../constants";

export const Statistics = ({statistics}) => (
  <Row gutter={16}>
    <Col span={6}>
      <Statistic title="Tutors" value={statistics.tutors} formatter={formatter} />
    </Col>
    <Col span={6}>
      <Statistic title="Students" value={statistics.students} formatter={formatter} />
    </Col>
    <Col span={6}>
      <Statistic
        title="Students (adults)"
        value={statistics.studentadults}
        formatter={formatter}
      />
    </Col>
    <Col span={6}>
      <Statistic
        title="Students (kids)"
        value={statistics.studenkids}
        precision={2}
        formatter={formatter}
      />
    </Col>
  </Row>
);
