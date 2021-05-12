/* eslint-disable prettier/prettier */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import "../App.css"
import axios from "axios"
import { Link } from "react-router-dom"
import ArticleTable from "./ArticleTable"

class ShowArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles:[
        {}
      ],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        })
      })
      .catch((err) => {
        console.log("Error from ShowArticleList")
      })
  }

  render() {
    return (
      <div className="App">
        SEEDS Database
        <br/> Articles Table
        <ArticleTable data={this.state.articles}/>
      </div>
    )
  }
}

export default ShowArticleList
