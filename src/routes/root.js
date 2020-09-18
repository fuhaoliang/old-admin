/*
 * @Author: your name
 * @Date: 2020-05-12 21:32:39
 * @LastEditTime: 2020-05-14 00:13:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/src/routes/root.js
 */
import { matchRoutes, renderRoutes } from "react-router-config";
import { Redirect } from 'dva/router';
import BaseLayout from '../layout/baseLayout'
import { connect } from 'dva'
import { useEffect } from 'react'

const Root = ({ route, location, global, dispatch, app }) => {

  console.info('app------->', app)

  const branch = matchRoutes(route.routes, location.pathname) || []
  const isExact = branch[0] && branch[branch.length - 1].match.isExact
  console.info('a------->', isExact)
  
  useEffect(() => {
    dispatch({type: 'global/setBranch', payload: branch})
    console.info('useEffect---->branch---->', branch, location)
  }, [location])

  // const isLogin = true
  return (
    <div>
      {
          isExact 
          ?
          <BaseLayout>
            { renderRoutes(route.routes) } 
          </BaseLayout> 
          : 
          <Redirect to="/404" />
      }
    </div>
  )
}

export default connect(({ global }) => ({ global }))(Root)