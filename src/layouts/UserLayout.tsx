import UserLogin from '@uiw-admin/user-login'
import { setCookie } from '@uiw-admin/utils'
import { Notify } from 'uiw'
import { KktproPageProps } from '@kkt/pro'

const UserLayout = (props: KktproPageProps) => {
  const { navigate } = props

  return (
    <UserLogin
      btnProps={{ type: "primary" }}
      api="/api2/login"
      defaultFieldsConfig={{
        userName: { label: "用户名", name: "userName" },
        passWord: { label: "密码", name: "password" },
      }}
      styleContainer={{
        background: "url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1-lanrentuku.qqxzb-img.com%2F2020%2F11%2F11%2Fef6f5575-ee2f-4113-b471-b8f0becf98c3.jpg%3FimageView2%2F2%2Fw%2F1024&refer=http%3A%2F%2Fi-1-lanrentuku.qqxzb-img.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648782888&t=33ace74f48bd36f363b577158171abd1)",
      }}
      projectName="Template"
      onSuccess={(data) => {
        if (data && data.token) {
          setCookie('token', data.token)
          sessionStorage.setItem('token', data.token)
          sessionStorage.setItem('auth', JSON.stringify(data.authList || []))
          localStorage.setItem('token', data.token)
          localStorage.setItem('auth', JSON.stringify(data.authList || []))
          navigate?.('/home', { replace: true })
        } else {
          Notify.error({
            title: '错误通知',
            description: data.error || '请求失败',
          })
        }
      }}
    />
  )
}
export default UserLayout
