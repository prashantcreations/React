import React, {Component} from 'react'
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component{


  constructor(){
    super();
    console.log("in App constructor");

  }

  componentDidMount(){

    // This is perfect palce for Ajax call
    console.log("in App componentDidMount");
  }
   
 state = {
    counters : [
      {id:1 , value:0},
      {id:2 , value:0},
      {id:3 , value:0},
      {id:4 , value:0}
    ]
  };

  handelIncrement=(counter)=>{
    const counters =[...this.state.counters];
    const index =counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});


  }


  handelDelete=(counterId)=>{

    console.log("in handel delete",counterId);
    const counters= this.state.counters.filter(c=>c.id!==counterId);
    this.setState({counters});
  }

  handelReset= () =>{

    console.log("in reset");

    const counters = this.state.counters.map(c=>{

      c.value = 0;
      return c;

    })

    this.setState({counters});
  }

handelDecrement=(counter)=>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});

}

 
render()
  {
    console.log("in App render");
  return(
      <div>
         <NavBar totalCount={this.state.counters.filter(c=>c.value>0).length}/> 
          <Counters counters={this.state.counters} onReset={this.handelReset} 
          onDelete={this.handelDelete} onIncrement={this.handelIncrement} onDecrement={this.handelDecrement}></Counters>
      </div>
      );
  }
  
}

export default App;
