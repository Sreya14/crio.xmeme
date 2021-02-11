import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditMeme extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      caption: '',
      url:''
    }
    
  }
  componentDidMount() {
    
    axios.get("http://localhost:8081/memes/"+this.props.match.params.id)
      .then(response => {
        this.setState({
          caption: response.data.caption,
          url: response.data.url,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  onChangeCaption(e) {
    this.setState({
      caption: e.target.value
    });
  }
  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const meme = {
      caption: this.state.caption,
      url: this.state.url,
    };
    
    URL = document.URL.split("/");
    const uid=URL[URL.length-1]==""?URL[URL.length-2]:URL[URL.length-1]
    axios.patch("http://localhost:8081/memes/"+this.props.match.params.id, meme)
      .then(res => {console.log(res.data)})
      .catch((error)=>{
        console.log(error);
      })
    
    alert("Updated successfully. Click on Meme List");
    this.setState({
      name: '',
      caption: '',
      url:''
    })
    //window.location="/meme-list"
    
  }
  render() {
    return (
      <div>
        <h3>EDIT MEME</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>CAPTION: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.caption}
                onChange={this.onChangeCaption}
                />
          </div>
          <div className="form-group"> 
            <label>IMAGE URL: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.url}
                onChange={this.onChangeUrl}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Edit Meme" className="btn btn-primary" />&nbsp;
            <Link to="/meme-list" className="btn btn-primary">MEME LIST</Link>
          </div>
        </form>
      
      </div>
    )
  }
}