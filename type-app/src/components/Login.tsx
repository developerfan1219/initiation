import * as React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { Context } from "../context/UserContext";
import { authAxios } from "../utils"
import { authURL } from "../constants"

interface reqAuthData {
    username : string,
    password: string
}

function LoginForm(props: any) {
    const userContext: any = React.useContext(Context);
    const {usertoken, setUser} = userContext;
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [logged, setLogState] = React.useState(0);

    React.useEffect(() => {
        if (usertoken != 'Guest')
        {
            setLogState(1);
        }
       
    });

    const submitUserData = () => {
        const data: reqAuthData = {
            username: username, 
            password: password
        }
        
        authAxios
            .post(authURL, data)
            .then(res => {
                setUser(res.data.token);
            })
            .catch(err => {
                if (err.response.status === 404) {
                    console.log(err);
                } else {
                    console.log(err);
                }
            });
        
    }
    if(logged == 1){
        return (<Redirect to='/dashboard' />);
    }
    
    return (
        <Form>
        <FormGroup>
            <Label for="username">UserName</Label>
            <Input type="text" name="username" id="username" value={username} placeholder="" onChange={(e) => setUserName(e.target.value)} />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" value={password} placeholder="" onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button onClick={() => submitUserData()}>Submit</Button>
        </Form>
    );
}

export default LoginForm;