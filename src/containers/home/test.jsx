import React from 'react';

export default class Test extends React.Component{
  state = {
    name: this.props.name || 'Anyomus'
  }

  render () {
    return (
      <p>Hello! { this.state.name } </p>
    )
  }
}