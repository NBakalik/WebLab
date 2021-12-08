import {Form, Formik, useField} from "formik";
import * as Yup from "yup";

import {
    Wrapper,
    Label,
    Text,
    Input,
    ItemWrapper,
    ErrorText, ContinueButton
} from "./SighUp.styles";
import {useState} from "react";
import {Login} from "../Login/Login";

export function SighUp(props) {
    const [view, toggle] = useState(false);

    function toggleView() {
        toggle(!view);
    }

    const CustomTextInput = ({label, ...props}) => {
        const [field, meta] = useField(props);

        return (
            <>
                <ItemWrapper>
                    <Label htmlFor={props.name}>{label}</Label>
                    <Input {...field} {...props}/>
                    {meta.touched && meta.error ? <ErrorText>{meta.error}</ErrorText> : null}
                </ItemWrapper>
            </>
        )
    }
    if (!view) {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    phone: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('First name is required field'),
                    email: Yup.string()
                        .matches('\\S+@\\S+\\.\\S+', 'Please input valid email address')
                        .required('Email is required field'),
                    phone: Yup.string()
                        .matches('\\d{10}', 'Please enter valid phone number')
                        .max(10, 'Please enter valid phone number')
                        .required('Phone number is required field'),
                    password: Yup.string()
                        .min(6, 'Must be at least 6 characters')
                        .required('Password is required field'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    toggleView();
                    localStorage.setItem('email', values.email)
                    localStorage.setItem('password', values.password)
                    setSubmitting(false);
                }}>
                <Form>
                    <Wrapper>
                        <Text>Register to new account</Text>
                        <CustomTextInput id='firstName' label='First Name' name='firstName' type='text' placeholder='First name'/>
                        <CustomTextInput id='email' label='Email' name='email' type='text' placeholder='Email'/>
                        <CustomTextInput id='firstName' label='Phone number' name='phone' type='text' placeholder='Phone number'/>
                        <CustomTextInput id='firstName' label='Password' name='password' type='text' placeholder='Password'/>
                        <ContinueButton id='firstName' type='submit'>Sigh me up</ContinueButton>
                    </Wrapper>
                </Form>
            </Formik>
        );
    } else {
        return (
            <Login func={props.func}/>
        )
    }
}
