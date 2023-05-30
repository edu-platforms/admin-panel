import { useContext, useEffect } from "react";
import { useBreadCrumbs } from "@/hooks";
import { requestDetailsBreadcrumb } from "../constants";
import { Title, File, SuccessBtn } from "@/components";
import { Col, Form, Image, Row, Space, Divider, Button } from "antd";
import { requestDictionary } from "../dictionary";
import { ReadOnlyField } from "./ReadOnlyField";
import { RequestModal } from "./Modal";
import { ReadOnlyTextArea } from "./ReadOnlyTextArea";
import { ModalContext } from "@/context";
import { history } from "@/utils";
import "../style.scss";

export const TutorRequestDetails = () => {
  const [form] = Form.useForm();
  const { show, close } = useContext(ModalContext);
  useBreadCrumbs(requestDetailsBreadcrumb);

  const data = {
    photo: "https://picsum.photos/id/237/200/300",
    displayName: "Saidalikhan Sobirov",
    email: "sabirun9977@gmail.com",
    firstName: "Saidalikhan",
    lastName: "Sobirov",
    from: "USA",
    livingIn: "Texas",
    date: "2022-06-21",
    gender: "Male",
    about:
      "All language. One world.Hello everyone! I do speak Chinese, English, Japanese, and Korean, and plan to learn español. I really know how difficult to learn a foreign language, and would like to share the secret. Normally, I prefer to explain by using the easiest target words, but if you want to understand them better from your language, I can also explain in the language that makes you feel more comfortable. According to your level, I will adjust the speed and vocabs picking. Take you to an immersive environment without going to China, a more comfortable and interesting  as talking with a close friend.",
    me: "I have been teaching for about 15 years, and one and a half years online. Several times I have been awarded for high student satisfaction. I have taught at all levels from beginner to advanced and even university preparation. I particularly enjoy grammar, but am able to assist in all aspects of language acquisition.",
    educations: [
      {
        name: "Oxford University",
        degree: "Oxford University",
        date: "2022 - until now",
      },
      {
        name: "Texas Technologies University",
        degree: "Bachelor degree",
        date: "2017 - 2021",
      },
    ],
    experience: [
      {
        name: "English First Edu",
        position: "Teacher at Edu center",
        date: "2022 - until now",
      },
      {
        name: "Colorado Heights University",
        position: "ESL Instructor",
        date: "2020 - 2021",
      },
    ],
    certificates: [
      { name: "Teaching English as a Second Language TEFL" },
      { name: "Certificate to Teach in the Lifelong Learning Sector" },
    ],
  };


  useEffect(() => {
    if (data) {
      for (let key in data) {
        form.setFieldsValue({ [key]: data[key] });
      }
    }
  }, [data]);

  const onFinish = () => {
    history.push("/");
  }

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
                src={data.photo}
                className="object-cover border-20"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <ReadOnlyField
              name="displayName"
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
            <ReadOnlyField label={requestDictionary.name} name="firstName" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.surname} name="lastName" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.from} name="from" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.livingIn} name="livingIn" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.date} name="date" />
          </Col>

          <Col span={12}>
            <ReadOnlyField label={requestDictionary.gender} name="gender" />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea label={requestDictionary.about} name="about" />
          </Col>

          <Col span={12}>
            <ReadOnlyTextArea label={requestDictionary.me} name="me" />
          </Col>

          <Col span={12}>
            <Form.List name="educations" initialValue={[]}>
              {(fields) => (
                <Form.Item label={requestDictionary.educations}>
                  {fields.map(({ key, name, ...restField }) => (
                    <Col className="mt-10" key={key}>
                      <ReadOnlyField  {...restField} name={[name, "name"]} />
                      <Row span={12} className="justify-between">
                        <ReadOnlyField {...restField} name={[name, "degree"]} />
                        <ReadOnlyField {...restField} name={[name, "date"]} />
                      </Row>
                      <Divider />
                    </Col>
                  ))}
                </Form.Item>
              )}
            </Form.List>
          </Col>

          <Col span={12}>
            <Form.List name="experience" initialValue={[]}>
              {(fields) => (
                <Form.Item label={requestDictionary.experience}>
                  {fields.map(({ key, name, ...restField }) => (
                    <Col className="mt-10" key={key}>
                      <ReadOnlyField  {...restField} name={[name, "name"]} />
                      <Row span={12} className="justify-between">
                        <ReadOnlyField {...restField} name={[name, "position"]} />
                        <ReadOnlyField {...restField} name={[name, "date"]} />
                      </Row>
                      <Divider />
                    </Col>
                  ))}
                </Form.Item>
              )}
            </Form.List>
          </Col>


          <Col span={24}>
            <label style={{ margin: "0 10px" }}>
              {requestDictionary.experience}
            </label>
            {data.certificates.map((item, id) => (
              <File item={item} key={id} />
            ))}
          </Col>

          <Divider />

          <Space className="justify-end w-100">
            <SuccessBtn submit>
              {requestDictionary.acceptBtn}
            </SuccessBtn>
            <Button type="primary" danger size="large" onClick={() => show()}>{requestDictionary.rejectBtn}</Button>
          </Space>
        </Row>
      </Form>
      <RequestModal close={close} />
    </>
  );
};
