import { Col, Row, Statistic } from "antd";
import { formatter } from "../constants";

export const Statistics = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Statistic title="Tutors" value={112893} formatter={formatter} />
    </Col>
    <Col span={6}>
      <Statistic title="Students" value={112893} formatter={formatter} />
    </Col>
    <Col span={6}>
      <Statistic
        title="Students (adults)"
        value={112893}
        formatter={formatter}
      />
    </Col>
    <Col span={6}>
      <Statistic
        title="Students (kids)"
        value={112893}
        precision={2}
        formatter={formatter}
      />
    </Col>
  </Row>
);
