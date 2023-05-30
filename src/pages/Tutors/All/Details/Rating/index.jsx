import { Title } from "@/components";
import { Form, Row, Col, Typography } from "antd";
import { Feedback } from "../Feedback";
import { ReadOnlyField } from "../ReadOnlyField";
import { allTutorDictionary } from "../../dictionary";
import { a, data } from "../constants";

export const TutorRating = () => {
  return (
    <>
      <Title>{allTutorDictionary.tutorRating}</Title>

      <Form layout="vertical" autoComplete="off">
        <Row gutter={12}>
          <Col span={12}>
            <ReadOnlyField
              label={allTutorDictionary.displayName}
              value={data.displayName}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={allTutorDictionary.join} value={data.join} />
          </Col>

          <Col span={8}>
            <ReadOnlyField
              label={allTutorDictionary.currentRating}
              value={data.currentRating}
            />
          </Col>

          <Col span={8}>
            <ReadOnlyField
              label={allTutorDictionary.totalStudents}
              value={data.totalStudents}
            />
          </Col>

          <Col span={8}>
            <ReadOnlyField
              label={allTutorDictionary.talkTime}
              value={data.talkTime}
            />
          </Col>
        </Row>
      </Form>

      <Typography.Title level={4}>
        {allTutorDictionary.feedback}
      </Typography.Title>

      <Row gutter={[12, 12]}>
        {a.map((i) => (
          <Col key={i} span={12}>
            <Feedback />
          </Col>
        ))}
      </Row>
    </>
  );
};
