import React, { Fragment, useState, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

const FacultyDashHome = () => {
    const logout = () => {
        window.alert("logout");
    }

    return (
        <Fragment>
            <div className="dashboardWrapper">
                <div className="column large12 medium12 small12">
                    <span class="logo">StatMaster</span>
                    <button onClick={logout} className="primary_red right" style={{marginTop: "-5px"}}>Logout</button>
                    <hr/>
                </div>
                <div className="column large4 medium4 small12">
                    <h4>Dashboard</h4>
                    <div className="helloContainer zi1">
                        <h5>Welcome Back,</h5>
                        <h6>John Doe</h6>
                    </div>
                </div>
                <div className="column large12 medium12 small12">
                    <h4>Batches</h4>
                    <div className="batchContainer zi2">
                        <span className="batchName">Batch 1</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FacultyDashHome;