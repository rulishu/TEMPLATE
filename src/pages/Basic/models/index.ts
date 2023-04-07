import { } from '@/servers';

const Basic = {
  name: 'basic',
  state: {
    search: {},
    page: 1,
    pageSize: 20,
    total: 10,
    dataList: [
      { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
      { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
      { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
      { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
    ],

    editVisible: false,
    editType: "none",
    formData: {},

    delVisible: false,
    delId: 0,
  },
  reducers: {
    update: (state: any, payload: any) => ({
      ...state,
      ...payload,
    }),
  },
  effects: () => ({

  })
}
export default Basic;

