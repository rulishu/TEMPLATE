/* eslint-disable no-empty-function */
import { Table, Empty, Button, Card, Pagination } from 'uiw'
import { useDispatch, useSelector, Dispatch, RootState } from '@kkt/pro';
import { columns } from './item'

const Index = () => {
  const {
    check: { dataList, page, pageSize, total, checked },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<Dispatch>();

  const addModal = () => {
    dispatch({
      type: "check/update",
      payload: {
        editVisible: true,
        editType: 'add',
        formData: {}
      },
    });
  };
  const delModal = () => { }
  const onTurnPages = (current: any) => {
    // dispatch({
    //   type: "check/update",
    //   payload: {},
    // });
  }
  const handle = async (type: any, data: any) => {
    await dispatch({
      type: 'check/update',
      payload: {
        editType: type,
      }
    })
    if (type === 'edit') {
      dispatch({
        type: 'check/update',
        payload: {
          editVisible: true,
          formData: { ...data }
        }
      })

    }
    if (type === 'delete') {
      dispatch({
        type: 'check/update',
        payload: {
          delVisible: true,
          payload: {
            delId: data.id
          }
        }
      })
    }
  }

  return (
    <Card noHover={true}>
      <div style={{ marginBottom: 15 }}>
        <Button icon="plus" type="primary" onClick={() => addModal()}>
          新增
        </Button>
        <Button icon="delete" type="primary" onClick={() => delModal()}>
          删除
        </Button>
      </div>
      <Table
        columns={columns(handle, dataList, checked)}
        data={dataList}
        empty={<Empty />}
        footer={
          <Pagination
            current={page}
            pageSize={pageSize}
            total={total}
            divider
            onChange={(current: any) => {
              onTurnPages(current);
            }}
          />
        }
      />
    </Card>
  )
}

export default Index;