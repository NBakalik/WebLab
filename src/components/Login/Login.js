import {
    Wrapper,
    Text,
    Input, ContinueButton
} from "./Login.styles";

export function Login(props) {
    function login() {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        if (localStorage.getItem('email') == email.value && localStorage.getItem('password') == password.value) {
            localStorage.setItem('isLogged', 1);
            props.func();
        } else {
            alert('Wrong email or password')
        }
    }

    return (
        <Wrapper>
            <Text>Login</Text>
            <Input id='email' type='text' placeholder='Email'/>
            <Input id='password' type='text' placeholder='Password'/>
            <ContinueButton onClick={login}>Login me</ContinueButton>
        </Wrapper>
    )

}
