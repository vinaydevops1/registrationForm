// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorName: false,
    errorLastName: false,
    isSuccess: false,
  }

  inputBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({
        errorName: true,
      })
    }
  }

  inputBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({
        errorLastName: true,
      })
    }
  }

  onChangeName = event => {
    this.setState({
      firstName: event.target.value,
    })
    if (event.target.value !== '') {
      this.setState({
        errorName: false,
      })
    }
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
    if (event.target.value !== '') {
      this.setState({
        errorLastName: false,
      })
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({
        errorName: true,
      })
    }
    if (lastName === '') {
      this.setState({
        errorLastName: true,
      })
    } else {
      this.setState({
        isSuccess: true,
      })
    }
  }

  onSubmitAnotherForm = event => {
    event.preventDefault()
    this.setState({
      isSuccess: false,
      lastName: '',
      firstName: '',
    })
  }

  renderFirstNameInput = () => {
    const {firstName, errorName} = this.state
    const errorColor = errorName ? 'error-color' : null

    return (
      <div className="input-container">
        <label htmlFor="name" className="name-label">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          id="name"
          value={firstName}
          onBlur={this.inputBlurFirstName}
          onChange={this.onChangeName}
          className={`input-style ${errorColor}`}
        />
        {errorName ? <p className="required-text">Required</p> : null}
      </div>
    )
  }

  renderLastNameInput = () => {
    const {lastName, errorLastName} = this.state
    const errorColor = errorLastName ? 'error-color' : null

    return (
      <div className="input-container">
        <label htmlFor="last-name" className="name-label">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="Last name"
          id="last-name"
          className={`input-style ${errorColor}`}
          value={lastName}
          onBlur={this.inputBlurLastName}
          onChange={this.onChangeLastName}
        />
        {errorLastName ? <p className="required-text">Required</p> : null}
      </div>
    )
  }

  renderRegistrationFrom = () => (
    <>
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameInput()}
        {this.renderLastNameInput()}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  )

  renderSuccessForm = () => (
    <>
      <form className="form-container" onSubmit={this.onSubmitAnotherForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="img-size"
        />
        <p>Submitted Successfully</p>
        <button type="submit" className="button">
          Submit Another Response
        </button>
      </form>
    </>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <>
        <div className="registration-container">
          <h1 className="heading">Registration</h1>
          {isSuccess ? this.renderSuccessForm() : this.renderRegistrationFrom()}
        </div>
      </>
    )
  }
}

export default RegistrationForm
