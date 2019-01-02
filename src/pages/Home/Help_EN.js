import React, { PureComponent } from 'react';
import styles from './Help.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';


export default class Help_EN extends PureComponent {
  render() {
    return (
      <div className={styles.my_container}>
      {/*回到顶部*/}
        <BackTop />
        <div className={styles.quetionBoxDivStyle}>

          <div className={styles.startTitle}>
            <span className={styles.legend}>YOPOINT Q&A</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What is YoPoint?</div>
            <span className={styles.questionDetailStyle}>YoPoint is a comprehensive Marketing Management tools with all angles for SMEs.</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What are the advantages become YoPoint Merchant?</div>
            <span className={styles.questionDetailStyle}>You can own an online and mobile shop easily and conveniently. YoPoint provides a variety of marketing management tools to help you on your business and always ready to assist you. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>How to register to be a YoPoint Merchant?</div>
            <span className={styles.questionDetailStyle}>type: https://www.yopoint.net to enter into YoPoint official website. Scroll down on main page and you will see Getting Started. Click the shop on the right side to select your preference and start register follow the instruction. Here we provide you two types of shop option. Physical + Online YoShop has more features and yet you need to provide more information during registration.</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What you can do on Yopoint Online Shop?</div>
            <span className={styles.questionDetailStyle}>YoPoint online shop has a completed shop functions, including product launches, order management, delivery, tax management, match management and etc., as well as service bell management for F&B outlets. After YoPoint log into the official website business background, expand the "Yo +" menu item to be operated </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>How do I publish my product on online YoShop and mobile shop?</div>
            <span className={styles.questionDetailStyle}>Enter into Yo+ Merchant Back-end, you can upload product images and product information. You also may set other conditions for delivery and etc. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>Is it possible to order product online or order through mobile phone?</div>
            <span className={styles.questionDetailStyle}>Yes. YoPoint online shop supports multi-platform. It can be easily made transaction whether it is mobile phone or computer. Merchants need to login to YoPoint official website then enter into “Yo+” at the backend to publish their product on their online shop and mobile shop. Customer can browse and purchase your product online. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What payment method do you accept?</div>
            <span className={styles.questionDetailStyle}>Currently we accept most of the popular payment methods which is Paypal, Visa, MasterCard, Alipay, WeChat payment, UnionPay, UnionPay International and BOC Macao. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What are the benefits to activate membership card management?</div>
            <span className={styles.questionDetailStyle}>Besides the traditional membership card promotional effect, it has many more powerful membership card features. It has an exclusive membership card which records customer spending habits. Hence, it will have a data collection and statistical analysis as basis information to improve operations. It’s convenient to top-up prepaid membership card at your shop and spend at your shop. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>How do I activate my membership card management system?</div>
            <span className={styles.questionDetailStyle}>Login into YoPoint official website and enter to the back-end. Click and expand "membership card management" menu and you may subscribe to activate your membership card service from there. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>How to use YoPoint for promoting?</div>
            <span className={styles.questionDetailStyle}>You may use any YoPoint marketing tools for promoting such as YoPoint membership card system, YoFun, YoShake and etc. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>How do I interative with my customer?</div>
            <span className={styles.questionDetailStyle}>You may receive and send information via mailbox management. There’s a new features--"Sup" as instantly messager for you to answer customer’s enquiries. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What are the marketing management tools does YoPoint had?</div>
            <span className={styles.questionDetailStyle}>YoPoint has a extensive and strong marketing background ready to assist you with all marketing management tools. YoPoint also has a practical customer interaction features and it always an updated powerful marketing tools. Login into YoPoint official website and enter to the back-end. Click and expand "marketing promotion" menu to operate. Current Marketing Tools Features:</span>
          </div>

          <div className={styles.tableBoxStyle} >
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>YoPoint General Points</div>
              <span className={styles.questionDetailStyle}>The attractiveness of points and stamp will be increase through your business circle. Business circle affiliate is your potential customer. It growth your customers base rapidly.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>Welcome Gift</div>
              <span className={styles.questionDetailStyle}>Make your fans turn to become your regular customer. Build the awareness through gift transfer as word of mouth too.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>YoShake</div>
              <span className={styles.questionDetailStyle}>It’s a fun game which user may shake it anytime and have chance to get an offer message or lovely gift. A fun game can attract user to spend at your shop and make them to become your regular customer.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>Check-in and Share</div>
              <span className={styles.questionDetailStyle}>Let every customers become your promoters to share your information, create awareness and increase the credibility of your shop among their circle of friends.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>YoFun</div>
              <span className={styles.questionDetailStyle}>Build the awareness and branding via interactive games with customer and their friends. It helps retain existing customers and attract new customers.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>In-House VIP</div>
              <span className={styles.questionDetailStyle}>Know your VIP customer spending status, improve service quality to serve your VIP customer better.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>Sup instant messenger</div>
              <span className={styles.questionDetailStyle}>A integrated instantly customer service tools to enhance your customer service standards. Do not miss any enquiries of each customer and maintain branding image.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>Wifi Marketing interaction</div>
              <span className={styles.questionDetailStyle}>The free service allows you to bring greater added value to protect customer connection security but also make your WiFi users become your fans and stay in touch.</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>DoBo</div>
              <span className={styles.questionDetailStyle}>Electronic jigsaw puzzle game. Bring up activities between users, make your brand awareness quickly spread among friend circle. Meanwhile, it supports spend-and-earn to get free gift. It make customer at least spend twice.</span>
            </div>
          </div>

          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What is YoPoint General Point?</div>
            <span className={styles.questionDetailStyle}>YP point is a unique points for YoPoint. App user may get their point via spending, recommendation YoShake, YoFun and etc. YP point can be exchanged to a merchant offer and also can be exchanged to Anywhere spending cash to use it directly at any YoPoint Anywhere affiliated shops. </span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>What is Anywhere spending cash?</div>
            <span className={styles.questionDetailStyle}>Exchange YP to equivalent value of cash. It can be used in YoPoint Anywhere affiliated shops.</span>
          </div>
        </div>

        
      </div>
    );
  }
}
