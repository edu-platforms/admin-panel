import { Form, InputNumber } from "antd";
import classnamesBind from "classnames/bind";
import styles from "./fields.module.scss";
import { settingsDictionary } from "../dictionary";

const cn = classnamesBind.bind(styles);

export const NumberField = ({ ...props }) => {
  return (
    <Form.Item rules={[{ required: true, type: 'integer', message: settingsDictionary.message }]} {...props}>
      <InputNumber className={cn('fields-number')} />
    </Form.Item>
  )
}
