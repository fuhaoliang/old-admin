import { Menu } from 'antd';

import { createBrowserHistory } from 'history'
import { useEffect, useState } from 'react'
import { Link } from "dva/router";
import { matchRoutes } from "react-router-config";
import { routes } from '../../router.js'

const { SubMenu } = Menu;

const AppMenu = () => {
  const [menuRender, setMenuRender] = useState()

  const location = createBrowserHistory().location
  const pageRoutes = routes[0].routes
  const defaultBranch = matchRoutes(pageRoutes, location.pathname) || []
  const defaultSelectedKeys = defaultBranch[defaultBranch.length - 1].match.path
  const defaultOpenKeys = defaultBranch.map(item => item.match.path)

  useEffect(()=> {
    setMenuRender(MenFn(pageRoutes))
  }, [])

  const subMenuFn = subObj => {
    return (
      <SubMenu key={subObj.path} title={subObj.title} icon={subObj.icon}>
        {
          subObj.routes.map(item => {
            const { hide, path, icon, title, routes = [] } = item

            const isExistRoutes = routes && routes.length > 0

            if(hide) return ''

            if(!isExistRoutes){
              return <Menu.Item key={path} icon={icon}><Link to={path}>{ title }</Link></Menu.Item>
            } else {
              return subMenuFn(item)
            }
          })
        }
      </SubMenu>
    )
  }


  const MenFn = (menuArr) => {
    return (
      <Menu
        defaultSelectedKeys={[defaultSelectedKeys]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        // theme="dark"
      >
      {
        menuArr.map(item => {
          const { hide, path, icon, title, routes = [] } = item
          const isExistRoutes  = routes && routes.length > 0

          if(hide) return ''

          if(!isExistRoutes){
            return <Menu.Item key={path} icon={icon}><Link to={path}>{ title }</Link></Menu.Item>
          } else {
            return subMenuFn(item)
          }
        })
      }
      </Menu>
    )
  }


  return(
    <div>
      {
        menuRender
      }
    </div>
  )
}

export default AppMenu
