import { Button } from 'react-bootstrap';
// import Subheader from './subheader'
import { Link } from "react-router-dom";

function Header(props){
    return(
        // <div>
        // <h1>{props.name}</h1>
        // <Button variant="primary" onClick={()=>props.NewName("sangee")}>Button</Button>{' '}

        // <Subheader name={props.place}/>
        // </div>

        <nav>
          <ul>
            <li>
              <Link to={`/`}>Todo</Link>
            </li>
            <li>
              <Link to={`/login`}>Users</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Header;