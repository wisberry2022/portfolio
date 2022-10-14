import './First.scss';
import { useState, useEffect } from 'react';

const First = () => {
  const letter = 'Hello_World!';
  const [text, setText] = useState("");
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    const intervalText = setInterval(() => {
      setText(text + letter[cnt]);
      setCnt(cnt + 1);
    }, 300)
    if (cnt === letter.length) {
      clearInterval(intervalText);
      setTimeout(() => {
        setText('');
        setCnt(0);
      }, 1500)
    }
    return () => {
      clearInterval(intervalText);
    }
  }, [cnt, text])
  return (
    <>
      <div className="section first bg_set">
        <div className="top">
          <div className="float_box">
            <p>
              예비 프론트엔드 개발자 왕인서의 <br />
              WEB PORTFOLIO
            </p>
          </div>
          <div className="top_title">
            <div className="main_title">
              <div>
                <p className="first_phase"><strong>Simple</strong> is the Best <br /></p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_title">
            <div className="main_title">
              <p className="second_phase">탄탄한 기본을 위해 <strong>뒤돌아볼 줄 아는 개발자</strong>를 꿈꾸고 있습니다.</p>
            </div>
          </div>
          <strong className="deco">{text}</strong>
        </div >
      </div >
    </>
  )
}

export default First;