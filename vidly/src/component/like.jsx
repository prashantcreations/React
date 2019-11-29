import React, {Component} from 'react'


class Like extends Component{

	render(){

		if(this.props.liked)
			return(<i className="fa fa-heart" aria-hidden="true" onClick={this.props.onClick}/>);
		else
			return(<i className="fa fa-heart-o" aria-hidden="true" onClick={this.props.onClick}/>);

	}

}


export default Like;