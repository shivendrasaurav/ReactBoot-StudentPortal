import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const FacultyNewAssessView = () => {
    const logout = () => {
        window.alert("logout");
    }
    const url = "/app/faculty/assessment/new";
    //get id from url
    const { id } = useParams();

    const [assessment, setAssessment] = useState([]);

    //get form data using name
    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = {};
        for (let name of formData.keys()) {
            data[name] = formData.get(name);
        }
        console.log(data);
        setAssessment(data);
    }
    */

    const tableToJSON = (e) =>{        
        e.preventDefault();
        let table = document.getElementById("assessmentTable");
        let rows = table.rows;
        let data = [];
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let rowData = [];
            for (let j = 0; j < row.cells.length; j++) {
                let cell = row.cells[j];
                //remove input tag from cell
                if (cell.getElementsByTagName("input")[0]) {
                    let input = cell.getElementsByTagName("input")[0];
                    rowData.push(input.value);
                } else if(cell.getElementsByTagName("select")[0]){
                    let input = cell.getElementsByTagName("select")[0];
                    rowData.push(input.value);
                } else {
                    rowData.push(cell.innerHTML);
                }
            }
            data.push(rowData);
        }
        console.log(data);
        setAssessment(data);
    }

    const studentList = [{"name":"Rajesh", "batch": "2"}, {"name": "Suresh", "batch": "2"}, {"name": "Mahesh", "batch": "2"}];
    
    return (
        <Fragment>
            <div className="dashboardWrapper">
                <div className="column large12 medium12 small12">
                    <span class="logo">StatMaster</span>
                    <button onClick={logout} className="primary_red right" style={{marginTop: "-5px"}}>Logout</button>
                    <hr/>
                    <h4>New Assesment</h4>
                </div>

                <div className="column large12 medium12 small12">
                    <form onSubmit={tableToJSON}>
                        <table className="table_container recentActivity dlevel2" style={{width: "fit-content"}} id="assessmentTable">
                            <thead>
                                <tr>
                                    <th>Assesment Name</th>
                                    <th><input type="text" name="assessName" placeholder="Assessment Name" required /></th>
                                    <th><input type="date" name="assessDate" required /></th>
                                    <th>
                                        <select name="assessBatch">
                                            <option value="">Select Batch</option>
                                            <option value="Batch 1">Batch 1</option>
                                            <option value="Batch 2">Batch 2</option>
                                            <option value="Batch 3">Batch 3</option>
                                        </select><br/><br/>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Student</th>
                                    <th><input type="text" name="sub1" placeholder="Subject 1" required /></th>
                                    <th><input type="text" name="sub2" placeholder="Subject 2" required /></th>
                                    <th><input type="text" name="sub3" placeholder="Subject 3" required /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.map(student =>(
                                    <tr key={student.name}>
                                        <td>{student.name}</td>
                                        <td><input type="text" name={student.name + "sub1marks"} placeholder="Marks/100" required /></td>
                                        <td><input type="text" name={student.name + "sub2marks"} placeholder="Marks/100" required /></td>
                                        <td><input type="text" name={student.name + "sub3marks"} placeholder="Marks/100" required /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table><br/>
                        <button className="form-group-button">Submit</button>
                    </form>
                </div>
                <div className="column large12 medium12 small12">
                    <table className="table_container recentActivity dlevel2" style={{width: "fit-content"}}>
                        <thead>
                            {
                                //map 1st two rows of assessment table
                                assessment.map((assessment, index) => {
                                    if (index < 2) {
                                        return (
                                            <tr key={index}>
                                                <th>{assessment[0]}</th>
                                                <th>{assessment[1]}</th>
                                                <th>{assessment[2]}</th>
                                                <th>{assessment[3]}</th>
                                            </tr>
                                        )
                                    }
                                }
                                )
                            }
                        </thead>
                        <tbody>
                            {
                                //map rest of the rows of assessment table
                                assessment.map((assessment, index) => {
                                    if (index >= 2) {
                                        return (
                                            <tr key={index}>
                                                <td>{assessment[0]}</td>
                                                <td>{assessment[1]}</td>
                                                <td>{assessment[2]}</td>
                                                <td>{assessment[3]}</td>
                                            </tr>
                                        )
                                    }
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}

export default FacultyNewAssessView;