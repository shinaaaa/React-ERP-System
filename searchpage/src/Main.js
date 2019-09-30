import React, { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>

                <form>
                    <input placeholder="사원 번호"/>
                    <input placeholder="비밀 번호"/>
                    <button></button>
                </form>
            </div>
        );
    }
}

export default Main;