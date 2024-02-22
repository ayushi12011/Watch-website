import React, {useState} from 'react'
import axios from 'axios';

import{ toast } from 'react-toastify';


function Contact() {

  const [formvalue,setFormvalue] = useState({
    id:"",
    message:"",
    name:"",
    email:"",

  });

  const onchanghandel=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const validation=()=>{
    var result=true;
    if(formvalue.message=="" || formvalue.message==null)
    {
      result=false;
      toast.error('Message field is required',
      {
        position:toast.POSITION.BOTTOM_RIGHT,
    });
      return false;
    }
    if(formvalue.name=="" || formvalue.name==null)
    {
      result=false;
      toast.error('Name field is required',
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
    return result;
  }

  const onsubmit=async(e)=>{
    e.preventDefault();
    if(validation())
    {
      const res = await axios.post(`http://localhost:3000/contact`,formvalue);
      if(res.status==201)
      {
        setFormvalue({...formvalue,message:"",name:"",email:""});
        alert('insert success');
        return false;
      }
    }
  }

  return (
    <div>
  <main>
    {/*? Hero Area Start*/}
    <div className="slider-area ">
      <div className="single-slider slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <h2>Contacts</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*? Hero Area End*/}
    {/* ================ contact section start ================= */}
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form className="form-contact contact_form" action="" method="post">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100" name="message" onChange={onchanghandel} value={formvalue.message} cols={30} rows={9} placeholder=" Enter Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid" name="name" onChange={onchanghandel} value={formvalue.name} type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid" name="email" onChange={onchanghandel} value={formvalue.email} type="email" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm boxed-btn"  onClick={onsubmit}> Send </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-home" /></span>
              <div className="media-body">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-tablet" /></span>
              <div className="media-body">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-email" /></span>
              <div className="media-body">
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ contact section end ================= */}
  </main>
</div>

  )
}

export default Contact