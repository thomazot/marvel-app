import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { chooseCategory } from './HomeActions'

class ListItens extends Component {
  render() {
    return (
        <li className="home__list-item">
            <Link 
              to="/search"
              className="home__list-link"
              onClick={() => this.props.chooseCategory({
                route: this.props.title,
                img:this.props.image
              })}
            >
                <img src={this.props.image} alt="icon" className="home__list-img" />
                <span className="home__list-title">{this.props.title}</span>
            </Link>
        </li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({chooseCategory}, dispatch)
export default connect(null, mapDispatchToProps)(ListItens)