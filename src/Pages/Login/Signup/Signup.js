import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    Container,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Signup = () => {
    const {error, getUserPassword, getUserEmail , handleSubmitForm, singInUsingGoogle, getUserName} = useAuth();

    return (
        <div>
           
           <Container className="d-flex align-items-center justify-content-center my-5">

            <Form className="border p-5" onSubmit={handleSubmitForm}>
                <h3>Welcome to +ME care!</h3>
                <h6>Please SignUp!</h6>
                <hr />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" ><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getUserName}
                        required placeholder="Enter Your Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"

                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" required><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getUserEmail} required type="email"
                        placeholder="Enter Your Email"
                        aria-label="UserEmail"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getUserPassword} required type="password"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <div className="text-center">
                 <Button type="submit" className=" ms-0 btn btn-primary login-btn btn-block w-100" variant="">Log-In</Button>
                </div>
                <div className="or-seperator"><i>or</i></div>
                <div className="text-center social-btn ">
        <button onClick={singInUsingGoogle} className=" btn btn-danger w-100"><i className="fa fa-google"></i>&nbsp; Google</button>
			
        </div>
                <div className="text-danger">
                    <p>{error}</p>
                </div>
                <p className="mt-2">
                    <NavLink className="text-decoration-none" to="/login">
                        Already have an Account? Please Login!
                    </NavLink>
                </p>
            </Form>
        </Container>

        </div>
    );
};

export default Signup;