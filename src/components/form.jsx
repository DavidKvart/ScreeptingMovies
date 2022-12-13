import React from "react";
import { useForm } from 'react-hook-form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../navigaition/navbar.css'


const AddMovieForm = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            // id: '',
            genre: 'genre',
            rating: 'rating',
            informaition: ''

        }
    });

    let formStyle = {

        width: "100%",
        float: "left",
        position: 'relative',
        float: 'left',

    }

    return (
        <Container fluid >
            <Row >
                <Col className="ms-5 mt-3">
                    <form onSubmit={handleSubmit((data) => { props.sendData(data); reset(); })} style={formStyle}>

                        <div class="form-group">
                            <label htmlFor="">Movie name</label>
                            <input {...register('name', { required: 'this is required' })} placeholder="Movie name" type="text" className="form-control" />
                            <p>{errors.movieName?.message}</p>
                        </div>


                        <div class="form-group">
                            <label htmlFor="">Pick genre</label>
                            <select {...register("genre")} className="form-control">
                                <option value="genre">genre</option>
                                <option value="action">action</option>
                                <option value="comedy">comedy</option>
                                <option value="drama">drama</option>
                                <option value="fantasy">fantasy</option>
                                <option value="horror">horror</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label htmlFor="">Pick reating</label>
                            <select {...register("rating")} className="form-control">
                                <option value="rating">ratings</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea {...register("informaition", { required: 'this is required' })} class="form-control" rows="3"></textarea>
                            <p>{errors.informaition?.message}</p>
                        </div>


                        <button type="submit" class="btn btn-dark mt-2">Add movie</button>

                    </form>
                </Col>

                <Col  >
                    <img src={require("./photo2.jpg")} className="photoControl" />
                </Col>


            </Row>
        </Container>

    );
}

export default AddMovieForm;