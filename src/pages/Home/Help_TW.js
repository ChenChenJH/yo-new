import React, { PureComponent } from 'react';
import styles from './Help.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';


export default class Help_TW extends PureComponent {
  render() {
    return (
      <div className={styles.my_container}>
      {/*回到顶部*/}
        <BackTop />
        <div className={styles.quetionBoxDivStyle}>

          <div className={styles.startTitle}>
            <span className={styles.legend}>常見問題</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>YoPoint是什麼？</div>
            <span className={styles.questionDetailStyle}>YoPoint優惠點是一套專為中小企而設的全方位營銷管理工具。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>成為YoPoint商戶有什麼優勢？</div>
            <span className={styles.questionDetailStyle}>可以輕鬆方便地擁有屬於自己的網上及移動商店，利用YoPoint為您提供的各種營銷功能，拓展您的生意，更有專人指導使用。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何註冊YoPoint，成為YoPoint商戶？</div>
            <span className={styles.questionDetailStyle}>輸入YoPoint官方網址：https://www.yopoint.net，進入官網，在首頁向下滾動可以看到“馬上行動”，點擊右側需要的店鋪方案，根據指引進行註冊。這裏有2種店鋪方案，其中實體店+網店方案的功能較多，註冊需要更多資訊。註冊後請耐心等待審核，審核通過後，填寫的註冊郵箱會收到郵件通知，歡迎成為YoPoint的一員，請盡情享受YoPoint各種特色服務。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>YoPonit網店可以做什麼？</div>
            <span className={styles.questionDetailStyle}>YoPoint網店擁有完整的店鋪功能，包括產品發佈、訂單管理、配送費、稅率和搭配管理等等，針對餐飲類店鋪還有服務鈴管理功能。在YoPoint官網登錄後進入商戶後臺，展開“Yo+”菜單項即可進行操作。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何發佈商品到網店及移動商店？</div>
            <span className={styles.questionDetailStyle}>進入商戶後臺“Yo+”內可上載產品圖片及產品資料，並可設定其他配送條件等。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>能做到網上或手機訂購產品嗎？</div>
            <span className={styles.questionDetailStyle}>完全可以，YoPoint網店是支持多平臺的，無論是手機還是電腦都可以輕鬆參與交易，商戶登錄官網，進入後臺的“Yo+”即可將商品發佈在網店和移動商店，客人便可在您的網店和移動商店上流覽 貴店商品及訂購。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>支付的方式有哪些？</div>
            <span className={styles.questionDetailStyle}>我們開通目前所有最流行的支付方式，包括Paypal、Visa、MasterCard、支付寶、微信支付、銀聯、國際銀聯、以及中銀澳門。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>開通會員卡管理系統有什麼好處？</div>
            <span className={styles.questionDetailStyle}>不僅擁有傳統會員卡的促銷效果，還有許多更強大的會員功能，包括專屬於自家店的會員卡，記錄客人消費習慣，用於資料採集及統計分析，作為改進營運的依據，使用充值會員卡更可方便客人在 貴店消費支付。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何開通會員卡管理系統？</div>
            <span className={styles.questionDetailStyle}>在YoPoint官網登錄後進入商戶後臺，展開"會員卡管理"菜單項，即可申請開通會員卡服務。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何利用YoPoint進行業務推廣？</div>
            <span className={styles.questionDetailStyle}>可利用YoPoint提供的各種營銷工具如會員系統、友得分、搖得喜等專案，進行商戶推廣活動。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何能輕鬆地與顧客互動？</div>
            <span className={styles.questionDetailStyle}>透過信箱管理可隨時收發資訊，而App上的新功能“Sup”更可進行即時對話，方便解答客人的查詢。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>YoPoint有哪些營銷管理工具？</div>
            <span className={styles.questionDetailStyle}>YoPoint已經擁有非常豐富的營銷活動與推廣方案，還有更實用的顧客互動功能，並在不斷更新中，是一款強大的營銷工具。在YoPoint官網登錄後進入商戶後臺，展開“營銷推廣”菜單項即可進行操作。 現有特色營銷功能有：</span>
          </div>

          <div className={styles.tableBoxStyle} >
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>YoPoint公用積分</div>
              <span className={styles.questionDetailStyle}>發揮商圈效應，增加您的積分與印花吸引力，商圈聯盟的客戶就是您的潛在客戶，迅速壯大您的客戶群。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>迎新禮物</div>
              <span className={styles.questionDetailStyle}>將您的粉絲轉化成您的客戶，還可以透過禮物的轉贈功能達到口碑傳播，讓更多的消費群體認知。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>WiFi營銷互動</div>
              <span className={styles.questionDetailStyle}>讓您的免費服務帶來更大的附加價值，保障客戶的連線安全，更能令您的WiFi使用者變成您的粉絲保持聯繫。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>打卡分享</div>
              <span className={styles.questionDetailStyle}>讓您的每位顧客都成為您的推廣員，分享您的資訊，透過顧客向朋友圈的推薦增加您的品牌可信度。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>在店VIP</div>
              <span className={styles.questionDetailStyle}>VIP客戶在店消費情況一目了然，提升服務品質，令您的最要客戶感受賓至如歸。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>Sup即時通</div>
              <span className={styles.questionDetailStyle}>一體化的客服即時溝通工具，提升您的客服水準，絕不會錯過每一個客戶的任何資訊，維護品牌形象。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>友得分</div>
              <span className={styles.questionDetailStyle}>透過客戶朋友間的互動遊戲將您的品牌快速擴散之餘，更可大大提升客戶的轉化率，留住老客戶，吸引新顧客。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>搖得喜</div>
              <span className={styles.questionDetailStyle}>用戶搖一搖輕鬆獲取您的優惠資訊及禮物的好玩遊戲，讓您的推廣訊息變得更有趣吸引。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>嘟寶</div>
              <span className={styles.questionDetailStyle}>電子化拼圖遊戲，引發客戶之間的集圖活動，使您的品牌認知快速擴散，吸引客戶的二次消費。</span>
            </div>
          </div>

          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>什麼是YoPoint公用積分？</div>
            <span className={styles.questionDetailStyle}>YP積分是YoPoint特有的公用積分，App用戶透過消費、朋友推薦、搖得喜、友得分等隨時獲取YP積分。除以YP積分換取商戶優惠外，更可直接兌換成Anywhere消費金，到加盟商戶直接消費使用。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>什麼是Anywhere消費金？</div>
            <span className={styles.questionDetailStyle}>用YP兌換價值等同現金，可在YoPoint Anywhere加盟商店使用。</span>
          </div>
        </div>

        
      </div>
    );
  }
}
