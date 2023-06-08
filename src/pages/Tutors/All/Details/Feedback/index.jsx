import { Avatar, Card, Space, Typography } from 'antd';
import classnameBind from "classnames/bind";
import styles from "./feedback.module.scss";

const cn = classnameBind.bind(styles);

export const Feedback = ({ student }) => {
  student = {
    name: 'John Doe',
    lesson: '3 English lessons',
    img: 'https://picsum.photos/200',
    feedback: 'The interested warm up. Insist on learning more from Frank  up. Insist on learning more from Frank',
    when: 'Mar 8, 2023'
  }

  return (
    <Card bordered className={cn('feedback')}>
      <Space>
        <Avatar src={student.img} size={64} alt="Student's Photo" />

        <div>
          <Typography.Title level={4}>{student.name}</Typography.Title>
          <Typography.Text type="secondary">{student.lesson}</Typography.Text>
        </div>
      </Space>

      <p className={cn('feedback__desc')}>{student.feedback}</p>

      <Typography.Text type="secondary">{student.when}</Typography.Text>
    </Card>
  )
}
