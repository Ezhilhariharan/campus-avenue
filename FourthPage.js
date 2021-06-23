import React from 'react'
import './FourthPage.css';
import { useFormik } from 'formik';
import { useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function FourthPage() {
    const params = useParams();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
          name: '',
        },
        onSubmit: value => {
          alert(value.name);
        },
      });

      const Submit = (props) => {
        history.push(`/FifthPage/${params.name}`);
      } 
    return (
     
             <div className="SecondPage">
             <div className=" page page-left">
      <p className="heading">We are glad to have you {params.name}</p>
      <p className=" paragarph">your privacy is our concern, please
                          enter your credentials </p>
      
      </div>
      <div className=" page page-right">
      
      <form onSubmit={formik.handleSubmit}>
          <br/><br/><br/>
       <p className=" name-secondpage"><label htmlFor="email">Mobile</label></p>
       <p><input
        className="input-right"
         id="name"
         name="name"
         type="Mobile"
         onChange={formik.handleChange}
         value={formik.values.Mobile}
       /></p>
       <p><button type="submit" className="submit-right">Mobile</button></p>



<p className=" name-right"><label htmlFor="email">OTP</label></p>
       <p><input
        className="input-right"
         id="name"
         name="otp"
         type="name"
         onChange={formik.handleChange}
         value={formik.values.otp}
       /></p> 
       <button  className=" otp">Resend OTP</button>
<p><button type="submit" className="submit-right">Submit</button>   <button className="submit-right" onClick={Submit}>next</button></p>
</form>
</div>
      </div>
    )
}
    

export default FourthPage
