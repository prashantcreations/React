import React, {Component} from 'react'


class Counter extends Component{




	state = {

			count: this.props.value 
	
		};

		//constructor(){

		//	super();
		//	this.incrementTheValue = this.incrementTheValue.bind(this);
		//}

		styles = {

			fontSize : 20 ,
			fontWeight : "bold"

		};


	componentDidUpdate(prevProps,prevState){
		console.log("===========prevProps",prevProps);
		console.log("===========prevState",prevState);
	} 

	render()
	{

		return(
					<div>
						{this.props.children}
						<span style={this.styles} className="badge badge-primary m-2">{this.formateCount()}</span>
						<span style={{fontSize: 30 }} className={this.getbadgeClass()}>{this.formateCount()}</span>

						<button onClick={this.incrementTheValue} className="btn btn-secondry btn-sm">Increment</button>
						<button onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
						
					</div>

				);
      }
        //any event handler have no access for this. it alwas show undefined for this 
        // if we want to access we have to bind it in constructor or just us error function
        // which bind the every event automaticly
//      	incrementTheValue()
//      	{
//      		//this is able to access here this.state.count not possible here 
//      		console.log("in incremnt method",this);
//      	}

showValue(id){
	console.log(id);
}

incrementTheValue= () =>{
	console.log("in incremnt method",this);
	this.setState({count : this.state.count + 1});
}

		getbadgeClass(){
			console.log("getbadgeClass ",this);
			let colorVal = "badge m-2 badge-";
			colorVal += this.state.count === 0 ? "warning" : "primary"
			return colorVal
		}
		formateCount(){
			const {count} = this.state ;
			return count === 0 ? "Zero" : count ;
		}

} 

export default Counter;