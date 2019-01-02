export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
 
  // app
  {
    path: '/admin',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/admin', redirect: '/admin/dashboard/analysis' },
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/admin/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/admin/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/admin/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        path: '/admin/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/admin/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/admin/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/admin/form/step-form',
                name: 'stepform',
                redirect: '/admin/form/step-form/info',
              },
              {
                path: '/admin/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/admin/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/admin/form/step-form/admin/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/admin/form/advanced-form',
            name: 'advancedform',
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/admin/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/admin/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/admin/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/admin/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/admin/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/admin/list/search',
                redirect: '/admin/list/search/articles',
              },
              {
                path: '/admin/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/admin/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/admin/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/admin/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/admin/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/admin/profile/advanced',
            name: 'advanced',
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/admin/result',
        routes: [
          // result
          {
            path: '/admin/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/admin/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/admin/exception',
        routes: [
          // exception
          {
            path: '/admin/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/admin/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/admin/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/admin/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/admin/account',
        routes: [
          {
            path: '/admin/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/admin/account/center',
                redirect: '/admin/account/center/articles',
              },
              {
                path: '/admin/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/admin/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/admin/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/admin/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/admin/account/settings',
                redirect: '/admin/account/settings/base',
              },
              {
                path: '/admin/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/admin/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/admin/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/admin/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },

  //购买咨询
  {
    path: '/consult',
    component: '../pages/Home/Consult',
  },
  //营销攻略
  {
    path: '/strategy',
    component: '../pages/Home/Strategy',
  },
  //网站前台
  {
    path: '/',
    component: '../layouts/HomeLayout',
    routes: [
      { path: '/', component: './Home/Index' },
      { path: '/index', component: './Home/Index' },
      { path: '/software', component: './Home/Software' },
      { path: '/hardware', component: './Home/Hardware' },
      { path: '/video', component: './Home/Video' },
      { path: '/features', component: './Home/Features' },
      { path: '/download', component: './Home/Download' },
      { path: '/help', component: './Home/Help' },
      { path: '/privacy', component: './Home/Privacy' },
      { path: '/aboutus', component: './Home/Aboutus' },
      { path: '/merchant_registe', component: './Home/MerchantRegister' },
      { path: '/honor', component: './Home/Honor' },
      { path: '/login', component: './Home/Login' },
      {
        component: '404',
      },
    ],
  },
];
