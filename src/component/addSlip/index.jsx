import './index.scss'
import axios from 'axios';
import { useState } from 'react';

const AddSlip = (props) => {

    const {visible,setVisible} = props;

    const [slip,setSlip]=useState({
        profile:"",
        payrun:"",
        payrunPeriod:"",
        payruntype:"",
        status:"",
        salary:"",
        netSalary:""
    })

    const handleVisibility = () => {
        setVisible(!visible);
      };

    const addSlip = async(event) => {
        // event.preventDefault();
        console.log(slip);
        const bodyParameters = {
            profile:slip.profile,
            payrun:slip.payrun,
            payrunPeriod:slip.payrunPeriod,
            payruntype:slip.payruntype,
            status:slip.status,
            salary:slip.salary,
            netSalary:slip.netSalary
        };
        const config = {
          headers: { 
              'Content-Type': 'application/json' 
          },
          withCredentials: true
        };
    
        await axios.post('/api/addpayslip',bodyParameters,config)
          .then((response)=>{
            if(response.status===200){
                handleVisibility();
            }
        }).catch(function(error){console.log(error)});
    }

    function handleChange(event){
        const {name,value} = event.target
        setSlip(prev=>({
            ...prev,
            [name]:value
        }));
    }

    return (
        <form onSubmit={addSlip} className='form'> 

        <div className={`addSlip-container container-fluid ${visible?  "visible" : "invisible" } `}>
        <button
        type="button"
        className="close-btn align-items-center justify-content-center"
        onClick={handleVisibility}
        >
            <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
            </svg>
        </button>

        <div className="row d-flex flex-column justify-content-md-center align-items-center">
             <div className="col-md-8">
                <label htmlFor="profile" className="form-label fw-bold">Profile:</label>
                <input 
                    type="text" 
                    id="profile" 
                    className="form-control" 
                    placeholder="Your Profile"
                    name="profile"
                    value={slip.profile}
                    onChange={handleChange}
                />
            </div>
            
            <div className="col-md-8">
                <label htmlFor="payrun" className="form-label fw-bold">Payrun:</label>
                <input 
                    type="text" 
                    id="payrun" 
                    className="form-control" 
                    placeholder="Payrun"
                    name="payrun"
                    value={slip.payrun}
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-8">
                <label htmlFor="payrunPeriod" className="form-label fw-bold">Payrun Period:</label>
                <input 
                    type="text" 
                    id="payrunPeriod" 
                    className="form-control" 
                    placeholder="Payrun Period"
                    name="payrunPeriod"
                    value={slip.payrunPeriod}
                    onChange={handleChange}
                />
            </div>
           
            <div className="col-md-8">
                <label htmlFor="status" className="form-label fw-bold">Status:</label>
                <input 
                    type="text" 
                    id="status" 
                    className="form-control" 
                    placeholder="status"
                    name="status"
                    value={slip.status}
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-8">
                <label htmlFor="Payrun type" className="form-label fw-bold">Payrun type:</label>
                <input 
                    type="text" 
                    id="payruntype" 
                    className="form-control" 
                    placeholder="Payrun type"
                    name="payruntype"
                    value={slip.payruntype}
                    onChange={handleChange}
                />
            </div>
            <div className="col-md-8">
                <label htmlFor="salary" className="form-label fw-bold">Salary:</label>
                <input 
                    type="text" 
                    id="salary" 
                    className="form-control" 
                    placeholder="Salary"
                    name="salary"
                    value={slip.salary}
                    onChange={handleChange}
                />
            </div>
            <div className="col-md-8">
                <label htmlFor="netSalary" className="form-label fw-bold">netSalary:</label>
                <input 
                    type="text" 
                    id="netSalary" 
                    className="form-control" 
                    placeholder="Net Salary"
                    name="netSalary"
                    value={slip.netSalary}
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-8 d-grid gap-2 sub-btn">
                <button type="submit" className="btn custom-btn btn-block" >Create Payslip</button>
            </div>

        
        </div>


        </div>
        </form>

    )
}

export default AddSlip;