import React, {Component} from 'react'


class CounterwihtObj extends Component{

	state = {

			count: this.props.counterwihtObj.value 
	
		};

		//constructor(){

		//	super();
		//	this.incrementTheValue = this.incrementTheValue.bind(this);
		//}

		styles = {

			fontSize : 10 ,
			fontWeight : "bold"

		};

	componentDidUpdate(prevProps,prevState){
		console.log("===========prevProps",prevProps);
		console.log("===========prevState",prevState);
		if(prevProps.counterwihtObj.vale !== this.props.counterwihtObj.value){
			//do ajax call 
			console.log("condition satisfied");
		}
	}

	componentWillUnmount(){
		// it will call just before compoent will remove from dom
		console.log("in componentdidunmount");
	}

	render()
	{

		return(
					<React.Fragment>


						{this.props.children}
						<span style={this.styles} className="badge badge-primary m-2">{this.formateCount()}</span>
						<span style={{fontSize: 10 }} className={this.getbadgeClass()}>{this.formateCount()}</span>

						<button onClick={()=>this.props.onIncrement(this.props.counterwihtObj)} className="btn btn-secondry btn-sm m-2">+</button>
						<button onClick={()=>this.props.onDecrement(this.props.counterwihtObj)} className="btn btn-secondry btn-sm m-2" disabled={this.props.counterwihtObj.value=== 0 ?"disabled":""}>-</button>
						<button onClick={()=>this.props.onDelete(this.props.counterwihtObj.id)}>X</button>
						
					</React.Fragment>

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



		getbadgeClass(){
			console.log("getbadgeClass ",this);
			let colorVal = "badge m-2 badge-";
			colorVal += this.state.count === 0 ? "warning" : "primary"
			return colorVal
		}
		formateCount(){
			console.log("in format count ",this.props.counterwihtObj);
			const {value} = this.props.counterwihtObj ;
			console.log(value);			
			return value == 0 ? "Zero" : value ;
		}

} 
export default CounterwihtObj;