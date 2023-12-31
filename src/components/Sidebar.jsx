import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Sidebar() {

    const linkColor = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <>
            {/* Sidebar */}
            <ul
                className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/* Sidebar - Brand */}
                {/* <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="/"
                > <div className="sidebar-brand-icon">
                <img
                    className="w-100"
                    src={logo}
                    alt="Digital House"
                />
            </div></a> */}
                <Link to='/'>
                    <div className="sidebar-brand-icon">
                        <img
                            className="w-100"
                            src={logo}
                            alt="Digital House"
                        />
                    </div>
                </Link>


                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard - DH movies</span>
                    </a> */}
                    <Link to='/'style={linkColor}>
                        <i className="fas fa-fw fa-tachometer-alt"/>
                        <span >Dashboard - DH movies</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">Actions</div>
                {/* Nav Item - Pages */}
                <li className="nav-item">
                    {/* <Link to='/pages' style={linkColor}>
                        <i className="fas fa-fw fa-folder" />
                        <span >Pages</span>
                    </Link> */}
                    <Link to={'/products'}  style={linkColor}>
                        <i className="fas fa-fw fa-folder" />
                            <span >Products</span>
                    </Link>
                    {/* <a className="nav-link collapsed" href="/pages">
                        <i className="fas fa-fw fa-folder" />
                        <span>Pages</span>
                    </a> */}
                </li>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/charts">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Charts</span>
                    </a> */}
                    <Link to='/users' style={linkColor}>
                        <i className="fas fa-fw fa-table" />
                        <span>Users</span>
                    </Link>
                </li>
                {/* Nav Item - Tables */}
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/* End of Sidebar */}
        </>
    )
}

export default Sidebar;