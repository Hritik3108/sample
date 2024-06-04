import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className='container-fluid upper-header-container'>
            <div className="row header-row d-flex flex-column justify-content-md-center">
                    <div>
                        <img src={logo} alt="logo" />Payslips
                    </div>   
                    <div className='col logo-title-div'>
                        Logo
                    </div>
                    <div className='col logo-img-div'>
                        <FontAwesomeIcon icon={faUser} className='logo-img'/>
                    </div> 
                    <div className='col logo-text-div'>
                        Admin
                    </div> 
            </div>
            <div className='row' id='btn-row'>
                <div className="col btn-col">
                    <button className='btn btn-warning'>Send monthly Payslips</button>
                    <button className='btn btn-warning'>Send Filtered Payslips</button>
                    <button className='btn btn-warning'>Export all</button>
                </div>
            </div> 
        </div>
    )
}
export default Header;