import { useState } from 'react';
import { styled } from 'styled-components'

import Input from "./Input"

// Styled Components
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  // Without the customInput imported.
  // return (
  //   <div id="auth-inputs">
  //     <ControlContainer>
  //       <p>

  //         {/* combining permanent and dynamic classes' */}
  //         <Label $invalid={emailNotValid}>Email</Label>

  //         <Input
  //           type="email"
  //           $invalid={emailNotValid}
  //           className={emailNotValid ? '$invalid' : undefined}

  //           // Inline styling
  //           // style={{
  //           //   backgroundColor: emailNotValid ? "#fed2d2" : "d1d5db"
  //           // }}

  //           onChange={(event) => handleInputChange('email', event.target.value)}
  //         />
  //       </p>
  //       <p>
  //         <Label $invalid={passwordNotValid}>Password</Label>
  //         <Input 
  //           type="password"
  //           $invalid={passwordNotValid}
  //           className={passwordNotValid ? '$invalid' : undefined}
  //           onChange={(event) =>
  //             handleInputChange('password', event.target.value)
  //           }
  //         />
  //       </p>
  //     </ControlContainer>
  //     <div className="actions">
  //       <button type="button" className="text-button">
  //         Create a new account
  //       </button>
  //       <button className='button' onClick={handleLogin}>Sign In</button>
  //     </div>
  //   </div>
  // );

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <Input
          type="email"
          label="Email"
          $invalid={emailNotValid}
          className={emailNotValid ? '$invalid' : undefined}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          type="password"
          label="Password"
          $invalid={passwordNotValid}
          className={passwordNotValid ? '$invalid' : undefined}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
      </ControlContainer>

      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
