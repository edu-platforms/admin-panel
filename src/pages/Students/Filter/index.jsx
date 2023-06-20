import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsSelector, getLessonDurationWeek, userActions } from "@/store";
import { Col, Form, Input, Row, Select, Space } from "antd";
import { PrimaryBtn } from "@/components";
import { videosDictionary } from "@/pages/Videos/dictionary";
import { studentsDictionary } from "../dictionary";
import { paymentOptions } from "../constants";

export const Filter = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm()
  const { loading, data: {lessonDurationWeeks} } = useSelector(settingsSelector)

  const clearFilter = () => {
    form.resetFields();
    dispatch(userActions.setFilter(null))
  }

  const handleFinish = (values) => dispatch(userActions.setFilter(values))

  const options = useMemo(() => lessonDurationWeeks.map(item => ({
    value: item.id,
    label: `${item.minut} minutes`
  })), [lessonDurationWeeks]);

  useEffect(() => {
    dispatch(getLessonDurationWeek())
  }, [])

  return (
      <Form form={form} autoComplete="false" onFinish={handleFinish}>
        <Row gutter={12}>
          <Col span={5}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email'
                }
              ]}
            >
              <Input
                placeholder={studentsDictionary.filterByEmail}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item
              name="paymentStatus"             
              rules={[
                {
                  required: true,
                  message: studentsDictionary.paymentMessage
                },
              ]}
            >
              <Select
                placeholder={studentsDictionary.sortByStatus}
                options={paymentOptions}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item
                name="lessonDurationWeek"             
                rules={[
                  {
                    required: true,
                    message: studentsDictionary.durationMessage
                  },
                ]}
              >
                <Select
                  loading={loading.get}
                  placeholder={studentsDictionary.sortByDuration}
                  options={options}
                />
              </Form.Item>
          </Col>

          <Col span={6}>
            <Space>

            <PrimaryBtn
              btn
              type="dashed"
              onClick={clearFilter}
            >
              {videosDictionary.clearFilter}
            </PrimaryBtn>

            <PrimaryBtn>{videosDictionary.showData}</PrimaryBtn>
            </Space>
          </Col>
        </Row>
      </Form>
  );
}
