import React, { Component } from 'react'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: 'p@ssw0rd',
            description: 'description',
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
        return (
            <div>
                <input
                    onChange={(e) => {this.setState({ password: e.target.value })}}
                    value={this.state.password}
                />
                <input
                    onChange={(e) => {this.setState({ description: e.target.value })}}
                    value={this.state.description}
                />
                <div>
                    <button onClick={(e) => {
                        this.setState({ password: newPassword })
                    }}>Generate</button>
                </div>
            </div>
        )
    }
}

export default Password