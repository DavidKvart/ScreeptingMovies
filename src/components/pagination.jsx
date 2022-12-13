import Pagination from 'react-bootstrap/Pagination';
import "../navigaition/navbar.css"



const Paginations = (props) => {

    let active = props.active;
    let items = [];
    
    
  
    for (let number = 1; number <= props.amountOfpages; number++) {
        items.push(
            <Pagination.Item  onClick={(ev)=>props.returnPage(ev)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    
  
 
   
    return (
        <>   
        <div style={{ display: 'block', maxWidth:"1000px", padding: 30}}>
        <Pagination>
                {items}
        </Pagination>
      </div>
           
        </>
    );
}

export default Paginations;
