import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPassword } from './actions';
import zxcvbn from 'zxcvbn';
import './password.css'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: 'p@ssw0rd',
            name: 'My Password',
            strength: '0',
        }
    }

    charsList() {
        const chars = []

        for (let i = 33; i < 127; i ++) {
          chars.push(String.fromCharCode(i))
        }
        return chars
    }

    random(n) {
        return Math.floor(Math.random() * n)
    }

    generatePassword(passwordLen = 8) {
        const chars = this.charsList()
        const randPassword = []
        for (let i = 0; i < passwordLen; i ++) {
            if (i % 3 === 0 && i !== 0) {
                randPassword.push(' - ')
            }
          randPassword.push(chars[this.random(chars.length)])
        }



        return randPassword.join('')
    }

    render() {
        const newPassword = this.generatePassword(12)
        // const passwordStrength = zxcvbn(newPassword)
        // console.log(passwordStrength.score)
        return (
            <div>
                <input
                    onChange={(e) => {this.setState({ name: e.target.value })}}
                    value={this.state.name}
                />
                <input
                    onChange={(e) => {
                        const userPassScore = zxcvbn(this.state.password).score
                        this.setState({ 
                            password: e.target.value,
                            strength: userPassScore,
                        })
                        console.log(userPassScore)
                }}
                    value={this.state.password}
                />
                <span>
                Password Strength: {this.state.strength}
                </span>
                <div>
                    <button onClick={(e) => {
                        const passGenScore = zxcvbn(newPassword).score
                        this.setState({ 
                            password: newPassword,
                            strength: passGenScore,
                        })
                    }}>Generate</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        this.props.addPassword(this.state.name, this.state.password)
                    }}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
  }

  const mapDispatchToProps = () => {
    return {
      addPassword
    }
  }

export default connect(mapStateToProps, mapDispatchToProps())(Password)