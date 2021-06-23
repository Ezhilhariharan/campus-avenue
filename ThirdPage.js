import React from 'react'
import './ThirdPage.css';
import { useFormik} from 'formik';
import { useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as Yup from "yup";




function ThirdPage(props) {
    const params = useParams();
    const history = useHistory();
    const formik = useFormik({
      initialValues: {
        user: '',passward:'',confirmpassward:'',
      },
      onSubmit: values => {
          alert(values.domain);
       
      },
    });
  
   
      const Submit = (props) => {
        history.push(`/FourthPage/${params.name}`);
      } 
    
    return (
        <div className="SecondPage">
             <div className=" page page-left">
      <p className="heading">We are glad to have you {params.name} </p>
      <p className=" paragarph">your privacy is our concern, please
                          enter your credentials </p>
      
      </div>
      <div className=" page page-right">
     
      <form onSubmit={formik.handleSubmit}>
          <br/><br/><br/>
       <p className=" name-secondpage"><label htmlFor="email">User</label></p>
       <p><input
        className="input-right"
         id="name"
         name="user"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.user}
       /></p>
       <p className=" name-secondpage"><label htmlFor="email">Passward</label></p>
       <p><input
        className="input-right"
         id="name"
         name="passsward"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.passsward}
       /></p>
       <p className=" name-secondpage"><label htmlFor="email">ConfirmPassward</label></p>
       <p><input
        className="input-right"
         id="name"
         name="onfirmPassward"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.onfirmPassward}
       /></p>
      <p><button type="submit" className="submit-right">Submit</button> <button className="submit-right" onClick={Submit}>next</button></p>
      </form>
       
      </div>
      </div>
    )
}

            

export default ThirdPage
