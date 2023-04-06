import { Button } from 'uiw';

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
          <Button
            type="primary"
            onClick={() => handle('edit', rowData)}
          >
            编辑
          </Button>
          <Button
            type="primary"
            onClick={() => { handle('delete', rowData) }}>
            删除
          </Button>
        </div>
      ),
    },
  ]
}