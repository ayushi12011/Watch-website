import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';


function Edit() {

  const redirect = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    setFormvalue(res.data);
  }

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });

  const onchanghandle = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  }
  const validation = () => {
    var result = true;
    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      toast.error('Name field is required')
      return false;
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error('email field is required')
      return false;
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error('password field is required')
      return false;
    }
    if (formvalue.mobile == "" || formvalue.mobile == null) {
      result = false;
      toast.error('mobile field is required')
      return false;
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
      if (res.status == 200) {
        setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
        toast.success('update success');
        return redirect('/manage_user');
      }
    }
  }

  return (
    <div>
     <div className="modal" id="myModal">
                 <div className="modal-dialog modal xl">
                     <div className="modal-container">
                         <div className="row">
                             <div className="col-12">
                                 <h2 className="contact-title">Register Youself</h2>
                             </div>
                             <div className="col-lg-12">
                                 <form className="form-contact contact_form" action="" method="post" name="myform" onsubmit="return validation">
                                     <div className="row">
                                         <div className="col-12">
                                             <div className="form-group">
                                                 <input className="form-control" type="text" name="name" onChange={onchanghandle} value={formvalue.name} placeholder="Enter your name" />
                                                 <div id="name-msg"></div>
                                             </div>
                                         </div>
                                         <div className="col-12">
                                             <div className="form-group">
                                                 <input className="form-control" type="number" name="contact" onChange={onchanghandle} value={formvalue.contact} placeholder="Enter Contact" />
                                                 <div id="contact-msg"></div>
                                             </div>
                                         </div>
                                         <div className="col-12">
                                             <div className="form-group">
                                                 <input className="form-control" type="text" name="address" onChange={onchanghandle} value={formvalue.address} placeholder="Enter Address" />
                                                 <div id="address-msg"></div>
                                             </div>
                                         </div>
                                         <div className="col-12">
                                             <div className="form-group">
                                                 <input className="form-control valid" type="email" name="email" onChange={onchanghandle} value={formvalue.email} placeholder="Enter Email" />
                                                 <div id="email-msg"></div>
                                             </div>
                                         </div>
                                         <div className="col-12">
                                             <div className="form-group">
                                                 <input className="form-control" type="password" name="password" onChange={onchanghandle} value={formvalue.password} placeholder="Enter Password" />
                                                 <div id="password-msg"></div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="form-group mt-3">
                                         <button type="submit" onClick={onsubmit} className="button button-contactForm boxed-btn">Save</button>
                                     </div>
                                 </form>
                                 {/* <Link className='text-danger' to="/sign_in">If you already have an account!! Click here to login</Link> */}
                              </div>
                         </div>
                     </div>
                 </div>
              </div>
    </div>
  )
}

export default Edit