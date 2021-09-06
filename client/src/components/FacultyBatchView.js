import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const FacultyBatchView = () => {
    const logout = () => {
        window.alert("logout");
    }
    const url = "/app/faculty/assessment/new";
    //get id from url
    const { id } = useParams();

    return (
        <Fragment>
            <div className="dashboardWrapper">
                <div className="column large12 medium12 small12">
                    <span class="logo">StatMaster</span>
                    <button onClick={logout} className="primary_red right" style={{marginTop: "-5px"}}>Logout</button>
                    <hr/>
                    <h4>Batch {id}</h4>
                </div>
                <div className="column large2 medium3 small12">
                    <NavLink to={url}><div className="helloContainer zi1">
                        <p>Add marks for latest</p>
                        <h6>Assesment</h6>
                    </div></NavLink>
                </div>
                <br/><br/>
                <div className="column large6 medium6 small12">
                        <table className="table_container recentActivity dlevel2" style={{width: "fit-content"}}>
                            <thead>
                                <tr style={{background: "#08a4ed", color: "#fafafa"}}>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Rajesh</td>
                                    <td>62</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Rajesh</td>
                                    <td>62</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                
            </div>
        </Fragment>
    );
}

export default FacultyBatchView;