import React, { Fragment, useState, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

const FacultyDashHome = () => {
    const logout = () => {
        window.alert("logout");
    }
    const url = "/app/faculty/batch/";

    const batch = [{"id": 1, "name": "Digital Engineering 2.1", "startDate": "2020-01-01", "endDate": "2020-01-31"}, {"id": 2, "name": "Digital Engineering 2.2", "startDate": "2020-01-01", "endDate": "2020-01-31"}];

    return (
        <Fragment>
            <div className="dashboardWrapper">
                <div className="column large12 medium12 small12">
                    <span class="logo">StatMaster</span>
                    <button onClick={logout} className="primary_red right" style={{marginTop: "-5px"}}>Logout</button>
                    <hr/>
                    <h4>Dashboard</h4>
                </div>
                <div className="column large4 medium4 small12">
                    <div className="helloContainer zi1">
                        <p>Welcome Back,</p>
                        <h6>John Doe</h6>
                    </div>
                </div>
                <div className="column large12 medium12 small12">
                    <h4>Batches</h4>
                    {batch.map(batch =>(
                        <div key={batch.id} style={{display: "inline-block", marginRight: "18px"}}>
                            <NavLink to={url+batch.id}><div className="batchContainer zi2">
                                <span className="batchName">{batch.name}</span>
                            </div></NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default FacultyDashHome;