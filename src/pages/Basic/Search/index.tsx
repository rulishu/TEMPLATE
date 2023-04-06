/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProForm } from '@uiw-admin/components'
import { useDispatch, useSelector, Dispatch, RootState, KktproKeys } from '@kkt/pro';

const Index = () => {
  // const {
  //   basic: { },
  // } = useSelector((state: RootState) => state);
  // const dispatch = useDispatch<Dispatch>();

  const formDatasList = [
    {
      label: 'input',
      key: 'input',
      widget: 'input',
      initialValue: '',
      widgetProps: {},
    },
    {
      label: 'radio',
      widget: 'radio',
      key: 'radio',
      widgetProps: {
        disabled: false
      },
      option: [
        { label: '男', value: 'man' },
        { label: '女', value: 'girl' }
      ],
    },
  ]
  const onValuesChange = (_: KktproKeys, current: KktproKeys) => {
    // dispatch({
    //   type: "basic/update",
    //   payload: {
    //     search: { ...search, ...current },
    //   },
    // });
  };
  return (
    <div style={{ marginBottom: 15 }}>
      <ProForm
        formType="card"
        showSaveButton
        showResetButton
        saveButtonProps={{
          type: "primary",
        }}
        cardProps={{
          noHover: true,
        }}
        onChange={(_, current) => { onValuesChange(_, current) }}
        formDatas={formDatasList}
      />
    </div>
  )
}
export default Index;