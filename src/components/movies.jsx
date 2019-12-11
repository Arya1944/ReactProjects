import FakeMovieService, { getMovies } from "../services/fakeMovieService";
import Pagination from "../common/pagination";
import React, { Component } from "react";
import { Paginate } from "../utilites/paginate";
import ListGroup from "../common/listgroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import MovieTable from "./movieTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
    item: 0,
    pageSize: 3,
    currentPage: 1
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "ALL Movies" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres: genres });
  }
  onHandleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  OnhandleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = movie.liked === true ? false : true;
    this.setState({ movies });
  };
  OnIncrement = () => {
    let item = this.state.item;
    item++;
    alert(item);
    this.setState({ item });
    console.log(item);
  };

  onHandleNext = page => {
    console.log("next");
  };
  onClickPrevious = page => {
    console.log("p");
  };
  onPageClick = page => {
    //const movies = [...this.state.movies] ;
    this.setState({ currentPage: page });
    console.log(page);
  };

  onHandleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  onHandleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  OnHandleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = movie.liked === true ? false : true;
    this.setState({ movies });
  };
  onHandleSort = sortColumn => {
    this.setState({ sortColumn: sortColumn });
  };
  render() {
    const {
      movies: currentMovies,
      currentPage,
      pageSize,
      selectedGenre,
      sortColumn
    } = this.state;

    const { length: count } = this.state.movies;

    const filtered =
      selectedGenre && selectedGenre._id !== ""
        ? currentMovies.filter(m => m.genre._id === selectedGenre._id)
        : currentMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = Paginate(sorted, currentPage, pageSize);

    return (
          <div className="row">
          <div className="col-4">
          <ListGroup
            listGroup={this.state.genres}
            onItemSelect={this.onHandleGenreSelect}
            textProperty="name"
            valueProperty="_id"
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <span>Number of Movies{filtered.length} </span>
          <MovieTable
            onLike={this.OnHandleLike}
            onDelete={this.onHandleDelete}
            movies={movies}
            sortColumn={sortColumn}
            onSort={this.onHandleSort}
          />

          <Pagination
            itemCounts={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onClickNext={this.onHandleNext}
            onClickPrevious={this.onHandlePrevious}
            onPageClick={this.onPageClick}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
