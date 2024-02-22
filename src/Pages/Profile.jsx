import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Profile() {

    useEffect(() => {
        fetchdata();
    },[]);

    const [data, setdata] =useState({});

    const fetchdata = async () => {
        const id = localStorage.getItem('userid');
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setdata(res.data);
    }

    const [formvalue,setFormValue]=useState({
        id:"",
        name:"",
        contact:"",
        address:"",
        email:"",
        password:""
    });

    const [editid,setEditid] = useState("");
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormValue(res.data);
        setEditid(res.data.id);
    }

    const onchanghandle=(e)=>{
        setFormValue({...formvalue,[e.target.name]:e.target.value});
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


    const onsubmit = async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res = await axios.patch(`http://localhost:3000/user/${editid}`,formvalue);
            console.log(res);
            if(res.status==200)
            {
                setFormValue({...formvalue,name:"", contact:"",  address:"", email:"", password:"" });
                toast.success('Update success');
                fetchdata();
            }
        }
    }


  return (
    <div>        
            <div className="watch-area p-3">
                <div className="container border border-1 ">
                    <h1 className='text-center mt-5 text-bold fa-4x'>Profile</h1>
                    <hr />
                    <div className="row align-items-center justify-content-between m-5">
                        <div className="col-lg-6 col-md-6 col-sm-10">
                            <div className="choice-watch-img mb-40">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="watch-details mb-30">
                                <h3>ID : {data.id}</h3>
                            </div>
                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Name :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.name}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Email :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.email}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Password :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.password}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="card border-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h6 className="mb-0">Address :</h6>
                                    </div>
                                    <div className="col-sm-8">
                                        <h6 className="text-muted mb-0">{data.address}</h6>
                                    </div>
                                </div>
                                <hr />

                                <div className="card border-0">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Contact :</h6>
                                        </div>
                                        <div className="col-sm-8">
                                            <h6 className="text-muted mb-0">{data.contact}</h6>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                {/* <div class="modal-dialog modal-dialog-scrollable"> */}
                                <div className="btn-box">
                                    <a href="javascript:void(0)" onClick={()=>editdata(data.id)} className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Edit Profile</a>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>   


            

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
                                        <button type="submit" onClick={onsubmit} className="button button-contactForm boxed-btn">Save</button>
                                    </div>
                                </form>
                                {/* <Link className='text-danger' to="/sign_in">If you already have an account!! Click here to login</Link> */}
                            </div>
                        </div>
                    </div>
                </section> 





             

</div>
    )
}

export default Profile
