/*
 * @Author: your name
 * @Date: 2020-05-12 22:42:18
 * @LastEditTime: 2020-05-14 10:13:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/src/routes/a.js
 */

import { renderRoutes } from "react-router-config";

const A = ({ route }) => {
  return (
    <div>
    <h2>AAA</h2>
    { renderRoutes(route.routes) }
  </div>
  )
}

export default A