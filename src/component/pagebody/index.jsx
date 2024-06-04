import PaySlipTable from "../paySlipTable";
import SideBar from "../sideBar";
import './index.scss';

const Pagebody = () => {

    return (
            <div className="container page-body">
                <div className="row">
                    <div className="col col-sm-2">
                        <SideBar />
                    </div>
                    <div className="col col">
                        <PaySlipTable/>
                    </div>
                </div>
            </div>
    )
}

export default Pagebody;