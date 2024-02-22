import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

function Sign_up() {

    const [formvalue,setFormValue]=useState({
        id:"",
        name:"",
        contact:"",
        address:"",
        email:"",
        password:""
    });

    const onchanghandle=(e)=>{
        setFormValue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation=()=>{
        var result=true;
        var name=document.forms["myform"]["name"].value
        if(formvalue.name=="" || formvalue.name==null)
        {
            result=false;
            toast.error('Name field is required',
            {
                position:toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if(formvalue.contact=="" || formvalue.contact==null)
        {
            result=false;
            toast.error('Conatct field is required',
            {
                position:toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if(formvalue.address=="" || formvalue.address==null)
        {
            result=false;
            toast.error('Address field is required',
            {
                position:toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if(formvalue.email=="" || formvalue.email==null)
        {
            result=false;
            toast.error('Email field is required',
            {
                position:toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if(formvalue.password=="" || formvalue.password==null)
        {
            result=false;
            toast.error('Password field is required',
            {
                position:toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        return result;
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res = await axios.post(`http://localhost:3000/user`,formvalue);
            console.log(res);
            if(res.status==201)
            {
                setFormValue({...formvalue, name:"", contact:"", address:"", email:"", password:""});
                toast.success('SignUp success',
                {
                    position:toast.POSITION.BOTTOM_RIGHT,
                });
                return false;
            }
        }
    }

    return (
        <div>
            <main>
                {/* { Hero Area End} */}
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Sign Up</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* { Hero Area End} */}
                {/* ================ contact section start ================= */}
                <section className="contact-section">
                    <div className="container">
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
                                        <button type="submit" onClick={onsubmit} className="button button-contactForm boxed-btn">Sign Up</button>
                                    </div>
                                </form>
                                <Link className='text-danger' to="/sign_in">If you already have an account!! Click here to login</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ================ contact section end ================= */}
            </main>
        </div>
    )
}

export default Sign_up