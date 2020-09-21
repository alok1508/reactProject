import React,{useState} from 'react';

const Contact = () => {
  const [data,setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    message:"",
  });
  const InputEvent = (event) => {
    const {name,value} = event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name] : value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}.
      My mobile number is ${data.phone}.
      My Email is ${data.email}.
      My message is ${data.message}.`
      );
  } ;
  return(
    <>
    <div className="my-5">
        <h1 className="text-center">Contact US</h1>
    </div>
    <div className="conatiner contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
    
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
    FullName
    </label>
    <input 
    type="text" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter you name"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label>
    <input 
    type="number" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="mobile number"

    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    type="email"
     className="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     name="email"
     value={data.email}
     onChange={InputEvent}
     placeholder="aloksinha1998@gmail.com"

     />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1">Message</label>
    <textarea 
    rows="3"
    name="message"
    value={data.message}
    onChange={InputEvent}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-outline-primary">Submit Form</button>
</form>

    </div> 

    </div>

    </div>
    </>
  )
}

export default Contact;