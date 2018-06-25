import React, { PropTypes as T } from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import { Link } from 'react-router'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/home')
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <Jumbotron>
       <h2 className={styles.textrule}>Welcome To Burger App</h2>
      </Jumbotron>
    )
  }
}

export default Home
