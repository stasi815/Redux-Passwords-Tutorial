import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

function StrengthCalc(props) {
    const { password } = props
    const passScore = zxcvbn(password).score
    return (
        <div>
            Password Strength: { passScore }
        </div>
    )
}

export default StrengthCalc