import React from 'react'
import './SixthPage.css';
import { useHistory } from 'react-router-dom';
import { useParams} from 'react-router-dom';



function SixthPage() {
    const history = useHistory();
    const params = useParams();
    
    const Submit = (props) => {
        history.push("/SevenPage");
      } 
    return (
        <div className="SixthPage">
            <p className="profile">Profile Picture</p>
            < div className="icon"></div>
            <p><button className="submit-right" >upload</button></p>
            <p><button className="submit-right" onClick={Submit}>next</button></p> 
           
        </div>
    )
}

export default SixthPage
