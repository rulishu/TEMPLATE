import { Drawer } from 'uiw';
import { useSelector, RootState, useDispatch, Dispatch } from '@kkt/pro';
import { ProForm, useForm } from '@uiw-admin/components'
import { editFormData } from './item'

const Modal = () => {
  const {
    basic: { editVisible, editType, formData }
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<Dispatch>();
  const form = useForm()

  const onClose = () => {
    dispatch({
      type: 'basic/update',
      payload: {
        editType: 'none',
        editVisible: false,
        formData: {}
      }
    })
  }
  const onScreenSubmit = (current: any) => {
    dispatch({
      type: 'basic/update',
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
          formType="pure"
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
          formDatas={editFormData()}
        />
      </Drawer>

    </>
  )
}
export default Modal;