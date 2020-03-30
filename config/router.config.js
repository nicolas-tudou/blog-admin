export default [
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      {
        path: '/user',
        exact: true,
        redirect: '/user/login',
        routes: [
          {
            path: 'user/login',
            exact: true,
            component: '@/pages/user/login',
          },
          {
            path: '/user/list',
            exact: true,
            component: '@/pages/user/userList',
          },
        ],
      },
      {
        path: '/blog',
        exact: true,
        redirect: '/blog/list',
        routes: [
          {
            path: '/blog/list',
            exact: true,
            component: '@/pages/blog/blogList',
          },
          {
            path: '/blog/edit',
            exact: true,
            component: '@/pages/blog/editBlog',
          },
        ],
      },
      {
        path: '/category',
        exact: true,
        redirect: '/category/list',
        routes: [
          {
            path: '/category/list',
            exact: true,
            component: '@/pages/category/categoryList',
          },
        ],
      },
      {
        path: '/tag',
        exact: true,
        redirect: '/tag/list',
        routes: [
          {
            path: '/tag/list',
            exact: true,
            component: '@/pages/tag/tagList',
          },
        ],
      },
    ],
  },
  {
    path: '/404',
    exact: true,
    component: '@/pages/404',
  },
];
