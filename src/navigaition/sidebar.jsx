import Nav from 'react-bootstrap/Nav';
import './navbar.css'
import { Outlet, Link } from "react-router-dom";
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { SidebarMenuNavTitle } from 'react-bootstrap-sidebar-menu';
import { Badge } from 'react-bootstrap';
import '../navigaition/navbar.css'


function SideBar(props) {

        const { movieData } = props;

       /// gives the lengh of evry ganere so i could display the bage///
        let actionLengh = movieData['action'].length;
        let dramaLengh = movieData['drama'].length;
        let comedyLengh = movieData['comedy'].length;
        let horrorLengh = movieData['horror'].length;
        let fantasyLengh = movieData['fantasy'].length;

        return (

                <SidebarMenu className="bg-dark sideBarStyle" >



                        <SidebarMenu.Header>
                                <SidebarMenu.Brand>
                                        <Link className='color-me' to="/"> <h6>All movies</h6> </Link>
                                </SidebarMenu.Brand>
                        </SidebarMenu.Header>




                        <SidebarMenu.Body>
                                <SidebarMenu.Nav style={{ paddingTop: '18px' }} className='my-link'>
                                        <SidebarMenu.Nav.Link style={{ textDecoration: 'none' }}>
                                                <SidebarMenu.Nav.Title  >
                                                        <Link className='color-me ' to="/action">
                                                                Action
                                                                <Badge bg="light" className="my-badge" pill position="top" align="right">{actionLengh}</Badge>
                                                        </Link>
                                                </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>

                                <SidebarMenu.Nav style={{ paddingTop: '18px' }} className='my-link'>

                                        <SidebarMenu.Nav.Link style={{ textDecoration: 'none' }} >
                                                <SidebarMenu.Nav.Title>
                                                        <Link className='color-me' to="/comedy">Comedy
                                                                <Badge bg="light" className="my-badge" pill position="top" align="right">{comedyLengh}</Badge></Link>
                                                </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>

                                </SidebarMenu.Nav>

                                <SidebarMenu.Nav style={{ paddingTop: '18px' }} className='my-link'>
                                        <SidebarMenu.Nav.Link style={{ textDecoration: 'none' }}>
                                                <SidebarMenu.Nav.Title>
                                                        <Link className='color-me' to="/drama">
                                                                <Badge bg="light" className="my-badge" pill position="top" align="right">{dramaLengh}</Badge>Drama </Link>
                                                </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>

                                <SidebarMenu.Nav style={{ paddingTop: '18px' }} className='my-link'>
                                        <SidebarMenu.Nav.Link style={{ textDecoration: 'none' }}>
                                                <SidebarMenu.Nav.Title >
                                                        <Link className='color-me' to="/fantasy">
                                                                <Badge bg="light" className="my-badge" pill position="top" align="right">{fantasyLengh}</Badge>Fantasy </Link>
                                                </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>

                                <SidebarMenu.Nav style={{ paddingTop: '18px' }} className='my-link'>
                                        <SidebarMenu.Nav.Link style={{ textDecoration: 'none' }}>
                                                <SidebarMenu.Nav.Title>
                                                        <Link className='color-me' to="/horror">
                                                                <Badge bg="light" className=" dark my-badge" pill position="top" align="right">{horrorLengh}</Badge>
                                                                Horror </Link>
                                                </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>

                        </SidebarMenu.Body>
                </SidebarMenu>

        );
}

export default SideBar;