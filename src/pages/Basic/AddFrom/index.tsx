import { Modal } from 'uiw';
import { ProForm } from '@uiw-admin/components';
import { formAdd } from './item';
import { useDispatch, useSelector, Dispatch, RootState } from '@kkt/pro';

const AddFrom = () => {
  const {
    basic: { editVisible, editType, formData },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<Dispatch>();

  const onConfirm = () => {
    // dispatch({
    //   type: '',
    //   payload: {}
    // })
  }
  const onClosed = () => {
    dispatch({
      type: 'basic/update',
      payload: {
        editVisible: false,
        editType: "none"
      }
    })
  }

  return (
    <>
      <Modal
        title={editType === 'add' ? "新增" : '编辑'}
        isOpen={editVisible}
        confirmText="确定"
        cancelText="取消"
        // icon="information"
        type="primary"
        onConfirm={() => onConfirm()}
        onCancel={() => onClosed()}
        onClosed={() => onClosed()}
      >
        <ProForm
          formType="pure"
          formDatas={formAdd(formData)}
        />
      </Modal>
    </>
  )
}
export default AddFrom;