import { Drawer } from 'uiw';
import { useSelector, RootState, useDispatch, Dispatch } from '@kkt/pro';
import { ProForm, useForm } from '@uiw-admin/components'
import { editFormData } from './item'

const Modal = () => {
  const {
    check: { editVisible, editType, formData }
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<Dispatch>();
  const form = useForm()

  const onClose = () => {
    dispatch({
      type: 'check/update',
      payload: {
        editType: 'none',
        editVisible: false,
        formData: {}
      }
    })
  }
  const onScreenSubmit = (current: any) => {
    dispatch({
      type: 'check/update',
      payload: {
        formData: {
          ...formData,
          ...current
        }
      }
    })
  }

  return (
    <>
      <Drawer
        size={700}
        title={editType === 'add' ? '新增' : '编辑'}
        isOpen={editVisible}
        onClose={() => { onClose() }}
        type="danger"
        useButton={false}
      >
        <ProForm
          formType="card"
          form={form}
          showSaveButton
          showResetButton
          saveButtonProps={{
            type: "primary",
          }}
          onSubmit={(_, current) => onScreenSubmit(current)}
          cardProps={{
            noHover: true,
          }}
          formDatas={editFormData(formData)}
        />
      </Drawer>

    </>
  )
}
export default Modal;