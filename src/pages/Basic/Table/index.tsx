/* eslint-disable @typescript-eslint/no-unused-vars */
import { Table, Empty, Button, Card, Pagination } from 'uiw'
import { useDispatch, useSelector, Dispatch, RootState, KktproKeys } from '@kkt/pro';

const Index = () => {

  const columns = [
    {
      ellipsis: true,
      title: '姓名',
      key: 'name',
    }, {
      title: '年龄',
      key: 'age',
    }, {
      title: '地址',
      key: 'info',
    }, {
      title: '操作',
      key: 'edit',
      width: 98,
      render: (text: any, key: any, rowData: any, rowNumber: any, columnNumber: any) => (
        <div>
          <Button size="small" type="danger">编辑</Button>
          <Button size="small" type="success">删除</Button>
        </div>
      ),
    },
  ];
  const dataSource = [
    { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
    { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
    { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
    { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
    { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
    { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
    { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
  ];
  //展开弹窗
  const addModal = () => {
    // dispatch({
    //   type: "basic/updateState",
    //   payload: {},
    // });
  };
  const onTurnPages = (current: any) => {
    // dispatch({
    //   type: "basic/updateState",
    //   payload: {},
    // });
  }
  return (
    <Card >
      <div style={{ marginBottom: 15 }}>
        <Button icon="plus" type="primary" onClick={() => addModal()}>
          新增
        </Button>
        <Button
          icon="delete"
          type="danger"
          onClick={() => {
            console.log('删除');
          }}
        >
          删除
        </Button>
      </div>
      <Table
        columns={columns}
        data={dataSource}
        empty={<Empty />}
        footer={
          <Pagination
            current={1}
            pageSize={1}
            total={10}
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