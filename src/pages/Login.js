// Login.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess, loginFailure, logout} from '../redux/actions';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = () => {
        // 여기에서 실제 로그인 로직을 구현하고 성공 시 사용자 정보를 가져옵니다.
        // 여기서는 간단히 username과 password를 체크하여 로그인 성공 또는 실패를 시뮬레이션합니다.

        if (username === 'user' && password === 'password') {
            const user = { username: 'user', email: 'user@example.com' };
            dispatch(loginSuccess(user));
        } else {
            dispatch(loginFailure());
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>로그인 되었습니다.</p>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="아이디"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>로그인</button>
                </div>
            )}
        </div>
    );
};

export default Login;
