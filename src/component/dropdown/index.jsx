import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.scss'

function SidebarDropdown() {
    return (
      <Dropdown className='custom-dropdown'>
        <Dropdown.Toggle variant="primary" id="dropdown-basic" className='custom-dropdown-toggle'>
          Payrun
        </Dropdown.Toggle>
  
        <Dropdown.Menu className='custom-dropdown-menu'>
          <Dropdown.Item href="#/action-1" className='custom-dropdown-item'>Payrun</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className='custom-dropdown-item'>Payslips</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className='custom-dropdown-item'>Benefitiary badge</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  export default SidebarDropdown;