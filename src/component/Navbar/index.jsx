import './index.scss'

const Navbar = (props) => {
    const {visible,setVisible} = props;

    const handleVisibility = () => {
        setVisible(!visible);
      };
    
    return (
        <>
            <div className="container-fluid navBar-container bg-primary">
                
                <div className="row d-flex navBar-list">
                    <ul>
                        <li onClick={handleVisibility}>Created</li>
                        <li>Status</li>
                        <li>Department</li>
                        <li>Type</li>
                        <li>Payrun Period</li>
                        <li>Show Conflicted</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;