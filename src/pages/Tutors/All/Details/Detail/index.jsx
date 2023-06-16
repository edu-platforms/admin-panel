import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOne, usersSelector } from "@/store";
import { dateFormatter } from "@/utils";
import { Title } from "@/components";
import { Form, Row, Col, Image, Card, Space, Typography, Button } from "antd";
import { ReadOnlyField, ReadOnlyTextArea } from "../Fields";
import { requestDictionary } from "@/pages/Tutors/Requests/dictionary";
import classnameBind from "classnames/bind";
import styles from "../details.module.scss";

const cn = classnameBind.bind(styles);

export const TutorDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [form] = Form.useForm();
  const [certifications, setCertifications] = useState([])
  const { data: { details } } = useSelector(usersSelector);

  const getData = () => {
    if (!id) {
      history.back();
    }

    dispatch(getOne({ id }));
  };

  const setData = () => {
    if (details) {
      for (let key in details) {

        if (key === "birthday") {
          form.setFieldsValue({ [key]: dateFormatter(details[key]) });
        } else {
          form.setFieldsValue({ [key]: details[key] });
        }
      }

      setCertifications(details.certifications)
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    setData();
  }, [details]);

  return (
    <>
      <Title>{requestDictionary.tutorDetails}</Title>

      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="photo" label={requestDictionary.profilePhoto}>
              <Image
                width={240}
                height={160}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <ReadOnlyField
              name="displayname"
              label={requestDictionary.displayName}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField
              name="email"
              label={requestDictionary.emailAddress}
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField name="firstname" label={requestDictionary.name} />
          </Col>

          <Col span={12}>
            <ReadOnlyField name="lastname" label={requestDictionary.surname} />
          </Col>

          <Col span={12}>
            <ReadOnlyField name="address" label={requestDictionary.from} />
          </Col>

          <Col span={12}>
            <ReadOnlyField name="currentAddress" label={requestDictionary.livingIn} />
          </Col>

          <Col span={12}>
            <ReadOnlyField name="birthday" label={requestDictionary.date} />
          </Col>

          <Col span={12}>
            <ReadOnlyField name="gender" label={requestDictionary.gender} />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea name="about" label={requestDictionary.about} />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea name="aboutTeacher" label={requestDictionary.me} />
          </Col>

          <Col span={12}>
            <Form.List name="educations" initialValue={[{}]}>
              {(fields) => (
                <Form.Item label={requestDictionary.educations}>
                  {fields.map(({ key, name, ...restField }) => (
                    <Col key={key}>
                      <ReadOnlyField {...restField} name={[name, "title"]} />

                      <Row span={12} gutter={10}>
                        <Col span={12}>
                          <ReadOnlyField {...restField} name={[name, "degree"]} />
                        </Col>
                        <Col span={12}>
                          <ReadOnlyField {...restField} name={[name, "dateFrom", "dateTo"]} />
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Form.Item>
              )}
            </Form.List>
          </Col>

          <Col span={12}>
            <Form.List name="experiences" initialValue={[{}]}>
              {(fields) => (
                <Form.Item label={requestDictionary.experience}>
                  {fields.map(({ key, name, ...restField }) => (
                    <Col key={key}>
                      <ReadOnlyField {...restField} name={[name, "title"]} />

                      <Row span={12} gutter={10}>
                        <Col span={12}>
                          <ReadOnlyField {...restField} name={[name, "descr"]} />
                        </Col>

                        <Col span={12}>
                          <ReadOnlyField {...restField} name={[name, "date"]} />
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Form.Item>
              )}
            </Form.List>
          </Col>

          <Col span={24}>
            <Typography>{requestDictionary.certificates}</Typography>

            <Space direction="vertical" className={cn("tutors__certifications")}>
              {
                certifications?.map((certification, i) =>
                  <Card key={i} bordered>
                    <Row align='middle' justify="space-between">
                      <Typography level={5}>{certification.name}</Typography>

                      <Button type="primary" size="large">
                        <a href={certification.file} target="_blank" rel="noopener noreferrer">
                          {requestDictionary.viewCertificate}
                        </a>
                      </Button>
                    </Row>
                  </Card>
                )
              }
            </Space>
          </Col>
        </Row>
      </Form>
    </>
  );
};
