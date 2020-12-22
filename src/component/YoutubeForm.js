import { Formik,Form, Field,ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextError from './TextError'

export default function YoutubeForm() {
    const initialValues ={
            name:'',
            email:'',
            channel:'',
            comments:'',
            address:''
    }
    const onSubmit = values =>{
        console.log("form values",values)
    }



    const validationSchema = Yup.object({
        name:Yup.string().required("Name is required!!!"),
        email:Yup.string().email('Invalid Email Format').required('Email is required!!!'),
        channel:Yup.string().required("Channnel Name is required!!!"),
        address:Yup.string().required('Address can\'t be blank!!!')
    })



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                 
            <Form>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field
                type="text"
                 id="name" 
                 name="name"/>
                 <ErrorMessage name="name" component={TextError}/>
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field
                type="text" 
                id="email"
                name="email"
                />
                 <ErrorMessage name="email"/>
                </div>
                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field
                type="text"
                 id="channel" 
                 name="channel" 
                 />
                <ErrorMessage name="channel">
                    {errorMsg => <div className='error'>{errorMsg}</div>}
                </ErrorMessage>
                </div>
                <div className="form-control">
                <label htmlFor="comments">Comments</label>
                <Field
                as="textarea"
                 id="comments" 
                 name="comments" 
                 />
                </div>
                <div className="form-control">
                <label htmlFor="address">Address</label>
                <Field name="address">
                    {
                        (props) =>{
                            const {field,form,meta} = props
                            return( 
                            <div>
                            <input type="text" name="address" id="address" {...field}/>
                            {meta.touched && meta.errors ? <div>{meta.error}</div>:null}
                            </div>
                            )
                        }
                    }
                </Field>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
