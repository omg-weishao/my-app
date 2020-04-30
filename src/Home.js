import React from 'react';

// 无状态函数写法
// 1. 无需state 不需要处理用户输入 组件所有的数据都依靠props传入
// 2. 不需要用到生命周期函数
//
// 优点：不需要申明类 可以避免大量譬如extends 或者constructor这样的代码
// 不需要显示申明this关键字 在es6的类声明中往往要将函数的this关键字绑定到当前作用域
// 函数声明式的特性 我们不需要再强制绑定
//
// 高阶组件 返回组件的函数 redux
const Home =(props) => {
    return (
        <div>
            <h1>{props.headerLink}</h1>
            <h1>Home Component</h1>
        </div>
    );
};
export default Home;