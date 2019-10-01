import React, { Component } from "react";
import './App.css';

class Search extends Component {
    render() {
        return (
            <div className="content">
                <h3>홍길동님 환영합니다.</h3>
                <table>
                <tr>
                    <th>사원 번호</th>
                    <th>일시</th>
                    <th>시간</th>
                    <th>분류</th>
                </tr>
                <tr>
                    <td>118</td>
                    <td>09/30(월)</td>
                    <td>08:42</td>
                    <td>출근</td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>09/30(월)</td>
                    <td>18:05</td>
                    <td>퇴근</td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>10/01(화)</td>
                    <td>08:55</td>
                    <td>출근</td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>10/01(화)</td>
                    <td>11:49</td>
                    <td>외근</td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>10/01(화)</td>
                    <td>14:33</td>
                    <td>복귀</td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>10/01(화)</td>
                    <td>10:20</td>
                    <td>퇴근</td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>10/02(수)</td>
                    <td>07:33</td>
                    <td>출근</td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>10/02(수)</td>
                    <td>18:01</td>
                    <td>퇴근</td>
                </tr>
                </table>
                <h3>이번 주 총 근무시간은 30시간 16분 입니다.</h3>
            </div>
        );
    }
}

export default Search;