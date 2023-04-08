// import { Button } from 'uiw';
import { TipButton } from '@/components/TipButton'

export const columns = (
  handle: (e: any, rowData: any) => void,
) => {
  return [
    {
      ellipsis: true,
      title: '姓名',
      key: 'name',
    },
    {
      title: '年龄',
      key: 'age',
    },
    {
      title: '地址',
      key: 'info',
    },
    {
      title: '操作',
      key: 'edit',
      width: 200,
      render: (text: any, key: any, rowData: any, rowNumber: any, columnNumber: any) => (
        <div>
          <TipButton
            tip="编辑"
            icon="edit"
            type="primary"
            onClick={() => handle('edit', rowData)}
          />
          <TipButton
            tip="删除"
            icon="delete"
            type="primary"
            onClick={() => { handle('delete', rowData) }}
          />
        </div>
      ),
    },
  ]
}