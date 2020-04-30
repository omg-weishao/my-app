import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Home from "./Home";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerLink : "HeaderLink"
        };
    }

    //子组件 header 向父组件 app传递 参数
    onGreet(name){
        console.log("Hello " + name);
        // alert("hello " + age);
        console.log(this);
    }
    onChangeHeaderLink(newName){

        // console.log(newName);
        // console.log(this);
        //方法里面使用了this 调用的时候需要bind(this）
        this.setState({
            headerLink : newName
        })
    }

  render(){
    const user={
      name:"xuebing",
      hobbies:["sports","readings"]
    };
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Hello</h1>
            </div>
          </div>
            <div>
                <Home headerLink={this.state.headerLink}/>
            </div>

          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
                {/*//父组件app 向子组件传递值  如下：  用参数 = {}的形式传递*/}
                {/*//子组件通过 props.参数 获得穿过来的值*/}
              <Header
                  name={"weishao"}
                  age ={20} user={user}
                  greet = {this.onGreet}
                  // 方法里面使用了this 调用的时候需要bind(this）
                  link={this.onChangeHeaderLink.bind(this)}/>

            </div>
              <div>
                  {this.props.children}
              </div>
          </div>
        </div>
    );
  }

}
// export default App;