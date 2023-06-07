import { experienceLevel } from "../constants";
import { courseDictionary } from "../dictionary";
import { Row, Col, Form, Select, Button, Divider } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Input, TextArea } from "../Fields";
import { CourseUploads } from "../Upload";
import { SuccessBtn } from "@/components";

export const CourseForm = ({ form, files, loading, setFiles, onFinish }) => {
  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Row gutter={10}>
        <Col span={12}>
          <Input
            name="name"
            label={courseDictionary.labels.name}
            placeholder={courseDictionary.placeholders.courseName}
          />
        </Col>

        <Col span={12}>
          <Form.Item
            label={courseDictionary.labels.experience}
            name="level"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder={courseDictionary.placeholders.experience}
              options={experienceLevel}
            />
          </Form.Item>
        </Col>
      </Row>

      <TextArea
        name="descr"
        label={courseDictionary.labels.desc}
        placeholder={courseDictionary.placeholders.courseDesc}
      />

      <TextArea
        name="overview"
        label={courseDictionary.labels.reason}
        placeholder={courseDictionary.placeholders.reason}
      />

      <TextArea
        name="result"
        label={courseDictionary.labels.capable}
        placeholder={courseDictionary.placeholders.capable}
      />

      <Row gutter={16} justify="space-between">
        <Col span={12}>
          <Form.List name="plan" initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <Form.Item label={courseDictionary.labels.syllabus}>
                {fields.map(({ key, name, ...restField }) => (
                  <Row key={key} gutter={6}>
                    <Col span={22}>
                      <Input
                        name={[name, "syllabus"]}
                        message={courseDictionary.enterSyllabus}
                        placeholder={courseDictionary.placeholders.syllabus}
                        {...restField}
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

                <SuccessBtn icon={<PlusOutlined />} onClick={() => add()}>
                  {courseDictionary.addSyllabus}
                </SuccessBtn>
              </Form.Item>
            )}
          </Form.List>
        </Col>

        <CourseUploads files={files} setFiles={setFiles} />
      </Row>

      <Divider />

      <Row justify="end">
        <SuccessBtn disabled={loading} loading={loading} submit>
          {courseDictionary.saveChanges}
        </SuccessBtn>
      </Row>
    </Form>
  );
};
