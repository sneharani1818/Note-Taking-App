import React from 'react'
import { useState } from 'react'

const CreateAccount = () => {
    const [email ,setEmail] = useState('')
    const [username ,setUsername] = useState()
    const [contact ,setConatact] = useState('')
    const [password ,setPassword] = useState('')

    const handlechange = (e)=>{
        if(e.target.name == 'email' ){
            setEmail(e.target.value)
        }
        if(e.target.name == 'password' ){
            setPassword(e.target.value)
        }
        console.log(email,password)
    }

    const adduser =  async()=>{
        const response = await fetch ("http://localhost:3001", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email,password }),
      })
      const jsonconvertedresponse = await response.json()
      console.log (jsonconvertedresponse)
    };
        
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Email</label>
                            <input onChange={handlechange} name='email' type="email" className="form-control" id="inputEmail3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Username (can't be your email)</label>
                            <input type="text" className="form-control" id="inputEmail3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Contact Number</label>
                            <input type="number" className="form-control" id="inputEmail3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword3" className="form-label">Password</label>
                            <input type="password" name='password' onChange={handlechange} className="form-control" id="inputPassword3" />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={adduser} className="btn btn-primary">Create Account</button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateAccount