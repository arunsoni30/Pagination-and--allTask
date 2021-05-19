import React, { Component } from 'react'
import './PrimisLogin.css'
// import Backgroundimage from './Background_image.png'
import PrimisLogo from '../assets/Primis-Logo.png'

export class PrimisLogin extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 image">
                        
                        
                        <img src="./background.svg" className="image"></img>
                        
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 second2">
                        <div className="  logo">
                            
                        </div>
                        <div className="welcome">
                            <h4>Welcome!</h4>
                            <h6>Sign in to continue to Primis</h6>
                            </div>

                            <form className="form">
                            <div className="form-group">
            <label for="user_username" className="control-label">Email</label>
            <input type="text" id="user_username" className="form-control input" placeholder="Your email" 
            name="user_username" autofocus/>
          </div>
          <div className="form-group">
            <label for="user_password" className="control-label">Password</label>
            <input type="password" id="user_password" className="form-control input " placeholder="Your password" 
            name="user_password"/>
            <img src="./Vector.svg" className="eyeoff   "/>
          </div>

          <div className="forgot">
                <a href="" className="float-md-right forgot">Forgot Password?</a>
            </div>

            <div className="text-center login">
            <button type="submit" className="btn btn-outline-secondary rounded-pill w-100 button">LOGIN</button>
        </div>

        </form>

        <div className="footer txt-white text-center">
        Copyright © 2021 Primis. All rights reserved.
            </div>
                        
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default PrimisLogin
