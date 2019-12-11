import React, { Component } from "react";
import {Link} from "react-router-dom";
import Liked from "./liked";
import Table from "../common/table";

class MovieTable extends Component {
  state = {
    sortColumn: { path: "title", order: "asc" }
  };

  render() {
    const columns = [
      { key: "#" },
      { path: "title", lable: "Title",
    
        content: movie => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        )
      },
      { path: "genre.name", lable: "Genre" },
      { path: "numberInStock", lable: "Stock" },
      { path: "dailyRentalRate", lable: "Rate" },
      {
        key: "like",
        content: movie => (
          <Liked liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        )
      },
      {
        key: "delete",
        content: movie => (
          <button
            onClick={() => this.props.onDelete(movie)}
            cName="btn btn-danger btn-sm"
          >
            Delete
          </button>
        )
      }
    ];
    const { sortColumn, movies, onSort } = this.props;
    return (
      <Table
        columns={columns}
        sortColumn={sortColumn}
        data={movies}
        onSort={onSort}
      />
    );
  }
}

export default MovieTable;
