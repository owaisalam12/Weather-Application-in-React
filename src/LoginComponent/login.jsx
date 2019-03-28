import React, { Component } from 'react'
import alertify from 'alertifyjs'


const emailRegExp = RegExp(/^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid = formError => {
  let valid = true;
  Object.values(formError).forEach(val => {
    val.length > 0 && (valid = false)
  });
  return valid;
}

class Login extends Component {
  constructor(props) {
    super(props);
    // this.sweetalert = this.sweetalert.bind(this)
    this.state = {
      email: '',
      // sweetalert: false,

      password: '',
      formError: {
        email: "",
        password: ""
      }
    }
  }



  handleChange = e => {

    const { name, value } = e.target
    let formError = this.state.formError;
    this.setState({ [name]: value });
    console.log(e.target.name)
    console.log(e.target.value)
    switch (name) {
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
    if (this.state.email.value === '') {
      alertify.error('Login Error');
    } else if (this.state.password.value === '') {
      alertify.error('Login Error');
    }
    let result = JSON.parse(localStorage.getItem('SignUp'))
    console.log(this.state.email)
    console.log(result.email)
    if (result.email === this.state.email && result.password === this.state.password) {


      // alertify.set('notifier','position', 'bottom-right');
      alertify.success('Login Successfully');
      setTimeout(() => {
        this.props.history.push('/home')
      }, 2000);


      // this.setState({ ModalRight: true });
      // this.setState({ modalShow: true });

      // setTimeout(() => {
      //   props.history.push('/home')
      // }, 2000);
      // this.setState({sweetalert:true})
      //  props.history.push('/home')
    }
    else {
      console.error('invalid')
      alertify.error('Login Error');
    }
  };

  render() {
    // let modalClose = () => this.setState({ modalShow: false });
    return (<div className="wrapper">
      <div className="form-wrapper">
        <h1>Login</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={this.state.email}
              placeholder="Email"
              name="email"
              noValidate
            ></input>
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              noValidate
            ></input>
          </div>
          <div className="createAccount">
            <button type="submit">Submit</button>
          </div>
          <p className='AlreadySignup'>Create Account?<a href="/login"> Signup</a></p>
        </form>
      </div>
    </div>)
  }
}

export default Login