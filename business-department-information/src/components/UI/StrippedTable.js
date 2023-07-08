import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

const StrippedTable = (props) =>{

    const columnId = props.data
    const tableContents = props.content

    const location = useLocation()
    const navigate = useNavigate();

    const [choosenID, setChoosenIDHandler] = useState("0")

    const extraInfo = <td><button>Here</button></td>

    const showEmployeeList = (id) => {

        console.log(id)

        // navigate('/Employees', {state:{depID: choosenID}});
    }


    return(

            <Table striped>
                <thead>
                <tr>
                    {columnId.map(column => {
                        return (<th>{column}</th>)})}
                </tr>
                </thead>
                <tbody>
                {


                   /*if we wanted to do an array and not an object if we were really trying to make it reusable instead of
                   needing to create another one. I can, but for the time being, I am going to leave it like how it is below

                    tableContents.map(insideArray =>{
                        return(
                            <tr key>
                                {insideArray.map(item => {
                                    return <td>{item}</td>
                                })}
                                {extraInfo}
                            </tr>
                        )
                    })
                    */
                }
                {/*

                    tableContents.map((dept) => {
                    return dept.map(x => {
                        return (<tr>
                                <td>{x}</td>
                                </tr>)
                    })
                })
                    */
                }
                {

                    tableContents.map((dept) => {
                    return <tr key={dept.id}>
                        <td>{dept.id}</td>
                        <td>{dept.department}</td>
                        <td>  <Link to="/Employees" state={{idChosen: dept.id}}>Employees List</Link></td>
                        <td>  <button className="" onClick={() =>showEmployeeList(dept.id)}>Edit</button> </td>
                    </tr>
                })
                }

                </tbody>
            </Table>
    )
}

export default StrippedTable;