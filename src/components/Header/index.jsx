import { Col, Row } from 'antd'
import { PrimaryBtn, Title } from '@/components';
import { FilterOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { openVideosFilterTab, openStudentsFilterTab, openReportFilterTab } from '@/store'

export const Header = ({ title, route }) => {
  const dispatch = useDispatch()

  const open = () => {
    switch (route) {
      case 'Videos':
        dispatch(openVideosFilterTab())
        break;
      case 'Students':
        dispatch(openStudentsFilterTab())
      case 'Reports':
        dispatch(openReportFilterTab())
      default:
        break;
    }
  }

  return (
    <Row>
      <Col span={20}>
        <Title>{title}</Title>
      </Col>
      <Col span={4}>
        <PrimaryBtn onClick={open}>
          <FilterOutlined />
          Filter
        </PrimaryBtn>
      </Col>
    </Row>
  )
}