import { Avatar, Typography } from 'antd';

export const Feedback = ({ student }) => {
  const { Text } = Typography;

  student = {
    name: 'John Doe',
    lesson: '3 English lessons',
    img: 'https://picsum.photos/200',
    feedback: 'The interested warm up. Insist on learning more from Frank  up. Insist on learning more from Frank',
    when: 'Mar 8, 2023'
  }

  return (
    <div className='f-wrapper'>
      <div className='f-user'>
        <Avatar size={64} src={student.img} alt="Student's Photo" />
        <div className='f-name'>
          <Text strong={true}>{student.name}</Text>
          <Text>{student.lesson}</Text>
        </div>
      </div>
      <p className='f-feedback'>{student.feedback}</p>
      <p className='f-date'> <time dateTime={student.when}>{student.when}</time> </p>
    </div>
  )
}
