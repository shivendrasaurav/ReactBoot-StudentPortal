import React, { Fragment, useState, useEffect } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

const StudDash = () => {
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
                <div className="column large12 medium12 small12">
                    <h4>Dashboard</h4>
                    <div className="helloContainer zi1">
                        <div className="column large5 medium4 small12">
                            <h5>Welcome Back,</h5>
                            <h6>John Doe</h6>
                        </div>
                        <div className="column large7 medium8 small12">
                        <div className="widget primary_blue">
                                <span className="widgetNumber">
                                    12
                                </span>
                                <span className="widgetTitle">
                                    Days
                                </span>
                            </div>
                            <div className="widget primary_white" >
                                <span className="widgetNumber">
                                    6
                                </span>
                                <span className="widgetTitle">
                                    Tests
                                </span>
                            </div>
                            <div className="widget primary_green">
                                <span className="widgetNumber">
                                    566
                                </span>
                                <span className="widgetTitle">
                                    Aggregated Marks
                                </span>
                            </div>
                            <div className="widget primary_yellow">
                                <span className="widgetNumber">
                                    76
                                </span>
                                <span className="widgetTitle">
                                    Average Marks
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="column large6 medium8 small12" style={{padding: "20px"}}>
                    <h4>Recent Activity</h4>
                    <table className="table_container recentActivity dlevel2">
                        <thead>
                            <tr style={{background: "#08a4ed", color: "#fcfcfc"}}>
                                <th>Date</th>
                                <th>Subject 1</th>
                                <th>Marks</th>
                                <th>Subject 2</th>
                                <th>Marks</th>
                                <th>Subject 3</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12/12/12</td>
                                <td>English</td>
                                <td>76</td>
                                <td>Maths</td>
                                <td>76</td>
                                <td>Science</td>
                                <td>76</td>
                            </tr>
                            <tr>
                                <td>12/12/12</td>
                                <td>English</td>
                                <td>76</td>
                                <td>Maths</td>
                                <td>76</td>
                                <td>Science</td>
                                <td>76</td>
                            </tr>
                            <tr>
                                <td>12/12/12</td>
                                <td>English</td>
                                <td>76</td>
                                <td>Maths</td>
                                <td>76</td>
                                <td>Science</td>
                                <td>76</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="column large6 medium4 small12" style={{padding: "20px"}}>
                    <h4>Graphs</h4>
                    <div className="graphContainer">
                        <img src="https://i1.wp.com/www.eplindex.com/wp-content/uploads/2012/05/LFC-and-Opponents-Shot-Conversion-Per-Game.jpg" alt="graph" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default StudDash;