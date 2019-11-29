import React, {Component} from 'react';
import Counter from './counter';
import CounterwihtObj from './counterusingobj'


class Counters extends Component{


	render()
	{

		return(

			//pass value as props

			//	<div>
			//		{this.state.counters.map(counters=>(
			//			<div>
			//				<Counter key={counters.id} value={counters.value} onDelete={this.handelDelete} selected={true} id={counters.id}>
			//					<h1>counters #{counters.id}</h1>
			//				</Counter>
			//			</div>
			//			))}
			//	</div>
			// pass object as prop

			<div>

					<button onClick={this.props.onReset}>Reset</button>			
					{this.props.counters.map(counters=>(
						<div>
							<CounterwihtObj key={counters.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counterwihtObj={counters} onDecrement={this.props.onDecrement}>
							<h1>counters #{counters.id}</h1>
							</CounterwihtObj>
						</div>
						))}
				</div>

			);
	}

}

export default Counters;