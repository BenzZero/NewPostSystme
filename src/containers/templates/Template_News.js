import React, { Component } from 'react'
import HeaderComponent from '../pages/Header_Component'
import FooterComponent from '../pages/Footer_Component'
import './Template_News.css'
import { connect } from 'react-redux'
import { newsAction } from '../../redux/action/news'
import Menunews from '../../route/Menu_news'

class Template_News_all extends Component {  
  render() {
    const { news } = { ...this.props }
    if (news.length === 0) {
      this.props.getNewsAll()
      return ''
    } else {
    return (
      <div className='ui container padding-news-top'>
        <HeaderComponent />
        <Menunews />
        <FooterComponent />
      </div>
    )
    }
  }
}

function mapStateToProps(state) {
  return {
    news: [...state.News.data],
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      getNewsAll: () => {
        dispatch(newsAction.getNewsAll())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template_News_all);