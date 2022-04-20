import React, { useState } from "react";
import  "../CSS/login.css"
import logo from "../images/ARSH.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InputAdornment, IconButton } from '@mui/material';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
      };

    const [textInputUser, setTextInputUser] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');

    const navigate = useNavigate();
    function handleClick() {
        if (!textInputUser || !textInputPassword){
            alert("Missing user or password")
            return;
        }
        navigate("/videos");
      }

    return (
        <div className="Wrapper">
            <img src={logo} alt="Logo" />
            <h1>AMAZON RSH</h1>
            <TextField 
                required id="user" 
                className="Text" 
                label="User" 
                onChange={
                    (value) => setTextInputUser(value)
                }
            />
            <TextField 
                required id="password" 
                className="Text" 
                label="Password" 
                type={showPassword ? "text" : "password"} 
                onChange={
                    (value) => setTextInputPassword(value)
                }
                InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton color="primary">
                            <VisibilityIcon
                                aria-label='toggle password visibility'
                                onClick={togglePassword}
                            >
                            </VisibilityIcon>
                        </IconButton>
                      </InputAdornment>
                    ),
                }}
            />
            <div className="Buttons">
                <Button variant="text" className="Button">Cancel</Button>
                <Button variant="contained" className="Button" onClick={handleClick}>Next</Button>
            </div>
        </div>
    )
}

export default Login;

