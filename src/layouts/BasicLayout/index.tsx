import { Outlet, KktproPageProps, useLocation } from '@kkt/pro';
import { Menu } from 'uiw';
import Header from './Header';
import './style/index.less';

const Index = (props: KktproPageProps) => {
  const { routes, navigate } = props;
  const { pathname } = useLocation();

  const onClick = (item: any) => {
    navigate(item.path)
  }
  const renderMenu = (routes: any) => {
    let items: JSX.Element[] = [];
    routes.forEach((item: any, key: any) => {
      items.push(
        <Menu.Item
          onClick={() => { onClick(item) }}
          active={pathname === item?.path}
          key={key}
          icon={item.icon}
          text={item.name}
        />
      )
    })
    return items
  }
  return (
    <div className='layouts-wrap'>
      <Header {...props} />
      <div className='layouts-wrap-wrap'>
        <div className='layouts-wrap-menu'>
          <Menu style={{ background: '#f9fafb' }}>{renderMenu(routes)}</Menu>
        </div>
        <div className='layouts-wrap-outle'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}
export default Index;