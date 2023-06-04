import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBreadCrumbs } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { requestDetailsBreadcrumb } from "../constants";
import { history } from "@/utils";
import { getOne, userActions, usersSelector } from "@/store";
import { Title, File, SuccessBtn } from "@/components";
import { Col, Form, Image, Row, Space, Divider, Button } from "antd";
import { requestDictionary } from "../dictionary";
import { ReadOnlyField } from "./ReadOnlyField";
import { RequestModal } from "./Modal";
import { ReadOnlyTextArea } from "./ReadOnlyTextArea";
import { ModalContext } from "@/context";
// import "../style.scss";

export const TutorRequestDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [form] = Form.useForm();
  const {
    data: { details },
    isModalOpen,
  } = useSelector(usersSelector);

  const openRequestModal = () => {
    dispatch(userActions.setFullName(`${details.firstname} ${details.lastname}`))
    dispatch(userActions.setIsModalOpen(true))
    dispatch(userActions.setSelectedUserId(id))
  }

  const onFinish = () => {
    history.back();
  }

  const getData = () => {
    if (!id) {
      history.back();
    }

    dispatch(getOne({ id }));
  };

  useEffect(() => {
    if (details) {
      for (let key in details) {
        form.setFieldsValue({ [key]: details[key] });
      }
    }
  }, [details]);

  useEffect(() => {
    getData();
  }, [id]);

  useBreadCrumbs(requestDetailsBreadcrumb);

  return (
    <>
      <Title>{requestDictionary.viewProfile}</Title>

      <Form
        layout="vertical"
        autoComplete="off"
        form={form}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label={requestDictionary.profilePhoto}>
              <Image
                width={240}
                height={160}
              // src={data.photo}
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
              label={requestDictionary.emailAddress}
              name="email"
            />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.name} name="firstname" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.surname} name="lastname" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.from} name="address" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.livingIn} name="currentAddress" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.date} name="birthday" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.gender} name="gender" />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea label={requestDictionary.about} name="about" />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea label={requestDictionary.me} name="aboutTeacher" />
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
                          <ReadOnlyField {...restField} name={[name, "date"]} />
                        </Col>
                      </Row>
                      <Divider />
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
        </Row>

        <Divider />

        <Row justify="end">
          <Space>
            <SuccessBtn submit>
              {requestDictionary.acceptBtn}
            </SuccessBtn>

            <Button type="primary" danger size="large" onClick={openRequestModal}>{requestDictionary.rejectBtn}</Button>
          </Space>
        </Row>
      </Form>

      {
        isModalOpen ? <RequestModal /> : null
      }
    </>
  );
};
