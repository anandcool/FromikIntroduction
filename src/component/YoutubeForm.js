import { useFormik } from 'formik'
import React from 'react'

export default function YoutubeForm() {
    console.log("hi");
     const formik =    useFormik({
         initialValues:{
             name:'',
             email:'',
             channel:''
         }
     })
    console.log(formik.values)
    return (
        <div>
                  <h1>Formik Introduction</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
                <button>Submit</button>
            </form>
        </div>
    )
}