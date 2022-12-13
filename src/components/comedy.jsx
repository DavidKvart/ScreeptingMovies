import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import '../navigaition/navbar.css'
import Paginations from './pagination';
import Table from 'react-bootstrap/Table';






const DisplayComedy = (props) => {

    let movieAmount = props.movieAmount;//5
    let pageNumber = props.courentPage;//5
    let arraylenght = props.ganerData.length
    let amountOfpages = Math.ceil(arraylenght / movieAmount);
    let tempArray = props.ganerData.slice(movieAmount * (pageNumber - 1), movieAmount * pageNumber)

    return (
        <>
            <Table striped bordered hover striped="columns">
                <thead>
                    <tr>
                        <th className='likesCollum'>id</th>
                        <th>name</th>
                        <th>genre</th>
                        <th>description</th>
                        <th >rating</th>
                        <th className='likesCollum'>likes</th>
                        <th className='buttonCollum'>remove</th>
                    </tr>
                </thead>

                <tbody className="tableBody">
                    {tempArray.map((movie) => {
                        let icon = 'error';
                        if (movie.like)
                            icon = <i onClick={(id, genre) => props.changeLike(movie.id, 'comedy')} className="bi bi-heart-fill"></i>;
                        else
                            icon = <i onClick={(id, genre) => props.changeLike(movie.id, 'comedy')} className="bi bi-heart"></i>;

                        return (
                            <tr>
                                <td>{movie.id}</td>
                                <td>{movie.name}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.informaition}</td>

                                <td>{movie.rating}</td>
                                <td>{icon}</td>
                                <td><button className="btn btn-outline-dark" onClick={(id, genre) => props.del(movie.id, 'comedy')} >remove</button></td>
                            </tr>

                        );
                    })}
                </tbody>
            </Table>
            <Paginations calssName="paginationStyle" amountOfpages={amountOfpages} active={props.active} returnPage={(ev) => props.returnPage(ev)} movieAmount={props.movieAmount} />
        </>



    );
}

export default DisplayComedy;
// onClick={(id,genre)=> props.changeLike(movie.id,movie.genre)}