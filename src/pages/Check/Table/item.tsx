import { dispatch } from '@kkt/pro';
import { Checkbox } from 'uiw';
import { TipButton } from '@/components/TipButton';

export const columns = (
  handle: (e: any, rowData: any) => void,
  checked: any[],
  dataList: any[],
) => {

  const onClickCheckedItem = (rowData: any, e: any) => {
    const isChecked = e.target.checked;
    let check = [...checked] as any[];
    if (isChecked) {
      // 添加到选中数组中
      check.push(rowData.id);
      check = check.sort((a, b) => a - b);
    } else {
      // 删除选中项
      check.splice(check.indexOf(rowData.id), 1);
    }
    dispatch({
      type: "check/update",
      payload: { checked: check },
    });
  }
  return [
    {
      title: (data: any, rowNum: any, colNum: any) => {
        const indeterminate = dataList.length !== checked.length && checked.length > 0;
        const isChecked = dataList.length === checked.length && dataList.length > 0;
        return (
          <Checkbox
            checked={isChecked}
            indeterminate={indeterminate}
            onClick={(e: any) => {
              let checkedIdx = dataList.map((item) => item.id);
              if (!e.target.checked) {
                checkedIdx = [];
              }
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
          <Checkbox
            checked={rowData.checked}
            onClick={(e) => onClickCheckedItem(rowData, e)}
          />
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
      width: 80,
      render: (text: any, key: any, rowData: any, rowNumber: any, columnNumber: any) => (
        <div>
          <TipButton
            tip='编辑'
            type="primary"
            icon='edit'
            onClick={() => handle('edit', rowData)}
          />
        </div>
      ),
    },
  ]
}