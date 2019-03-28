import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import alertify from 'alertifyjs';


const emailRegExp = RegExp(/^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formError => {
  let valid = true;

  Object.values(formError).forEach(val => {
    val.length > 0 && (valid = false)
  });
  return valid;
}


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      formError: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
  }
  handleChange = e => {
    const { name, value } = e.target
    // let { firstName, lastName, email, password } = this.state.formError;
    let formError = this.state.formError;
    this.setState({ [name]: value });
    console.log(e.target.name)
    console.log(e.target.value)
    switch (name) {
      case "firstName":
        formError.firstName = value.length < 3 ? "minimum 3 character required" : "";
        break;

      case "lastName":
        formError.lastName = value.length < 3 ? "minimum 3 character required" : "";
        break;

      case "email":
        formError.email = emailRegExp.test(value) ? '' : 'Invalid email address';
        break;

      case "password":
        formError.password = value.length < 3 ? "minimum 3 character required" : "";
        break;

      default:
        break;
    }

    this.setState({ formError, [name]: value }, () => console.log(this.state))
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.firstName)
    if (this.state.firstName === '') {
      alertify.error('SignUp Error');
    } else if (this.state.lastName === '') {
      alertify.error('SignUp Error');
    } else if (this.state.email === '') {
      alertify.error('SignUp Error');
    } else if (this.state.password === '') {
      alertify.error('SignUp Error');
    }
    else if (formValid(this.state.formError)) {
      localStorage.setItem('SignUp', JSON.stringify(this.state));
      console.log(`
firstName:${this.state.firstName}
lastName:${this.state.lastName}
Email:${this.state.email}
password:${this.state.password}
`)
      alertify.success('SignUp Successfully');
      // const props = this.props;
      // let s= this
      setTimeout(() => {
        this.props.history.push('/login')
      }, 2000);
    } else {
      alertify.error('SignUp Error');
      console.error('form-invalid')
    }
  };

  render() {
    const { formError } = this.state
    return (<div className="wrapper">
      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className={formError.firstName.length > 0 ? "error" : null}
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              noValidate
            ></input>
            {formError.firstName.length > 0 && (
              <span className="errorMessage">{formError.firstName}</span>
            )}
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className={formError.lastName.length > 0 ? "error" : null}
              placeholder="Last Name"
              value={this.state.lastName}
              name="lastName"
              noValidate
            ></input>
            {formError.lastName.length > 0 && (
              <span className="errorMessage">{formError.lastName}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={formError.email.length > 0 ? "error" : null}
              value={this.state.email}
              placeholder="Email"
              name="email"
              noValidate
            ></input>
            {formError.email.length > 0 && (
              <span className="errorMessage">{formError.email}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={formError.password.length > 0 ? "error" : null}
              placeholder="Password"
              name="password"
              value={this.state.password}
              noValidate
            ></input>
            {formError.password.length > 0 && (
              <span className="errorMessage">{formError.password}</span>
            )}
          </div>
          <div className="createAccount">
            <button type="submit">Submit</button>
          </div>
          <p className='AlreadySignup'>Already Signup <a href="/login"> Login</a></p>
        </form>
      </div>
    </div>)
  }

}

export default SignUp;