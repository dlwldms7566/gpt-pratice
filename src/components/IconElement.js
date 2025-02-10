import React from 'react';
import style from '../styles/IconElement.module.css';

export default function IconElement({ src, alt }) {
    return (
        <div className={style.icon_container}>
            <div
                className={style.icon_mask}
                style={{
                    backgroundImage: `url(${src})`, // 이미지 URL을 배경 이미지로 설정
              }}
            ></div>
        </div>
    );
}
