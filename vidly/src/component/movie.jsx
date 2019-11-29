import React, {Component} from 'react'
import {getMovies} from "../services/fakeMovieService"
import Like from './like'
import Pagenation from './pagenation'

class Movie extends Component{


	state ={
		movies : getMovies(),
		currentPage : 1,
		pageSize :4

	};

	handlePageChange = pageNumner =>{

		this.setState({currentPage:pageNumner});

		console.log("page has changed",pageNumner);
	};

	render(){

		if(this.state.movies.length==0)
			return <p>There are no movies in database</p>

		return(
			<div>
			<p>Showing {this.state.movies.length} movies in the database</p>
				
				<table className="table">

					<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th>Likes</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map(movie => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td><Like liked={movie.liked} onClick={()=>this.handelLike(movie)}/></td>
								<td><button onClick={() => this.deleteMovie2(movie)}>Delete</button></td>
							</tr>
							))}
					</tbody>
					<Pagenation movieCount={this.state.movies.length} pageSize={this.state.pageSize}  currentPage={this.state.currentPage} onPageChange={this.handlePageChange} />

				</table>


					<div>
						<ul>{this.state.movies.map(movie => <li id={movie._id} key={movie._id}>{movie.title} 
						<button onClick={() => this.deleteMovie(movie._id)}>Delete</button>
					</li>)} </ul>

					</div>
					</div>


			);
	}

	handelLike= (movie) =>{

		console.log(movie);

		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		console.log(index);
		movies[index] = {...movies[index]};
		movies[index].liked = !movies[index].liked;
		this.setState({movies});

	}

deleteMovie2 = movie =>{
	const movies = this.state.movies.filter(m => m._id !== movie._id);
	console.log(movies);
	this.setState({movies});

}	



deleteMovie = (id) =>
	{
	document.getElementById(id).style.display="none";

	}	
}


export default Movie;