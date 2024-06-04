import React from 'react'
import './right.css'
import icon1 from "../../../assets/single-signon.svg";
import icon2 from "../../../assets/access-control.svg";
import icon3 from "../../../assets/mfa.svg";
import icon4 from "../../../assets/certificate.svg";

const Right = () => {
  return (
    <div className='right-content'>
        <div className="cards">
            <div class="card">
                <div class="card-body">
                    <div className="icon">
                        <img src={icon1} alt="..." />
                        <h5 className="card-title">ゼロトラストモデル <br /> シングルサインオン</h5>
                    </div>
                    <div className="card-body">
                        <p>
                        シングルサインオン（SSO）の利便性を確保しつつ、ゼロトラストで安全性を両立しながら様々なクラウドサービスへのアクセスができます。
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div className="icon">
                        <img src={icon2} alt="..." />
                        <h5 className="card-title">柔軟なアクセス制限</h5>
                    </div>
                    <div className="card-body">
                        <p>
                        人・物・場所などを特定して各種 クラウドへアクセスできる条件を指定 できます。
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div className="icon">
                        <img src={icon3} alt="..." />
                        <h5 className="card-title">強固な認証</h5>
                    </div>
                    <div className="card-body">
                        <p>
                        セキュリティキー、Windows HelloやTouch IDを利用してパスワードのいらない認証ができます。
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div className="icon">
                        <img src={icon4} alt="..." />
                        <h5 className="card-title">証明書による端末制限</h5>
                    </div>
                    <div className="card-body">
                        <p>
                        許可された端末のみへの証明書の配布及びインストールが可能な為、厳格な端末制限が実現できるようになります。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="right-footer">
            <h3>ゼロトラストアーキテクチャの採用</h3>
            <p>CloudGate MUROはお客様により安全にクラウドサービスをご利用いただくため、ゼロトラストモデルのシングルサインオン機能を採用。クラウドサービスにアクセスする度に確認（認証）をするアプローチに変わりました。<br /> これにより、ユーザーやグループ単位だけでなく、クラウドサービスごとにアクセス制限を設定できるようになりました。</p>
        </div>
    </div>
  )
}

export default Right
