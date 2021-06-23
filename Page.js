import React from 'react';
import { useFormik } from 'formik';
import { BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Page.css';


function Page() {
  const history = useHistory();
  
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: values => {
      alert(values.name);
      history.push(`/SecondPage/${values.name}`);
    },
  });

  return (
   <>
      <div className=" page page-left">
      <p className="heading">Hi there!</p>
      <p className=" paragarph">please enter your <b>name</b></p>
      <img src="" alt=""/>
      </div>
      <div className=" page page-right">
      <p className=" heading-right">Welcome</p>
      <p className=" paragraph-right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>

      <form onSubmit={formik.handleSubmit}>
       <p className=" name-right"><label htmlFor="email">Enter your name</label></p>
       <p><input
        className=" input-right"
         id="name"
         name="name"
         type="name"
         onChange={formik.handleChange}
         value={formik.values.name}
       /></p>
       
     <p ><button type="submit" className="submit-right" ><h5>Next</h5> </button></p>
       
     </form>
     <br/> <br/> <br/>
     <hr/>
     <p className="sign-right">or sign up using</p>
     <img className="img1" src="data:image/png;base64,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" alt=""/>
     <img className="img1" src="data:image/jpeg;base64,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" alt=""/>
     <img className="img1" src="data:image/png;base64,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" alt=""/>
     <img className="img1" src="data:image/png;base64,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" alt=""/>
     
      
    </div>
   </>
  );
}

export default Page;