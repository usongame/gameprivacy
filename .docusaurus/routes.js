import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8b7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6cd'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5d2'),
            routes: [
              {
                path: '/docs/children',
                component: ComponentCreator('/docs/children', '5af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract',
                component: ComponentCreator('/docs/contract', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jindu',
                component: ComponentCreator('/docs/jindu', '157'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/privacy',
                component: ComponentCreator('/docs/privacy', 'a98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk',
                component: ComponentCreator('/docs/sdk', '1b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
