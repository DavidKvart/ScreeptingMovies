import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../navigaition/navbar.css'
import { Outlet, Link } from "react-router-dom";

function NavBar(props) {
    return (
        <>
            <Navbar className="" bg="dark" variant="dark" expand="xl" >
                
                    <Navbar.Brand href=""><i class="bi bi-camera-reels"></i></Navbar.Brand>
                    <Navbar.Brand href=""><h3>Moively</h3></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                   
                    </Nav>
                    <select onChange={(ev)=>props.handMov(ev)} className="form-select select-sizing"  aria-label="Default select example">
                            <option value="10" selected>10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>
                    <Button variant="dark"> <Link className='color-me' to="/addMovie">Add Movie </Link></Button>
                   
            </Navbar>


        </>
    );
}

export default NavBar;