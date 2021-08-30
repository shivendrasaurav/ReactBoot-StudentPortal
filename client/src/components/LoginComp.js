import React, { Fragment, useState, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

const LoginComp = () => {

    return(
        <Fragment>
            <div className="login-container">
                <div className="login-form">
                    <span className="login-form-header">
                        Log In to StatMaster
                    </span>
                    <div className="login-form-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>
                            <button type="submit" className="form-group-button">Login</button>
                        </form>
                    </div>
                    <div className="login-form-footer">
                        <div class="tooltip_container">  
                            <span class="tooltip_info" style={{fontSize: "18px", borderRadius: "5px"}}>In case you don't have an account or forgot password, contact administrator.</span>  
                            <a class="form-group-link" style={{color: "#08a4ed", fontSize: "16px"}}>Can't Login?</a>  
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default LoginComp;