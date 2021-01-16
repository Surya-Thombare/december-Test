import React, { Component } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { fetchTrendingNews } from "../redux/actions/cocktailAction";
import  Cocktail from "./cocktail";
// import Navbar from "../../Components/Navbar.jsx";
import Search from "./search";

// import "./home.css";

class HomePage extends Component {
  async componentDidMount() {
    await this.props.fetchTrendingNews()
  }
  render() {
      console.log(this.props.cocktail)
      return (
       <div>
            <Search/>
            <Cocktail cocktail={this.props.cocktail} />
        </div>
       )
  }
};


const mapStateToProps = (storeState) => {
  return {
    cocktail: storeState.cocktailState.cocktail,
  };
};

export default connect(mapStateToProps, { fetchTrendingNews })(HomePage);
