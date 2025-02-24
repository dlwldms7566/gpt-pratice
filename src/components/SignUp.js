import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUp.module.css";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
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
                password: formData.password,
                name: formData.name
            };
            const response = await fetch('http://172.16.41.240:8080/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            console.log(requestData)
            const responseData = await response.json();
            console.log(responseData)
            if (response.ok) {
                alert('회원가입 성공! 로그인해주세요.');
                navigate('/signin');
            } else {
                alert(`회원가입 실패: ${responseData.message || '알 수 없는 오류가 발생했습니다.'}`);
            }
        } catch (error) {
            console.error('회원가입 에러:', error);
            alert('회원가입 처리 중 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.signupBox}>
                <h2 className={styles.title}>계정 만들기</h2>
                <form onSubmit={handleSubmit} className={styles.form}>

                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="이름"
                        />
                    </div>

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
                        회원가입
                    </button>
                </form>
                <p className={styles.loginText}>
                    이미 계정이 있으신가요?{" "}
                    <span className={styles.loginLink} onClick={() => navigate("/login")}>
                        로그인
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

export default Signup;
