import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class CreateMeme extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      caption: '',
      url:''
    }
    
  }
  
  onChangeOwner(e) {
    this.setState({
      name: e.target.value
    });
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
      name: this.state.name,
      caption: this.state.caption,
      url: this.state.url,
    };
    axios.post('http://localhost:8081/memes/', meme)
      .then(res => console.log(res.data));
    alert("Created sucessfully. Click on Meme List");
    this.setState({
                    name: '',
                    caption: '',
                    url:''
                  })
  }
  render() {
    return (
      <div>
        <center><h2>XMEME</h2></center>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>OWNER: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeOwner}
                />
          </div>
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
          <br></br>
          <center>
          <div className="form-group">
            <input type="submit" value="ADD MEME" className="btn btn-primary" /> &nbsp; 
            <Link className="btn btn-primary" to="/meme-list/">MEME LIST</Link>
          </div>
          </center>
        </form>
      </div>
    )
  }
}