import React, { Component, Fragment } from "react";
import "./MenuReview.scss";
import sendIcon from "static/2/2-3/2_3_send_ui.png";
import * as CommentAPI from "lib/api/comment";

class MenuReview extends Component {
  state = {
    comments: [],
    content: ""
  };

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  handleSubmit = () => {
    const { content } = this.state;
    CommentAPI.writeComment({ content }).then(res => {
      this.refreshComments();
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  refreshComments = () => {
    CommentAPI.listComment().then(res => {
      const { message } = res.data;
      this.setState({
        ...this.state,
        comments: message.reverse()
      });
    });
  };

  componentDidMount = () => {
    this.refreshComments();
  };

  render() {
    return (
      <Fragment>
        <div className="rest-area">
          {this.state.comments.map((comment, index) => {
            return (
              <div className="box" key={index}>
                <div className="nametag">{`Anonymous${index}`}</div>
                <div className="comment">{comment.content}</div>
              </div>
            );
          })}
        </div>

        <div className="review-area">
          <div className="footer">
            <input
              type="text"
              id="comment-area"
              placeholder="Enter your comments"
              value={this.state.content}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
            <img
              id="sendIcon"
              src={sendIcon}
              alt="send"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MenuReview;
