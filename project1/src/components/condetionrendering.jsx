import React, {Component} from 'react'

class ConditionRend extends Component{

	state = {

			count: 0 ,
			imgUrl : "https://picsum.photos/200",
			tags : []
		};

		renderTags()
		{
			if(this.state.tags.length === 0)
				return <p>There is no element</p>;

			return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
		}

		render(){

			return(
					<div>
						{this.state.tags.length === 0 && "Create new tag list"}
						{this.renderTags()}
					</div>
				);

		}

}

export default ConditionRend;