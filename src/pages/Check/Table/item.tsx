/* eslint-disable no-empty-function */
import { dispatch } from '@kkt/pro';
import { Button, Checkbox } from 'uiw';


export const columns = (
  handle: (e: any, rowData: any) => void,
  checked: any[],
  dataList: any[],
) => {

  const onClickCheckedItem = () => { }
  return [
    {
      title: (data: any, rowNum: any, colNum: any) => {
        const indeterminate = dataList.length !== checked.length && checked.length > 0;
        const isChecked = dataList.length === checked.length;
        return (
          <Checkbox
            checked={isChecked}
            indeterminate={indeterminate}
            onClick={(e) => {
              console.log('e', e.target);

              let checkedIdx = dataList.map((item, idx) => idx);
              // if (!e.target.checked) {
              //   checkedIdx = [];
              // }
              dispatch({
                type: 'check/update',
                payload: {
                  checked: checkedIdx
                }
              })
            }}
          />
        );
      },
      key: 'checked',
      width: 80,
      render: (text: any, key: any, rowData: any, rowNumber: any, columnNumber: any) => {
        return (
          <Checkbox checked={rowData.checked} onClick={() => onClickCheckedItem()} />
        );
      }
    },
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
        </div>
      ),
    },
  ]
}