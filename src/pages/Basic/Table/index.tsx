import { Table, Empty, Button, Card, Pagination } from 'uiw'
import { useDispatch, useSelector, Dispatch, RootState } from '@kkt/pro';
import { columns } from './item'

const Index = () => {
  const {
    basic: { dataList, page, pageSize, total },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<Dispatch>();

  const addModal = () => {
    dispatch({
      type: "basic/update",
      payload: {
        editVisible: true,
        editType: 'add',
        formData: {}
      },
    });
  };
  const onTurnPages = (current: any) => {
    // dispatch({
    //   type: "basic/update",
    //   payload: {},
    // });
  }
  const handle = async (type: any, data: any) => {
    await dispatch({
      type: 'basic/update',
      payload: {
        editType: type,
      }
    })
    if (type === 'edit') {
      dispatch({
        type: 'basic/update',
        payload: {
          editVisible: true,
          formData: { ...data }
        }
      })

    }
  }
  return (
    <Card >
      <div style={{ marginBottom: 15 }}>
        <Button icon="plus" type="primary" onClick={() => addModal()}>
          新增
        </Button>
      </div>
      <Table
        columns={columns(handle)}
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