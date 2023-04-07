import { ProForm } from '@uiw-admin/components'
import { useDispatch, useSelector, Dispatch, RootState, KktproKeys } from '@kkt/pro';
import { formSearch } from './item'

const Index = () => {
  const {
    check: { search },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<Dispatch>();

  const onValuesChange = (_: KktproKeys, current: KktproKeys) => {
    dispatch({
      type: "check/update",
      payload: {
        search: { ...search, ...current },
      },
    });
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
        formDatas={formSearch()}
      />
    </div>
  )
}
export default Index;