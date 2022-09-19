import Firebase from '../Firebase';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = (props) => {

  const Firebase = useContext(FirebaseContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();

    Firebase.loginUser(email, password)
    .then(user => {
      console.log(user)
      setEmail('');
      setPassword('');
      props.history.push('/welcome')
    })
      .catch(error => {
        setError(error);
        setEmail('');
        setPassword('');
    })
  }

  useEffect(()=>{
    if(password.length > 5 && email !== ''){
      setBtn(true)} 
      else if (btn === true){
        setBtn(false)
      }
  },[password, email])

  return (
          <div className='slContainer'>
              <div className='formBoxLeftSignup'>
              </div>
              <div className='formBoxRight'>
                  <div className='formContent'>

                    {error !== '' && <span>{error.message}</span>} 

                      <h2>Connexion</h2>
                      <form onSubmit={handleSubmit}>

                          <div className='inputBox'>
                              <input onChange={e=>setEmail(e.target.value)} value={email} type='email' autoComplete='on' required/>
                              <label htmlFor='email'>Email</label>
                          </div>
                          <div className='inputBox'>
                              <input onChange={e=>setPassword(e.target.value)} value={password} type='password' autoComplete='on' required/>
                              <label htmlFor='password'>Mot de passe</label>
                          </div>
                          {btn ? <button>Connexion</button> : <button disabled>Connexion</button> }
                      </form>
                      <div className='linkContainer'>
                        <Link className='simpleLink' to='/signup'>Nouveau sur Marvel-quiz ? Inscrivez-vous maintenant</Link>
                        <br />
                        <Link className='simpleLink' to='/forgetpassword'>Mot de passe oublié ? Récupzérez-le ici.</Link>
                      </div>
                  </div>
              </div>
          </div>
  )
}

export default Login