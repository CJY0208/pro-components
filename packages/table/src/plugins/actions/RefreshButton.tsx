/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { memo } from 'react'
import { ReloadOutlined } from '@ant-design/icons'

import Action from '../actions/Action'
import useQueryFieldPlugin from '../queryField'
import { I18nText } from '../config'

const RefreshButton = memo(function RefreshButton({
  // tooltip = { title: <I18nText text="actions.refreshTip" /> },
  ...props
}: any) {
  const queryField = useQueryFieldPlugin(({ loading }) => [loading])
  const { loading, refresh } = queryField

  return (
    <Action
      actionType="button"
      loading={loading}
      icon={<ReloadOutlined />}
      onClick={() => refresh()}
      // tooltip={tooltip}
      {...props}
      type="text"
    />
  )
})

export default RefreshButton
