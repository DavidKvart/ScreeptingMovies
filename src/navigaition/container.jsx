import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './navbar';
import Main from './main';
import SideBar from './sidebar';
import data from '../service/database';
import React, { Component } from 'react';
import fillteredArray from '../service/database';



//// this components organize the page to a grid/////
class Contain extends Component {
    state = {
        movieAmount: 10,//////amount of movie to display in a page
        movieData: fillteredArray//////// the array from data base
    }

    render() {
        return (
            <Container fluid >
                <Row >
                    <Col ><NavBar handMov={(ev) => this.handleMovieCounter(ev)} /></Col>
                </Row>

                <Row>
                    <Col xs={1} > <SideBar movieData={this.state.movieData} /> </Col>
                    <Col className='row-2-col-2'> <Main movieAmount={this.state.movieAmount} controllSideBarCounters={(movieData) => this.controllSideBarCounters(movieData)} /> </Col>
                </Row>

            </Container>
        );
    }

    //////handle the amount of pages needed to be displayed
    handleMovieCounter = (ev) => {
        let movieAmount = ev.target.value;
        this.setState({ movieAmount });
    }

    //////handle the bages in the side bar
    controllSideBarCounters = (data) => {
        let tempArray = data;

        this.setState({ movieData: tempArray });
       
    }
}

export default Contain;
