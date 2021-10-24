import React, {Component} from 'react';



class Table extends Component {

    constructor(props) {
      super(props)
      this.state = {
        users:[],
        isLoading:false,
        isError:false
      }
    }
    
  
    async componentDidMount() {
      this.setState({isLoading:true})
  
      const response = await fetch('https://jsonplaceholder.typicode.com/postts/')
  
      if (response.ok) {
        const users = await response.json()
        console.log(users)
        this.setState({users, isLoading:false})
      }else{
        this.setState({isError:true, isLoading:false})
      }
    }
  
    renderTableHeader = () => {
      return Object.keys(this.state.users[1]).map(attr => <th key={attr}>
        {attr.toLocaleUpperCase()}
      </th>)
    }
  
    renderTableRows = () => {
      return this.state.users.map(user => {
          return (
              <tr key={user.userId}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
              </tr>
          )

      })
    }
  
  console.log(users);

    render() {
      const {users, isLoading, isError} = this.state
  
      if(isLoading) {
        return <div>Loading...</div>
      }
      if(isError) {
        return <div>Error...</div>
      }
        return users.length > 0
        ? (
          <table>
  
            <thead>
              <tr>
                {this.renderTableHeader()}
              </tr>
            </thead>
  
            <tbody>
              {this.renderTableRows()}
            </tbody>
  
          </table>
        ):(
          <div>No Users</div>
        )
    }
  }
  
  export default Table
  
  