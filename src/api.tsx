import * as React from 'react'
import JSONTree from 'react-json-tree'
import { jsonTreeMonokaiTheme } from './theme'
import './../style/style.css'

export default class Api extends React.Component<any, any> {

  state = {
    info: {},
    users: {}
  }

  public constructor(props) {
    super(props)
    this.info = this.info.bind(this)
    this.users = this.users.bind(this)
  }

  public render() {
    const { info, users } = this.state
    return <div>
      <h1>JupyterHub API Browser</h1>
      <button
        onClick={ this.info }
      >
        Infos
      </button>
      <div style={{ padding: "10px", backgroundColor: "rgb(39,40,34)" }}>
        <JSONTree
          data={info}
          theme={jsonTreeMonokaiTheme}
          invertTheme={false}
          hideRoot={true}
          // sortObjectKeys={true}
          shouldExpandNode={(keyName, data, level) => true}        
          />
      </div>
      <button
        onClick={ this.users }
      >
        Users
      </button>
      <div style={{ padding: "10px", backgroundColor: "rgb(39,40,34)" }}>
        <JSONTree
          data={users}
          theme={jsonTreeMonokaiTheme}
          invertTheme={false}
          hideRoot={true}
          // sortObjectKeys={true}
          shouldExpandNode={(keyName, data, level) => true}        
          />
      </div>
    </div>
  }

  private async info() {
    const res = await fetch('./info', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({ 
        "Content-Type": "application/json"
      })
    })
    res.json().then(info => {
      this.setState({ info: info })
    })
  }

  private async users() {
    const res = await fetch('./users', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({ 
        "Content-Type": "application/json"
      })
    })
    res.json().then(users => {
      this.setState({ users: users })
    })    
  }

}
