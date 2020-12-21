import { useFormik } from 'formik'
import React from 'react'

export default function YoutubeForm() {
    const initialValues ={
            name:'',
            email:'',
            channel:''
    }
    const onSubmit = values =>{
        console.log("form values",values)
    }

    const validate = values =>{
            let errors = {}
            if(!values.name){
                errors.name = "Name is required";
            }
            if(!values.email){
                errors.email = "Email is requird";
            }
            if(!values.channel){
                errors.channel = "Channel Name is required";
            }
            return errors
    }


     const formik =    useFormik({
         initialValues,
         onSubmit,
         validate
     })
     console.log("errors",formik.touched);
    return (
        <div>
                  <h1>Formik Introduction</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text"
                 id="name" 
                 name="name"
                onChange={formik.handleChange} 
                value={formik.values.name}
                onBlur={formik.handleBlur}/>
                {formik.touched.name && formik.errors.name?<div className='error'>{formik.errors.name}</div>:null}
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text" 
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}
                </div>
                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <input type="text"
                 id="channel" 
                 name="channel" 
                 onChange={formik.handleChange} 
                 value={formik.values.channel}
                 onBlur={formik.handleBlur}
                 />
                {formik.touched.channel && formik.errors.channel?<div className='error'>{formik.errors.channel}</div>:null}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
