import * as React from 'react'

interface IProps {
  name: string
}

const NotFound: React.FunctionComponent<IProps> = ({ name }) => {
  return (
    <div>
      <h2>Not Found {name}</h2>
    </div>
  )
}

export default NotFound
