import React from 'react'
import './SecondPage.css';
import { useFormik } from 'formik';
import { useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function SecondPage(props) {
   const params = useParams();
   const history = useHistory();

    const formik = useFormik({
        initialValues: {
          college: '',from:'',to:'',course:'',domain:'',
        },
        onSubmit: values => {
            alert(values.domain);
         
        },
      });
    
      const Submit = (props) => {
        history.push(`/ThirdPage/${params.name}`);
      } 
    return (
        <div className="SecondPage">
             <div className=" page page-left">
      <p className="heading">Hi {params.name}</p>
      <p className=" paragarph">please enter your college details </p>
     
      <div className=" page page-right">
      
      <form onSubmit={formik.handleSubmit}>
          <br/><br/><br/>
       <p className=" name-secondpage"><label htmlFor="email">Name of institution</label></p>
       <p><input
        className="input-right"
         id="name"
         name="college"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.college}
       /></p>

<p className=" name-right"><label htmlFor="email">Batch</label></p>
       <p><input
        className=" space input-right"
         id="name"
         name="from"
         type="number"
         min="1990"
         max="2022"
         value="2021"
         onChange={formik.handleChange}
         value={formik.values.from}
       />


       to


       <input
        className=" space input-right"
         id="name"
         name="to"
         type="number"
         min="1990"
         max="2022"
         value="2021"
         onChange={formik.handleChange}
         value={formik.values.to}
       />
       </p>

<p className=" name-right"><label htmlFor="email">Course</label></p>
       <p><input
        className="input-right"
         id="name"
         name="course"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.course}
       /></p>

<p className=" name-right"><label htmlFor="email">Domain</label></p>
       <p><input
        className="input-right"
         id="name"
         name="domain"
         type="name"
         onChange={formik.handleChange}
         value={formik.values.domain}
       /></p>
 
 <p><button type="submit" className="submit-right">Submit</button> <button className="submit-right" onClick={Submit}>next</button></p>

     </form>
     
     </div>
      </div>
    </div>
       
    )
}

export default SecondPage;
