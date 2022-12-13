import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAction from '../components/action'
import DisplayComedy from '../components/comedy';
import DisplayHorror from '../components/horror';
import DisplayFantasy from '../components/fantasy';
import DisplayDrama from '../components/drama';
import data from '../service/database';
import DisplayAll from '../components/displayAll';
import './navbar.css'
import AddMovieForm from '../components/form';


//////this compunents displays the middle part of my website , were you can pick if u want to see the movies table
///// or the add movie form


class Main extends Component {
    state = {
        movieData: data,/// the array of movies
        courentPage: 3,// the courent page selected by the user
        activeButton: 1,
        i: 'plswork'/////helps me render lol

    }

    render() {

        return (
            <>
                <Routes>
                    <Route path="/" element={<DisplayAll active={this.state.activeButton} returnPage={(ev) => this.handlePagedisplay(ev)} courentPage={this.state.courentPage} movieAmount={this.props.movieAmount} delFromAll={(id, arr) => this.handleDeltFromall(id, arr)} ganerData={this.state.movieData} changeLikeFromAll={(id, arr) => this.handleLikeFromAll(id, arr)} />} />
                    <Route path="/action" element={<DisplayAction active={this.state.activeButton} returnPage={(ev) => this.handlePagedisplay(ev)} courentPage={this.state.courentPage} movieAmount={this.props.movieAmount} del={(id, genre) => this.removeMovie(id, genre)} ganerData={this.state.movieData.action} changeLike={(id, genre) => this.handleLike(id, genre)} />} />
                    <Route path="/comedy" element={<DisplayComedy active={this.state.activeButton} returnPage={(ev) => this.handlePagedisplay(ev)} courentPage={this.state.courentPage} movieAmount={this.props.movieAmount} del={(id, genre) => this.removeMovie(id, genre)} ganerData={this.state.movieData.comedy} changeLike={(id, genre) => this.handleLike(id, genre)} />} />
                    <Route path="/drama" element={<DisplayDrama active={this.state.activeButton} returnPage={(ev) => this.handlePagedisplay(ev)} courentPage={this.state.courentPage} movieAmount={this.props.movieAmount} del={(id, genre) => this.removeMovie(id, genre)} ganerData={this.state.movieData.drama} changeLike={(id, genre) => this.handleLike(id, genre)} />} />
                    <Route path="/fantasy" element={<DisplayFantasy active={this.state.activeButton} returnPage={(ev) => this.handlePagedisplay(ev)} courentPage={this.state.courentPage} movieAmount={this.props.movieAmount} del={(id, genre) => this.removeMovie(id, genre)} ganerData={this.state.movieData.fantasy} changeLike={(id, genre) => this.handleLike(id, genre)} />} />
                    <Route path="/horror" element={<DisplayHorror active={this.state.activeButton} returnPage={(ev) => this.handlePagedisplay(ev)} courentPage={this.state.courentPage} movieAmount={this.props.movieAmount} del={(id, genre) => this.removeMovie(id, genre)} ganerData={this.state.movieData.horror} changeLike={(id, genre) => this.handleLike(id, genre)} />} />
                    <Route path="/addMovie" element={<AddMovieForm sendData={(formData) => this.handleaAddMovie(formData)} />} />
                </Routes>
            </>
        );
    }

    /////handle the delete button///////
    removeMovie = (id, genre) => {
        let movieData = this.state.movieData;
        movieData[genre].splice(movieData[genre].findIndex(element => element.id == id), 1);
        this.props.controllSideBarCounters(movieData)
        this.setState({ movieData });
    }


    ////// handle the like button////
    handleLike = (id, genre) => {
        let movieData = this.state.movieData;
        let elementIndex = movieData[genre].findIndex(element => element.id == id);
        movieData[genre][elementIndex].like = !movieData[genre][elementIndex].like;
        this.setState({ movieData });
    }


    /////handle the sorting needded to display the right movies depending on the user page choise/////
    handlePagedisplay = (ev) => {
        let courentPage = ev.target.text;
        this.setState({ courentPage });
        this.setState({ activeButton: courentPage })
    }

    /////handle the data coming from the form////
    handleaAddMovie = (formData) => {
        let movieData = this.state.movieData;
        let ID = '';
        ////this loops checks and generate new id that is not existed in my data base///
        do {
            let randnumber1 = Math.random() * 5;
            let randnumber2 = Math.random() * 5;
            ID = formData.name.substring(randnumber1, randnumber2) + Math.round((Math.random() * 10) * 10) / 100;

        } while (movieData[formData.genre].findIndex(e => e.id == ID) != -1);//ihave tried withoutusing falssy yet the loop wa infinite wthout the !=-1
        movieData[formData.genre].push({ ...formData, like: false, id: ID });
        this.props.controllSideBarCounters(movieData)
        this.setState({ movieData });

    }


    //////specifice functions to handele like and delete from the all movies view////
    handleLikeFromAll = (id, arr) => {
        let index = arr.findIndex(movie => movie.id == id);
        arr[index].like = !arr[index].like;
        this.setState({ i: this.state.i });
    }
    handleDeltFromall = (id) => {
        let movieData = this.state.movieData;

        for (const genre in movieData) {
            let index = movieData[genre].findIndex(movie => movie.id == id)
            if (index != -1) {
                movieData[genre].splice(index, 1);
                break;
            }
        }
        this.props.controllSideBarCounters(movieData)
        this.setState({ movieData });
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////

export default Main;
