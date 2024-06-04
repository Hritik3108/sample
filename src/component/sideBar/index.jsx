import './index.scss'
import SidebarDropdown from '../dropdown';

const SideBar = () => {
    return (
            <div className="container sidebar-container">
                <div className="row sidebar-row">
                    {/* <div className="col sidebar-col"> */}
                        <ul>
                            <li>
                                <div className="dropdown">
                                    <SidebarDropdown/>
                                </div>
                            </li>
                        </ul>
                    {/* </div> */}
                </div>
            </div>
    )
}

export default SideBar;