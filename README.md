# react-ts-todolist
<img src="./src/assets/preview.png" style="width:70%;" />

## 代码
- 主要使用react、ts编写代码，并在不同版本中分别使用react-router、hook、redux
- [配置使用craco](https://github.com/gsoft-inc/craco)：react应用的一个配置工具
- [配置使用eslint](https://juejin.cn/post/6950084849180868622)：代码风格的检查工具
- [配置使用commitlint](https://www.jianshu.com/p/c93fdb56c63d)：规范git提交格式
- [使用自定义字体](http://t.zoukankan.com/fjdingsd-p-5663561.html)

## 版本
- [版本v1.0](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.0)：通过url中的hash值来切换任务列表的显示（所有、已完成、未完成）
- [版本v1.1](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.1)：通过引入react-router路由来切换任务列表的显示（所有、已完成、未完成）
- [版本v1.2](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.2)：使用useReducer和uesContext来模拟redux功能
- [版本v1.3](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.3)：引入redux，将数据保存在localstorage中，并使用useDispatch、useSelector。此版本中没有用到服务器，没有用到异步请求。
- [版本v1.4](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.4)：使用express开发服务器，将数据保存到服务器上，和后台进行交互，异步action使用redux-thunk。搭配使用服务器[v1.0代码](https://github.com/ChangYanwei/react-ts-todolist-serve/tree/v1.0)
- [版本v1.5](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.5)：添加分页的功能，搭配服务器[v1.1代码](https://github.com/ChangYanwei/react-ts-todolist-serve/tree/v1.1)
- [版本v1.6](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.6)：在[版本v1.3](https://github.com/ChangYanwei/react-ts-todolist/tree/v1.3)的基础上，使用[@reduxjs/toolkit](https://redux-toolkit-cn.netlify.app/)编写redux相关的代码。