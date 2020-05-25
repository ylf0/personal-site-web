import * as React from 'react'

import styles from './Login.module.scss'

export default class Login extends React.Component {
  render() {
    return (
      <div className={styles['login-module']}>
        <h2>Login</h2>
      </div>
    )
  }
}
