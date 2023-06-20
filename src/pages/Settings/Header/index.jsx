import { useDispatch } from 'react-redux'
import { settingActions } from '@/store'
import { Button, Row, Typography } from 'antd'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { settingsDictionary } from '../dictionary'

export const SettingsHeader = ({isPlan}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
      dispatch(settingActions.setIsCreate(true))
      dispatch(settingActions.setIsModalOpen(true))
    }

    return (
        <Row align="start" justify="space-between">
            <Typography.Title level={1}>
                {isPlan ? settingsDictionary.plans: settingsDictionary.duration}  
            </Typography.Title>

            <Button 
                type="primary"
                size='large'
                icon={<AppstoreAddOutlined />}
                onClick={handleClick}
            >
                {settingsDictionary.add}
            </Button>
        </Row>
    )
}
