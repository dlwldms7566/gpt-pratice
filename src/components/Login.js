import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUp.module.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const requestData = { 
                email: formData.email, 
                password: formData.password 
            };
            const response = await fetch('http://172.16.41.240:8080/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            const responseData = await response.json();
            console.log(responseData)
            if (response.ok) {
                localStorage.setItem('token', responseData.data.token);
                // 상태 초기화
                setFormData({ email: "", password: "" });
                setIsLoading(false);

                // 성공 메시지 표시
                alert('로그인 성공!');

                // 직접 페이지 이동
                window.location.href = '/chat';
            } else {
                alert(`로그인 실패: ${responseData.message || '이메일 또는 비밀번호가 올바르지 않습니다.'}`);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('로그인 에러:', error);
            alert('로그인 처리 중 오류가 발생했습니다.');
            setIsLoading(false);
        }
    };
 
return (
    <div className={styles.container}>
        <div className={styles.signupBox}>
            <h2 className={styles.title}>다시 오신 걸 환영합니다</h2>
            <form onSubmit={handleSubmit} className={styles.form}>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="이메일 주소"
                    />
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="비밀번호"
                    />
                </div>

                <button type="submit" className={styles.button}>
                    로그인
                </button>
            </form>
            <p className={styles.loginText}>
                계정이 없으신가요? {" "}
                <span className={styles.loginLink} onClick={() => navigate("/SignUp")}>
                    회원 가입
                </span>
            </p>
            <div className={styles.bottom}>
                <a className={styles.loginLink} href="https://openai.com/policies/terms-of-use/">
                    <span>이용약관     </span>
                </a>
                |
                <a className={styles.loginLink} href="https://openai.com/policies/privacy-policy/">
                    <span>     개인정보 보호 정책</span>
                </a>
            </div>
        </div>
    </div>
);
}

export default Login;
