export const menuList = [
  {
    name: '导航一',
    icon: 'el-icon-location',
    path: '/home',
    subMenus: [
      {
        name: '选项一',
        icon: 'el-icon-document',
        path: '/home1'
      },
      {
        name: '选项二',
        icon: 'el-icon-document',
        path: '/home2'
      },
      {
        name: '选项三',
        icon: 'el-icon-notebook-2',
        subMenus:[
          {
            name: '选项三-1',
            icon: 'el-icon-document',
            path: '/home31'
          },
          {
            name: '选项三-2',
            icon: 'el-icon-document',
            path: '/home32'
          }
        ]
      }
    ]
  },
  {
    name: '导航二',
    icon: 'el-icon-menu',
    path: '/home/menu2'
  },
  {
    name: '导航三',
    icon: 'el-icon-setting',
    path: '/home/menu3'
  },
]