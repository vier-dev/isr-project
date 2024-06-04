import React, { useState } from 'react'
import './righthero.css'

const RightHero = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };


  return (
    <>
      <button className='menu' onClick={toggleForm}> 
        {isFormVisible ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-bars"></i>} 
      </button>

      {isFormVisible && <div className="overlay" />}
      
          <div className={`right-hero ${isFormVisible ? 'visible' : ''}`} >
            <p>CloudGate MUROトライアル申込</p>
            <span>CloudGate UNO トライアル申込フォームにお客様の情報をご記入ください。</span>

            <form action="">
              <div className="input-box">
                <label>会社名<span>会社名</span></label>
                <input type="text" class="form-input"/>
              </div>

              <div className="input-box">
                <label>会社 URL<span>会社名</span></label>
                <input type="text" class="form-input"/>
              </div>

              <div className="column">
                <div className="input-box">
                  <label>氏<span>会社名</span></label>
                  <input type="text" class="form-input"/>
                </div>

                <div className="input-box">
                  <label>名<span>会社名</span></label>
                  <input type="text" class="form-input"/>
                </div>
              </div>

              <div className="input-box">
                <label>メールアドレス<span>会社名</span></label>
                <input type="text" class="form-input"/>
              </div>

              <div className="input-box ">
                <label>CloudGateと連携されたいサービス<span className="span-select">任意</span></label>
                  <div className="dropdown">
                      <div className="select">
                        <p></p>
                        <div className="caret"></div>
                      </div>
                  </div>
              </div>

              <div className="input-box">
                <label>コメント<span className="span-select">任意</span>500文字以内で入力してください</label>
                <textarea></textarea>
              </div>

              <div className="checkbox-content">
                <p>私は、CloudGateトライアル利用規約同意書に同意します<span>会社名</span></p>
                <p>個人情報の取扱い」について同意します。</p>
                <div className="checkbox">
                  <input type="checkbox"/>
                  <label>同意する</label>
                </div>
              </div>
              <button className="btn">送信する</button>
            </form>
          </div>
        
    </>
  )
}

export default RightHero
