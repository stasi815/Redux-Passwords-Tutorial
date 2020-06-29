import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPassword } from './actions';
import zxcvbn from 'zxcvbn';
import './password.css';
import StrengthCalc from './password-strength';

function charsList() {
    const chars = []

    for (let i = 33; i < 127; i ++) {
      chars.push(String.fromCharCode(i))
    }
    return chars
}

function random(n) {
    return Math.floor(Math.random() * n)
}

function generatePassword(passwordLen = 8) {
    const chars = charsList()
    const randPassword = []
    for (let i = 0; i < passwordLen; i ++) {
        if (i % 3 === 0 && i !== 0) {
            randPassword.push(' - ')
        }
      randPassword.push(chars[random(chars.length)])
    }
    return randPassword.join('')
}

function Password(props) {
        const [ password, setPassword ] = useState('p@ssw0rd')
        const [ name, setName ] = useState('Name')
        const newPassword = generatePassword(12)

        return (
            <div>
                <input
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={ name }
                />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value)
                }}
                    value={ password }
                />

                <StrengthCalc password={ password }/>

                <div>
                    <button className='button' onClick={(e) => {
                        setPassword(newPassword)
                    }}>Generate</button>
                </div>
                <div>
                    <button className='button' onClick={(e) => {
                        addPassword(name, password)
                    }}>Save</button>
                </div>
            </div>
        )
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