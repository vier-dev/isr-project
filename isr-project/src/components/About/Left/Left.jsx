import React from 'react'
import './left.css'
import photo1 from "../../../assets/cloudgateuno-sso.png";

const Left = () => {
  return (
    <div className='left-content'>
        <div className="">
          <img src={photo1} alt="" />
        </div>
        <div className="left-footer">
          <h3>ゼロトラストアーキテクチャの採用</h3>
          <p>CloudGate MUROは、お客様により安全にクラウドサービスをご利用いただくために、ゼロトラストモデルのシングルサインオン機能を採用し、安全なサインオンを実現するため、クラウドサービスへのアクセスを行う際、誰が (Who)、何を使って (What)、いつ (When)、どこから (Where)、どのように (How) サインオンするかということを指定してアクセス制限が可能です。</p>
        </div>
    </div>
  )
}

export default Left
