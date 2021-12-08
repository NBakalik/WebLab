import {Form, Formik, useField} from "formik";
import * as Yup from "yup";
import Tick from "../../images/tickk.jpg"

import {
    Wrapper,
    Label,
    CheckoutText,
    Input,
    NameWrapper,
    ItemWrapper,
    ButtonWrapper,
    ErrorText, BackButton, ContinueButton, Image
} from "./Checkout.styles";
import {useState} from "react";
import {Link} from "react-router-dom";

export function Checkout({func}) {
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
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('First name is required field'),
                    lastName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Last name is required field'),
                    email: Yup.string()
                        .matches('\\S+@\\S+\\.\\S+', 'Please input valid email address')
                        .required('Email is required field'),
                    phone: Yup.string()
                        .matches('\\d{10}', 'Please enter valid phone number')
                        .max(10, 'Please enter valid phone number')
                        .required('Phone number is required field'),
                    address: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Address is required field'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    toggleView();
                    setSubmitting(false);
                }}>
                <Form>
                    <Wrapper>
                        <CheckoutText>Checkout</CheckoutText>
                        <NameWrapper>
                            <CustomTextInput label='First Name' name='firstName' type='text' placeholder='First name'
                                             style={{width: "400px"}}/>
                            <CustomTextInput label='Last Name' name='lastName' type='text' placeholder='Last Name'
                                             style={{width: "400px"}}/>
                        </NameWrapper>
                        <CustomTextInput label='Email' name='email' type='text' placeholder='Email'/>
                        <CustomTextInput label='Phone number' name='phone' type='text' placeholder='Phone number'/>
                        <CustomTextInput label='Address' name='address' type='text' placeholder='Address'/>
                        <ButtonWrapper>
                            <BackButton onClick={func}>Go back</BackButton>
                            <ContinueButton type='submit'>Continue</ContinueButton>
                        </ButtonWrapper>
                    </Wrapper>
                </Form>
            </Formik>
        );
    } else {
        return (
            <Wrapper style={{padding: '40px'}}>
                <CheckoutText>Success</CheckoutText>
                <Image src={Tick}/>
                <ContinueButton><Link to="/catalog" style={{textDecoration:"none", color:"white"}}>Go back</Link></ContinueButton>
            </Wrapper>
        )
    }
}
