import React from 'react'
import './FifthPage.css';
import { useHistory } from 'react-router-dom';
import { useParams} from 'react-router-dom';

function FifthPage() {
    const history = useHistory();
    const params = useParams();
    
    const Submit = (props) => {
        history.push("/SixthPage");
      } 
    return (
        <div className="SecondPage">
        <div className=" page page-left">
 <p className="heading">We are glad to have you {params.name} </p>
 
 
 </div>
 <div className=" page page-right">
 <p className="fifth-right">ThankYou!</p>
 <p className=" fifth-paragarph">We will get Back to you shortly </p><br/><br/><br/><br/><br/>

 <p><button className="submit-right" onClick={Submit}>next</button></p>
 </div>
 </div>
)
}
export default FifthPage
