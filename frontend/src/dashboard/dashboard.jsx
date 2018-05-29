import React, { Component } from 'react'

import ComponentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ComponentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          Dashboard
        </Content>
      </div>
    )
  }
}

export default Dashboard
