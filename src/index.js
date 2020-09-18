/*
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2020-05-13 00:18:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/src/index.js
 */
import dva from 'dva';
import './index.css';
// const createHistory = require("history/createBrowserHistory")
import { createBrowserHistory } from 'history';
import RouterConfig from "./router";

import createLogger from 'dva-logger';

// import dynamic from 'dva/dynamic';

const history = createBrowserHistory({
  basename:''//这里放入你对应的 basename
})

// 1. Initialize
const app = dva({
  history: history
});

// 2. Plugins

// app.use({});
app.use(createLogger());

// 3. Model
app.model(require('./models/global').default);
// app.model(require('./models/example').default);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');


