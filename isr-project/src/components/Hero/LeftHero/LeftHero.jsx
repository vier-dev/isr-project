import React from 'react'
import './lefthero.css'
import certificate from "../../../assets/300×250.png";
import hero from "../../../assets/female-thinking.png";

const LeftHero = () => {
  return (
    <div>
        <div className="left-hero">
            <h1>
                多様な働き方に合わせたクラウド認証も、<br />
                社内システムのログイン統合も、 <br />
                これひとつで。
            </h1>
            <p>
            ゼロトラストモデルを採用したCloudGate MUROは快適で <br />
            よりセキュアなクラウド利用を可能にします。
            </p>

            <div className="photo-left">
                <img src={hero} className="photo-1" />
                <img src={certificate} className="photo-2" />
            </div>
        </div>
      
    </div>
  )
}

export default LeftHero
