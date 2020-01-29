import * as React from 'react'

const md = require('markdown-it')()

export default class Panel extends React.Component {
  componentDidMount() {
    this.testMD()
  }

  testMD() {
    return md.render('### Header')
  }

  render () {
    return (
      <div>
        <textarea/>
        <div>preview</div>
      </div>
    )
  }
}
