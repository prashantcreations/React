import React from 'react';
import _ from "lodash";


const Pagenation = props =>{

	const{movieCount,pageSize,currentPage,onPageChange} = props;
	const showonPage = Math.ceil(movieCount/pageSize);
	console.log(currentPage);

	if(showonPage===1)  return null ;
	const range = _.range(1,showonPage+1);

	return(
	<nav aria-label="Page navigation example">
		  <ul class="pagination">
		  {range.map(pageNumber=> 
		    <li class={ pageNumber===currentPage?'page-item active' : 'page-item' }>
		   	 <a class="page-link" onClick={()=>props.onPageChange(pageNumber)}>{pageNumber}</a>
		    </li>
		  	)}
		  </ul>
		</nav>);
}




export default Pagenation;