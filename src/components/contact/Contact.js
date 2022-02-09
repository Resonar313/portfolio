import React, { useContext, useRef, useState } from 'react'
import "./contact.scss"
import phone from "../../img/phone.png"
import mail from "../../img/mail.png"
import address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

function Contact() {

  const formRef = useRef()
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const actionSubmit = (e)=> {
    e.preventDefault() // submit 버튼 눌렀을때 페이지 새로고침되는것을 막음
    emailjs.sendForm(
      'service_fcxtb6w',
      'template_7l07o3x',
      formRef.current,
      'user_5Jput2JmP8qk764aNQirZ'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      }); 
  }

  return (
    <div className='c'>
      <div className="c-back">

      </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">연락처</h1>
          <div className="c-info">
            <div className="c-info-i">
              <img src={phone} alt="" className="c-icon" />
              010 2972 7938
            </div>
            <div className="c-info-i">
              <img src={mail} alt="" className="c-icon" />
              dlxogh7938@naver.com
            </div>
            <div className="c-info-i">
              <img src={address} alt="" className="c-icon" />
              서울특별시 노원구
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <b>이메일 발송 서비스입니다.</b> 
            <p>EmailJS 서비스를 활용해 구현하였습니다. 많은 이용 부탁드립니다.</p>
            
          </div>
          <form ref={formRef} onSubmit={actionSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="이름" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="제목" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="이메일" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="10" placeholder="내용" name="message"></textarea>
            <button>보내기</button>
            { done && "메일 감사합니다."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact