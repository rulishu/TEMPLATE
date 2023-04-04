const { getData, getCity } = require("./selectPage");
const { login, verify, logout, reloadAuth } = require("./login");

const proxy = {
  // _proxy: {
  //   proxy: {
  //     "/api/(.*)": "http://192.168.188.84:9090",
  //   },
  //   changeHost: true,
  // },
  "GET /api/user": { id: 1, username: "kenny", sex: 6 },
  "POST /api/user": { id: 1, username: "kenny", sex: 6 },
  "POST /api2/login": login,
  "POST /api/logout": logout,
  "GET /api/user/verify": verify,
  "GET /api/city": getCity,
  "POST /api/getData": getData,
  "POST /api/reloadAuth": reloadAuth,
};

module.exports = proxy;
