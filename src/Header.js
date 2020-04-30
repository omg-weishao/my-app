import React,{ Component } from 'react';
import ProTypes from 'prop-types'
//function Header() {
//	var that =this;
//	console.log(this.props); //函数形式不能使用this
//  return (
//	  <div className="container">
//	  	<div className="row">
//	  		<div className="col-xs-1 col-xs-offset-11">
//	  			<h1>Home!</h1>
//	  		</div>
//	  	</div>
//	  </div>
//  );
//}

//有状态组件
// 写在结尾 export default Header；
export default class Header extends Component{
	constructor(props) {
		super(props);
		this.age = props.age;
		this.state = {
			age : props.age,
			status:0,
			headerLink : "Change HeaderLink"
		};
		setTimeout(() => {
			this.setState({
				status:1})
		},1000)
	}
	// componentWillUnmount = () => {
	// 	this.setState = (state,callback)=>{
	// 		return;
	// 	};
	// }

	add(){
		// this.age +=3;
		this.setState({
			age : this.state.age + 3
		})
		 console.log(this);
	}
	handGreet(){
		this.props.greet(this.props.name);
		// console.log("---------------------")
	}

	handChangeLink(){
		this.props.link(this.state.headerLink);
	}
	render(){
		// console.log(this.props);
		return (
		  <div className="container">
		  	<div className="row">
		  		<div className="col-xs-1 col-xs-offset-11">
		  			<h1>my name is {this.props.name},age = {this.state.age}</h1>
					<p>Status: {this.state.status}</p>
					<button onClick={() => this.add() } className="btn btn-primary">add</button>
					<br/>
					<button onClick={this.handGreet.bind(this)} className="btn btn-primary">Greet</button>
					<br/>
					<button onClick={this.handChangeLink.bind(this)} className="btn btn-primary">ChangeLink</button>
					<h4>hobbies:</h4>
					<ul>
						{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
					</ul>
					<p>I am Header, a child</p>
		  		</div>
		  	</div>
		  </div>
	  	);
	}
}

//export default Header; // 可以放到 class前面
	//父组件传入de参数检查，若类型不多，会报错
	Header.proTypes={
		name : ProTypes.string,
		age : ProTypes.number,
		user: ProTypes.object,
		children:ProTypes.element.isRequired
	}