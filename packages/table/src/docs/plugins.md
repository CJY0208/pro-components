---
nav:
  path: /pro-table

group:
  title: 功能插件

title: 功能插件
order: 2
---

# 功能插件

目前的 ProTable 是插件式的，内置了 7 个插件，分别是

- `config`：管理各类插件的配置，例如国际化文案
- `valueType`：管理各种值类型的数据格式、呈现、表单形态等
- `queryField`：管理查询区域与表格数据源
- `actions`：主要用来注册内置行为
- `table`：呈现表格、管理表格相关的
- `modal`：命令式弹窗插件，返回的 showModal 函数可直接唤起弹窗，ModalStation 处于当前 ProTable 内部
- `editField`：结合动作插件，注册了新增、编辑、查看详情动作

插件之间，通过类似 hox 的机制实现了上下文共享，可相互调用彼此

## 访问内部插件

可以通过 `useProTableRef` 访问到内部各个插件，具体内部方法文档可参考下方，暂时可通过 `TS` 提示查看

```jsx | pure
import { ProTable, useProTableRef } from '@cjy0208/pro-components'

export default () => {
  const proTableRef = useProTableRef()

  useEffect(() => {
    console.log(proTableRef?.current?.config)
    console.log(proTableRef?.current?.valueType)
    console.log(proTableRef?.current?.queryField)
    console.log(proTableRef?.current?.actions)
    console.log(proTableRef?.current?.table)
    console.log(proTableRef?.current?.modal)
    console.log(proTableRef?.current?.editField)
  }, [])

  return <ProTable ref={proTableRef} />
}
```

## config

管理各类插件的配置，例如国际化文案

一般用不上，暂不做具体介绍

## valueType

管理各种值类型的数据格式、呈现、表单形态等

一般用不上，暂不做具体介绍

## queryField

是最核心的内部插件，管理查询区域与表格数据源

`queryField` 插件有以下功能

```jsx | pure
proTableRef?.current?.queryField?.hasQueryFields // 是否配置了查询表单
proTableRef?.current?.queryField?.form // 查询表单内部的 form 实例
proTableRef?.current?.queryField?.render // 渲染查询表单的方法，一般用不着
proTableRef?.current?.queryField?.service // 查询表单的接口服务，使用 ahooks.useRequest 创建
proTableRef?.current?.queryField?.loading // 请求中状态
proTableRef?.current?.queryField?.dataSource // 内部数据集
proTableRef?.current?.queryField?.paginationParams // 分页参数
proTableRef?.current?.queryField?.setPaginationParams // 设置分页参数
proTableRef?.current?.queryField?.getPaginationParams // 获取分页参数（穿透闭包）
proTableRef?.current?.queryField?.selectedItems // 多选状态下的选择的表格项（话说为啥要放这儿？忘记了...）
proTableRef?.current?.queryField?.setSelectedItems // 设置多选项
proTableRef?.current?.queryField?.getSelectedItems // 获取多选项（穿透闭包）
proTableRef?.current?.queryField?.getQueryingParams // 获取当前使用中的查询参数
proTableRef?.current?.queryField?.getQueryingExtraParams // 获取当前使用中的额外的查询参数，如表格的排序、筛选参数等
proTableRef?.current?.queryField?.refresh // 刷新请求（携带当前参数）
proTableRef?.current?.queryField?.search // 触发搜索，可指定参数
proTableRef?.current?.queryField?.setExtraParams // 设置额外参数，如表格的排序、筛选参数等，好像也可以塞一些其他的数据
```

## actions

主要用来注册内置行为

一般用不上，暂不做具体介绍

## table

呈现表格、管理表格相关的

一般用不上，暂不做具体介绍

## modal

命令式弹窗插件，返回的 showModal 函数可直接唤起弹窗，ModalStation 处于当前 ProTable 内部

`modal` 插件有以下功能

```jsx | pure
proTableRef?.current?.modal?.stationId // modalStationId
proTableRef?.current?.modal?.showModal // 命令式唤起弹窗，默认绑定了内部 station
proTableRef?.current?.modal?.showDrawer // 命令式唤起抽屉，默认绑定了内部 station
proTableRef?.current?.modal?.confirmPromise // 命令式确认交互（返回 Promise 格式）
proTableRef?.current?.modal?.renderStation // 内部方法，勿用
proTableRef?.current?.modal?.modalStationRef, // modalStation Ref
```

## editField

结合动作插件，注册了新增、编辑、查看详情动作

`editField` 插件有以下功能

```jsx | pure
// 编辑、新增、详情弹窗的 modal 控制器，有 { close, promise, update } 几个方法
proTableRef?.current?.editField?.modalController
```

## 自定义插件示例

允许自定义插件，以下为增加轮询功能的示例

<code src="./demos/polling-plugin">
