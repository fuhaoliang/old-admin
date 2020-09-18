/*
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2020-05-14 00:45:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/src/router.js
 */
import React from 'react';
import { Router } from 'dva/router';
import Root from './routes/root';

import A from './routes/a';
import B from './routes/b';

import NoMatch from './routes/NoMatch'
import Home from './routes/home';
import dynamic from 'dva/dynamic';

import { renderRoutes } from "react-router-config";

import { MailOutlined } from '@ant-design/icons';


// import { newDynamic } from './index'

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        hide: true,
        component: Home,
       
      },
      {
        path: "/a",
        title: 'A页面',
        icon: <MailOutlined />,
        component: A,
        routes: [
          {
            path: '/a/a1',
            title: 'A1页面',
            component: dynamic({
              app: window.app,
              component: () => import('./routes/a1'),
              models: () => [import('../src/models/example')],
            })
          }
        ]
      },
      {
        path: "/b",
        title: 'B页面',
        icon: <MailOutlined />,
        component: B,
        routes: [
          {
            path: "/b/b1",
            title: 'B1页面',
            // component: B1
            component: dynamic({  component: () => import('./routes/b1') })
          },
        ]
      },
      {
        hide: true,
        path: "/404",
        title: '404页面',
        component: NoMatch
      },
    ]
  },
];

const getRoutes = ({ app }) => {
  return [
    {
      component: Root,
      routes: [
        {
          path: "/",
          exact: true,
          hide: true,
          component: Home,
         
        },
        {
          path: "/a",
          title: 'A页面',
          icon: <MailOutlined />,
          component: A,
          routes: [
            {
              path: '/a/a1',
              title: 'A1页面',
              component: dynamic({
                app,
                component: () => import('./routes/a1'),
                models: () => [import('../src/models/example')],
              })
            }
          ]
        },
        {
          path: "/b",
          title: 'B页面',
          icon: <MailOutlined />,
          component: B,
          routes: [
            {
              path: "/b/b1",
              title: 'B1页面',
              // component: B1
              component: dynamic({  component: () => import('./routes/b1') })
            },
          ]
        },
        {
          hide: true,
          path: "/404",
          title: '404页面',
          component: NoMatch
        },
      ]
    },
  ];
}


function RouterConfig({ app, history }) {
  // console.info('app------>', app)
  return (
    <Router history={history}>
      {renderRoutes(getRoutes({ app }), { app })}
    </Router>
  );
}

export default RouterConfig

