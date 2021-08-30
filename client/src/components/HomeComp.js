import React, { Fragment, useState, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

const HomeComp = () => {

    return(
        <Fragment>
            <div className="login-container">
                <div className="login-form">
                    <span className="login-form-header">
                        Login
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default HomeComp;