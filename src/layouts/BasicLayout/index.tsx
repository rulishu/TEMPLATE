import { LayoutWrap, LeftWrap, RightContent, HeaderWrap } from './style';
import { Outlet, KktproPageProps, useLocation } from '@kkt/pro';
import { Menu } from 'uiw';
import Header from './Header'


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
    <LayoutWrap>
      <HeaderWrap>
        <Header {...props} />
      </HeaderWrap>
      <LeftWrap>
        <Menu>{renderMenu(routes)}</Menu>
      </LeftWrap>
      <RightContent>
        <Outlet />
      </RightContent>
    </LayoutWrap>
  )
}
export default Index;