/*
 * @Author: your name
 * @Date: 2020-05-12 22:42:18
 * @LastEditTime: 2020-05-14 00:28:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/src/routes/a.js
 */

 import { renderRoutes } from "react-router-config";

//  import { renderRoutes } from 'dva-router-config';

const B = ({ route }) => (
  <div>
    <h2>BBB</h2>
    {
      renderRoutes(route.routes)
    }
  </div>
);

export default B