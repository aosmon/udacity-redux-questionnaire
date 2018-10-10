import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import avatar from '../images/479477-128.png'

class Nav extends Component {
  render(){

    const {authedUserName, authedUserURL, authedUser} = this.props;

    return (
      <nav className='nav'>
        <ul className='app-nav'>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/newquestion' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
        {authedUser && (
        <ul>
          <li className='username'>
            <NavLink to='/authedUser'>     
              <span>Hello, {authedUserName}</span>      
              <img src={avatar} alt='u'/>
            </NavLink>
          </li>
           <li>
            <NavLink to='/login'>
              Logout
            </NavLink>
          </li>
        </ul>
        )}
      </nav>
    )


  }
}

function mapStateToProps({authedUser, users}){
  if(authedUser){
    const user = users[authedUser]

    return {
      authedUser,
      authedUserName: user.name,
      authedUserURL: user.avatarURL,
    }    
  }
  return{
    authedUser: '',
    authedUserName: '',
    authedUserURL: '',

  }
}

export default connect(mapStateToProps)(Nav)