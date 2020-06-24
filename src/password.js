import React, { Component } from 'react'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = { password: 'p@ssw0rd' }
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

    generatePassword() {
        const chars = this.charsList()
        const randPassword = []
        for (let i = 0; i < 8; i ++) {
          randPassword.push(chars[this.random(chars.length)])
        }
        return randPassword.join('')
    }

    render() {
        const newPassword = this.generatePassword()
        return (
            <div>
                <div>{this.state.password}</div>
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