import { useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { settingsDictionary } from "../dictionary";
import { Form, Row, Col, Button } from "antd";
import { SuccessBtn } from "@/components";
import { data } from "../constants";
import { Field } from "../Field";

export const SettingsForm = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      for (let key in data) {
        form.setFieldsValue({ [key]: data[key] });
      }
    }
  }, [data]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form onFinish={onFinish} form={form} layout="vertical">
      <Row gutter={16} justify="space-between">
        <Col span={12}>
          <Field
            name="salary4Adult"
            label={settingsDictionary.labels.salary4Adult}
          />
        </Col>
        <Col span={12}>
          <Field
            name="salary4Kids"
            label={settingsDictionary.labels.salary4Kids}
          />
        </Col>
        <Col span={12}>
          <Form.List name="accents" initialValue={[]}>
            {(fields, { add, remove }) => (
              <Form.Item label={settingsDictionary.labels.accent}>
                {fields.map(({ key, name, ...restFields }) => (
                  <Row gutter={6} key={key}>
                    <Col span={22}>
                      <Field
                        placeholder={settingsDictionary.placeholder.accent}
                        {...restFields}
                        name={[name, "name"]}
                      />
                    </Col>
                    <Col span={1}>
                      <Button
                        disabled={fields.length === 1}
                        onClick={() => remove(name)}
                        icon={<MinusCircleOutlined />}
                      />
                    </Col>
                  </Row>
                ))}
                <Button
                  type="primary"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  ghost
                >
                  {settingsDictionary.buttons.accent}
                </Button>
              </Form.Item>
            )}
          </Form.List>
        </Col>
        <Col span={12}>
          <Field name="trial" label={settingsDictionary.labels.trial} />
        </Col>
        <Col span={24}>
          <Form.List name="plans" initialValue={[]}>
            {(fields, { add, remove }) => (
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label={settingsDictionary.labels.plan}>
                    {fields.map(({ key, name, ...restFields }) => (
                      <Field
                        placeholder={settingsDictionary.placeholder.plan}
                        key={key}
                        {...restFields}
                        name={[name, "name"]}
                      />
                    ))}
                    <Button
                      type="primary"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                      ghost
                    >
                      {settingsDictionary.buttons.plan}
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={settingsDictionary.labels.discount}>
                    {fields.map(({ key, name, ...restFields }) => (
                      <Row gutter={6} key={key}>
                        <Col span={22}>
                          <Field
                            placeholder={
                              settingsDictionary.placeholder.discount
                            }
                            {...restFields}
                            name={[name, "discount"]}
                          />
                        </Col>
                        <Col span={1}>
                          <Button
                            disabled={fields.length === 1}
                            onClick={() => remove(name)}
                            icon={<MinusCircleOutlined />}
                          />
                        </Col>
                      </Row>
                    ))}
                  </Form.Item>
                </Col>
              </Row>
            )}
          </Form.List>
        </Col>
        <Col span={24}>
          <Form.List name="lessons" initialValue={[]}>
            {(fields, { add, remove }) => (
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label={settingsDictionary.labels.duration}>
                    {fields.map(({ key, name, ...restFields }) => (
                      <Field
                        placeholder={settingsDictionary.placeholder.duration}
                        key={key}
                        {...restFields}
                        name={[name, "duration"]}
                      />
                    ))}
                    <Button
                      type="primary"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                      ghost
                    >
                      {settingsDictionary.buttons.duration}
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={settingsDictionary.labels.price4Adults}>
                    {fields.map(({ key, name, ...restFields }) => (
                      <Field
                        placeholder={
                          settingsDictionary.placeholder.price4Adults
                        }
                        key={key}
                        {...restFields}
                        name={[name, "price4Adults"]}
                      />
                    ))}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={settingsDictionary.labels.price4Kids}>
                    {fields.map(({ key, name, ...restFields }) => (
                      <Row gutter={6} key={key}>
                        <Col span={22}>
                          <Field
                            placeholder={
                              settingsDictionary.placeholder.price4Kids
                            }
                            {...restFields}
                            name={[name, "price4Kids"]}
                          />
                        </Col>
                        <Col span={1}>
                          <Button
                            disabled={fields.length === 1}
                            onClick={() => remove(name)}
                            icon={<MinusCircleOutlined />}
                          />
                        </Col>
                      </Row>
                    ))}
                  </Form.Item>
                </Col>
              </Row>
            )}
          </Form.List>
        </Col>
      </Row>
      <Row justify="end">
        <SuccessBtn submit>{settingsDictionary.buttons.save}</SuccessBtn>
      </Row>
    </Form>
  );
};
