import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { settingActions } from '@/store'
import { settingsDictionary } from '../dictionary'

export const EditAction = ({record}) => {
  const dispatch = useDispatch()

  const handleClickEdit = () => {
    dispatch(settingActions.setIsCreate(false))
    dispatch(settingActions.setIsModalOpen(true))
    dispatch(settingActions.setSelectedItem(record))
  }

  return (
    <Button icon={<EditOutlined />} onClick={handleClickEdit}>{settingsDictionary.edit}</Button>
  )
}
