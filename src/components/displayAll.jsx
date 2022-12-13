
import '../navigaition/navbar.css'
import Paginations from './pagination';
import Table from 'react-bootstrap/Table';



const DisplayAll = (props) => {
       // setting a new array to contain all the movie in data base 
       let tempArray=[];
       let movieData=[];
       
       for (const genere in props.ganerData) {
              tempArray=[...props.ganerData[genere].map(movie=>movie)];
              movieData=[...movieData,...tempArray] ;
              }
             
       let fullArray=movieData;
       let movieAmount=props.movieAmount;//amount of movie to display in 1 page
       let pageNumber=props.courentPage;//the courent page in the pagination that is pressed
       let arraylenght=movieData.length;//amount of movies in data base 
       let amountOfpages=Math.ceil(arraylenght/movieAmount);//amount of pages of the specific genre
       movieData=movieData.slice( movieAmount*(pageNumber-1),  movieAmount*pageNumber)// the array containing only the movies that needs to be shown on the courent page 



 
   
       return (
           <>  
                   {/* printing the heading of the table */}
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
   
               {/* printing the array of movies */}
           <tbody className="tableBody">
               {movieData.map((movie)=>{
                   let icon='error';
                   if(movie.like)
                       icon=<i onClick={(id,genre)=> props.changeLikeFromAll(movie.id,fullArray)} className="bi bi-heart-fill"></i>;
                   else
                       icon=<i onClick={(id,genre)=> props.changeLikeFromAll(movie.id,fullArray)} className="bi bi-heart"></i>;
   
                   return(
                       <tr>
                       <td>{movie.id}</td>
                       <td>{movie.name}</td>
                       <td>{movie.genre}</td>
                       <td>{movie.informaition}</td>
                       <td>{movie.rating}</td>
                       <td>{icon}</td>
                       <td><button className="btn btn-outline-dark" onClick={()=> props.delFromAll(movie.id,fullArray)} >remove</button></td>
                       </tr>
                       
                   );
               })}
               </tbody>
               </Table>
               {/* display the pagination */}
         
           <Paginations   calssName="paginationStyle"amountOfpages={amountOfpages} active={props.active} returnPage={(ev)=>props.returnPage(ev)} movieAmount={props.movieAmount}  />
           </>
       );
   }
   export default DisplayAll;
// onClick={(id,genre)=> props.changeLike(movie.id,movie.genre)}