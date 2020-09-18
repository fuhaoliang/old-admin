/*
 * @Author: your name
 * @Date: 2020-05-12 22:42:18
 * @LastEditTime: 2020-05-13 23:14:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/src/routes/a.js
 */
import { connect } from 'dva' 

const A1 = ({ route, global }) => {
  console.info('route---->A1', route, global)
  return (
    <div>
      <h2>A111A111A111A111A111A111A111A111A111A111A111A111A111A111A111A111A111A111A111</h2>
    </div>
  )
}

export default connect(({ global }) => ({ global }))(A1)