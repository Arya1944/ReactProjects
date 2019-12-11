import React from 'react';
import Form from "../common/form";
import Joi from "joi-browser";
import Input from "../common/input";
import { thisExpression } from "@babel/types";

class NewMovie extends Component {
    state = {
        data: { title: "", genre: "", numberInStock: "", dailyRentalRate:"" },
        errors: {}
      };
    
      schema = {
        title: Joi.string()
          .required()
          .email()
          .label("Title"),
          genre: Joi.string()
          .required()
           .label("Genre"),
          numberInStock: Joi.integer()
          .required()
          .label("number In Stock"),
          dailyRentalRate: Joi.float()
          .required().label("Rate")

      };
    
      doSubmit = () => {
        console.log("sunmitted");
      };
      render() {
        const { data, errors } = this.state;
        return (
          <div>
            <h1>Register</h1>
            <form onSubmit={this.onHandleSubmit}>
              {this.renderInput("title", "Title")}
              {this.renderInput("genre", "Genre")}
              {this.renderInput("numberInStock", "Number In Stock")}
              {this.renderButton("dailyRentalRate")}
            </form>
          </div>
        );
      }
    }
}
 
export default NewMovie;