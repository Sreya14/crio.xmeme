import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function Card(props) {
  const lm = props.mi.map((current)=>(
    <div key={current._id} >
      <div className="card text-white bg-dark mb-3" style={{width:"25rem",border:"1px solid",padding: "10px",boxShadow:"3px 2px #888888", borderRadius:"20px"}}>
        <a href={current.url}>
          <img className="card-img-top" src={current.url} alt="Image" height="400px" width="400px"/>
        </a>
        <div className="card-body">
          <h5>
          <p className="card-text">PUBLISHED BY: {current.name.toUpperCase()}</p>
          <p className="card-text">CAPTION: {current.caption}</p>
          </h5>
          <a className="btn btn-light" href={"/edit/"+current._id} role="button">Edit</a> &nbsp;
          <button className="btn btn-danger" onClick={() => { props.deleteMeme(current._id) }}>Delete</button>

        </div>
      </div>
    </div>
  ))
  return(lm)
}
export default class ListMeme extends Component {
  constructor(props){
    super(props);
    this.deleteMeme = this.deleteMeme.bind(this)
    this.state = {memeInfo:[]};
  }
  componentDidMount(){
    axios.get('http://localhost:8081/memes/')
      .then(response =>{
        this.setState({memeInfo:response.data});
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  deleteMeme(id) {
    axios.delete('http://localhost:8081/memes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      memeInfo: this.state.memeInfo.filter(el => el._id !== id)
    })
  }
  render() {
    return (
      <center>
        <div>
          <h2>MEMES LIST</h2>
          <Card mi={this.state.memeInfo} deleteMeme={this.deleteMeme}/>
        </div>
      </center>
    )
  }
}