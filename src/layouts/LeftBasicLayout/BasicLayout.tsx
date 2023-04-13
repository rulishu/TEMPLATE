// import { useMemo } from 'react';
import { Menu } from 'uiw';
import { KktproPageProps, Outlet, useLocation } from '@kkt/pro';
import './index.less'

const LeftMenus = (props: KktproPageProps) => {
  const { navigate, routes } = props;
  const { pathname } = useLocation();

  // console.log('routes', routes);

  // const menus = useMemo(() => {

  //   return
  // }, [])

  const onClick = (item: any) => {
    navigate(item.path)
  }

  const renderMenu = (routes: any) => {
    const items: JSX.Element[] = [];
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
    <div className="layout-child-wrap">
      <div className="layout-child-left">
        <div style={{ height: "100%", overflowY: "auto" }}>
          <div className="left-menu" style={{ padding: 12 }}>
            <Menu>{renderMenu(routes)}</Menu>
          </div>
        </div>
      </div>
      <div className="layout-child-content">
        <div className="layout-child-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default LeftMenus;