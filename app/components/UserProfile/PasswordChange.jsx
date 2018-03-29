import React, { Component } from 'react';
import Button from '../Button';
import StatusMessage from '../StatusMessage';
import pageContent from '../pageContent';

// view for changing user's own password
class PasswordChange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit() {
    if (this.state.current_pw !== undefined
        && this.state.new_pw !== undefined
        && this.state.new_pw_again !== undefined) {
      const inputs = {
        currentPassword: this.state.current_pw,
        newPassword: this.state.new_pw,
        repeatedPassword: this.state.new_pw_again,
      };

      if (inputs.newPassword.length < 6 || inputs.repeatedPassword.length < 6) {
        this.setState({
          message: {
            type: 'error',
            text: 'Passwords must be at least 6 characters long!',
          },
        });
      } else if (inputs.newPassword === inputs.repeatedPassword) {
        pageContent.fetchData('/changePassword', 'POST', { data: JSON.stringify(inputs) }).then((res) => {
          this.setState({
            message: {
              type: res.status.toLowerCase(),
              text: res.message,
            },
          });
        });
      } else {
        this.setState({
          message: {
            type: 'error',
            text: 'The new passwords did not match!',
          },
        });
      }
    } else {
      this.setState({
        message: {
          type: 'error',
          text: 'Please fill in all fields!',
        },
      });
    }
  }

  render() {
    return (
      <div className="container">
        <StatusMessage message={this.state.message} />
        <h2>Change your password</h2>
        <form>
          <div className="edit-para">Current password:</div>
          <input
            className="edit-text"
            onChange={this.handleChange}
            name="current_pw"
            type="password"
          />

          <div className="edit-para">New password:</div>
          <input className="edit-text" onChange={this.handleChange} name="new_pw" type="password" />

          <div className="edit-para ">Retype password:</div>
          <input
            className="edit-text"
            onChange={this.handleChange}
            name="new_pw_again"
            type="password"
          />
        </form>
        <Button
          text="Change password"
          onClick={this.handleSubmit}
          className="btn btn-lg btn-block btn-major"
        />
      </div>
    );
  }
}

export default PasswordChange;
