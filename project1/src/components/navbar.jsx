import React, {Component} from 'react'


// there is we are just display the things so this calss called stateless functional component

// so its depends on you what do you want to define class or function there is no as such internal difference.


const  NavBar= (props) =>{

return(

				<nav class="navbar navbar-light bg-light">
				  <a class="navbar-brand" href="#">Navbar {props.totalCount}</a>
				</nav>	
				);

		}	;



//class NavBar extends Component{
//		render(){
//			return(
//
//				<nav class="navbar navbar-light bg-light">
//				  <a class="navbar-brand" href="#">Navbar {this.props.totalCount}</a>
//				</nav>	
//				);
//
//		}

//}

export default NavBar;