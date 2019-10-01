import React, { Component } from "react";
import './App.css';

class Login extends Component {
    render() {
        return (
            <div className="content">
                <h1>Login</h1>
                {/* <form method="post" action="/#/search"> */}
                <form action="/#/search">
                    ID<input type="text" name="id" placeholder="사원 번호"/>
                    PW<input type="password" name="pw" placeholder="비밀번호"/>
                    {/* <button type="submit">입력</button> */}
                    <button>입력</button>
                </form>
            </div>
        );
    }
}

export default Login;