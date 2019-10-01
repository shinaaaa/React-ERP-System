import React, { Component } from "react";
import './App.css';

class Manager extends Component {
    render() {
        return (
            <div className="content">
                <h3>윤영욱 팀장님 환영합니다.</h3>
                <input type="text" id="" placeholder="사원 번호"/>
                <button>조회</button>
                <table>
                <tr>
                    <th>부서</th>
                    <th>사원 번호</th>
                    <th>이름</th>
                    <th>근무 시간</th>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>111</td>
                    <td>윤영욱</td>
                    <td>35:11</td>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>112</td>
                    <td>최재성</td>
                    <td>34:27</td>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>113</td>
                    <td>김신</td>
                    <td>32:10</td>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>114</td>
                    <td>신영찬</td>
                    <td>29:09</td>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>115</td>
                    <td>김민재</td>
                    <td>27:26</td>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>116</td>
                    <td>김도림</td>
                    <td>12:09</td>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>117</td>
                    <td>유관순</td>
                    <td>30:33</td>
                </tr>
                <tr>
                    <td>IT1</td>
                    <td>118</td>
                    <td>홍길동</td>
                    <td>30:16</td>
                </tr>
                </table>
                <h3>09/30(월)~10/02(수) IT1팀의 조회 내역입니다.</h3>
            </div>
        );
    }
}

export default Manager;