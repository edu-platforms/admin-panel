import { Form, Row, Col, Divider, Image } from "antd";
import { ReadOnlyField } from "../ReadOnlyField";
import { ReadOnlyTextArea } from "../ReadOnlyTextArea";
import { allTutorDictionary } from "../../dictionary";
import { data } from "../constants";
import { File } from "@/components";

export const TutorDetail = () => {
  return (
    <div className="tutor-details-wrapper">
      <h2 className="tutor-details-title">{allTutorDictionary.tutorDetails}</h2>

      <Form layout="vertical" autoComplete="off">
        <Row gutter={12}>
          <Col span={24}>
            <Form.Item label={allTutorDictionary.profilePhoto}>
              <Image
                width={240}
                height={160}
                src={data.photo}
                style={{ borderRadius: 20, objectFit: "cover" }}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <ReadOnlyField
              label={allTutorDictionary.displayName}
              value={data.displayName}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField
              label={allTutorDictionary.emailAddress}
              value={data.emailAddress}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={allTutorDictionary.name} value={data.name} />
          </Col>

          <Col span={12}>
            <ReadOnlyField
              label={allTutorDictionary.surname}
              value={data.surname}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={allTutorDictionary.from} value={data.from} />
          </Col>

          <Col span={12}>
            <ReadOnlyField
              label={allTutorDictionary.livingIn}
              value={data.livingIn}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={allTutorDictionary.date} value={data.date} />
          </Col>

          <Col span={12}>
            <ReadOnlyField
              label={allTutorDictionary.gender}
              value={data.gender}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea
              label={allTutorDictionary.about}
              value={data.about}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea label={allTutorDictionary.me} value={data.me} />
          </Col>

          <Col span={12}>
            <label style={{ margin: "0 10px" }}>
              {allTutorDictionary.educations}
            </label>
            {data.educations.map((item, id) => (
              <Col style={{ marginTop: "10px" }} key={id}>
                <ReadOnlyField value={item.name} />
                <Row gutter={12} span={12}>
                  <Col span={12}>
                    <ReadOnlyField
                      value={item.degree}
                      style={{ width: "48%" }}
                    />
                  </Col>
                  <Col span={12}>
                    <ReadOnlyField value={item.date} style={{ width: "48%" }} />
                  </Col>
                </Row>
                <Divider style={{ marginTop: "0" }} />
              </Col>
            ))}
          </Col>

          <Col span={12}>
            <label style={{ margin: "0 10px" }}>
              {allTutorDictionary.experience}
            </label>
            {data.experience.map((item, id) => (
              <Col key={id} style={{ marginTop: "10px" }}>
                <ReadOnlyField value={item.name} />
                <Row gutter={12} span={12}>
                  <Col span={12}>
                    <ReadOnlyField value={item.position} />
                  </Col>
                  <Col span={12}>
                    <ReadOnlyField value={item.date} />
                  </Col>
                </Row>
                <Divider style={{ marginTop: "0" }} />
              </Col>
            ))}
          </Col>

          <Col span={24}>
            <label style={{ margin: "0 10px" }}>
              {allTutorDictionary.certificates}
            </label>
            {data.certificates.map((item, id) => (
              <File onlyViewCertificate item={item} key={id} />
            ))}
          </Col>
        </Row>
      </Form>
    </div>
  );
};
