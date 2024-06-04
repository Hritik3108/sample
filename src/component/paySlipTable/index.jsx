import { useState } from 'react';
import './index.scss'
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons'

const PaySlipTable = () => {

    const [payslips,setPayslips] = useState([])
    const fetchPayslips = async() =>{
        try{
            const response = await axios.get('/api/getpayslip',
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                // console.log(response.data);
                setPayslips([...response.data])
            }else{
                console.log(error)
            }
        }catch (error) {
            console.log(error);
        }
    };

    function TableData(){
        return payslips.map((slip,index) => (
            <tr key={slip._id}>
                <td>{slip.profile}</td>
                <td>{slip.payrun}</td>
                <td>{slip.payrunPeriod}</td>
                <td>{slip.payruntype}</td>
                <td>{slip.status}</td>
                <td>{slip.salary}</td>
                <td>{slip.netSalary}</td>
                <td><button className='btn'>View Details</button></td>
                <td><button className='btn btn-warning'>Send</button></td>
                <td>
                <FontAwesomeIcon icon={faFileEdit} className='logo-img'/>
                    {/* <button className='btn btn-secondary'>Edit</button> */}
                </td>
            </tr>
        ));
    }

    useEffect(()=>{
        fetchPayslips();
    },[])

    return (
        <>
            <div className="container table-container">
                <div className="row table-row">

                <table className='employee-table'>
                    <thead>
                        <tr className="table-heading">
                            <th>Profile^</th>
                            <th>Payrun</th>
                            <th>Payrun period</th>
                            <th>Payrun type</th>
                            <th>Status</th>
                            <th>Salary</th>
                            <th>Net Salary</th>
                            <th>Details</th>
                            <th>Email</th>
                            <th>Edit^</th>
                        </tr>
                    </thead> 
                    <tbody> 
                        {TableData()}  
                    </tbody>
                </table>    

                </div>
            </div>
        
        </>
    )
}

export default PaySlipTable;