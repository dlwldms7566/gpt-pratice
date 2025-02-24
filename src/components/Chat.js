import React, { useState, useEffect, useRef} from "react";
import styles from "../styles/Chat.module.css";
import { LuSquarePen } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { LiaLightbulb } from "react-icons/lia";
import { PiWaveformBold } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa6";
import { AiOutlineCode } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";
import { RiGraduationCapLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Chat() {
    
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isChatting, setIsChatting] = useState(false);
    const inputRef = useRef(null);
    const chatContainerRef = useRef(null);
    const navigate = useNavigate();

    const token = useRef(null); 
    const mounted = useRef(true);

    useEffect(() => {
  mounted.current = true;
  return () => {
    mounted.current = false;
  };
}, []);

useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
        token.current = storedToken;
    }
}, []);

   useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
   }, []);

   useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
   }, [messages]);
  
   const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    setIsChatting(true);
    
    const newMessage = { role: 'user', content: input.trim() };
    setInput('');  // 입력 필드를 초기화
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
        if (!token.current) {
            throw new Error('인증 토큰이 없습니다.');
        }

        const response = await fetch('http://172.16.41.240:8080/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.current}`
            },
            body: JSON.stringify({ requestMessage: newMessage.content })
        });

        if (!mounted.current) return;

        if (!response.ok) {
            throw new Error('서버 응답이 올바르지 않습니다.');
        }

        const result = await response.json();
        console.log(result)
        if (!mounted.current) return;

        if (result.success || result.responseMessage) {  
            setMessages(prev => [...prev, { 
                role: 'ai', 
                content: result.responseMessage  
            }]);
        } else {
            throw new Error('응답 메시지를 받지 못했습니다.');
        }
    } catch (error) {
        console.error('Error:', error);
        if (mounted.current) {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: `오류가 발생했습니다: ${error.message}`
            }]);
        }
    } finally {
        if (mounted.current) {
            setIsLoading(false);
        }
    }
};

  return (
    <div>
      <button  className={styles.ChatIcon}><LuSquarePen /></button >
      <button className={styles.btn}>
        ChatGPT <IoIosArrowDown className={styles.btnIcon} />
      </button>

      <button  className={styles.LogIn} onClick={() => navigate("/login")}>로그인</button >
      <button  className={styles.Join}onClick={() => navigate("/signup")}>회원 가입</button >

     {!isChatting && (
                <>
      <h1 className={styles.txt}>무엇을 도와드릴까요?</h1>
      </>
            )}

     {isChatting && (
      <div className={styles.ChatContainer} ref={chatContainerRef}>
                {messages.map((message, index) => (
                <div key={index} className={`${styles.message} ${styles[message.role]}`}>
                    <p>{message.content}</p>
                </div>
                 ))}
     </div>
      )}
      <div className={`${styles.ChatInputContainer} ${isChatting ? styles.fixedBottom : ""}`}>
        <input
          type="text"
          className={styles.ChatInput}
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ChatGPT에게 메시지를 쓰세요"
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button  className={styles.attach}><FaPlus className={styles.attachIcon}/>첨부</button >
        <button  className={styles.search}><TbWorld className={styles.searchIcon2}/>검색</button >
        <button  className={styles.reason}><LiaLightbulb className={styles.reasonIcon}/>이성</button >
        {input ? (
        <button className={styles.SendButton} onClick={handleSendMessage}>
          <FaArrowUp />
        </button>
      ) : (
        <button className={styles.VoiceButton}>
          <PiWaveformBold className={styles.voiceIcon}/> Voice
        </button>
      )}
      </div>

      {!isChatting && (
                <>
      <div className={styles.ChatMenu}>
        <button><AiOutlineCode className={styles.codeIcon}/>코딩</button >
        <button><HiOutlineDocumentText className={styles.textIcon}/>텍스트 요약</button >
        <button><HiOutlineEye className={styles.imageIcon}/>이미지 분석</button >
        <button><LiaLightbulb className={styles.planIcon}/>계획 짜기</button >
        <button><RiGraduationCapLine className={styles.adviceIcon}/>조언 구하기</button >
        <button>더 보기</button >
      </div>
      <p className={styles.refer}>
        ChatGPT에 메시지를 보냄으로써, 당사 
        <a href="https://openai.com/policies/terms-of-use/" target="_blank" rel="noreferrer">
        <span>이용약관</span>
        </a>
        에 동의하고 
        <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noreferrer">
        <span>개인정보 보호 정책</span>
        </a>
         및 이의 
        <a href="https://openai.com/ko-KR/policies/kr-privacy-policy-addendum/" target="_blank" rel="noreferrer">
        <span>한국 부록</span>
        </a>
         을 읽은 것으로 간주합니다.
         </p>
      </>
            )}
    </div>
  );
}

export default Chat;
