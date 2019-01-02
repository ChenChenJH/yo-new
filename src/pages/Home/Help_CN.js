import React, { PureComponent } from 'react';
import styles from './Help.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';


export default class Help_CN extends PureComponent {
  render() {
    return (
      <div className={styles.my_container}>
      {/*回到顶部*/}
        <BackTop />
        <div className={styles.quetionBoxDivStyle}>

          <div className={styles.startTitle}>
            <span className={styles.legend}>常见问题</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>YoPoint是什么？</div>
            <span className={styles.questionDetailStyle}>YoPoint优惠点是一套专为中小企而设的全方位营销管理工具。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>成为YoPoint商户有什么优势？</div>
            <span className={styles.questionDetailStyle}>可以轻松方便地拥有属于自己的网上及移动商店，利用YoPoint为您提供的各种营销功能，拓展您的生意，更有专人指导使用。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何注册YoPoint，成为YoPoint商户？</div>
            <span className={styles.questionDetailStyle}>输入YoPoint官方网址：https://www.yopoint.net，进入官网，在首页向下滚动可以看到“马上行动”，点击右侧需要的店铺方案，根据指引进行注册。这里有2种店铺方案，其中实体店+网店方案的功能较多，注册需要更多信息。注册后请耐心等待审核，审核通过后，填写的注册邮箱会收到邮件通知，欢迎成为YoPoint的一员，请尽情享受YoPoint各种特色服务。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>YoPonit网店可以做什么？</div>
            <span className={styles.questionDetailStyle}>YoPoint网店拥有完整的店铺功能，包括产品发布、订单管理、配送费、税率和搭配管理等等，针对餐饮类店铺还有服务铃管理功能。在YoPoint官网登录后进入商户后台，展开“Yo+”菜单项即可进行操作。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何发布商品到网店及移动商店？</div>
            <span className={styles.questionDetailStyle}>进入商户后台“Yo+”内可上载产品图片及产品资料，并可设定其他配送条件等。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>能做到网上或手机订购产品吗？</div>
            <span className={styles.questionDetailStyle}>完全可以，YoPoint网店是支持多平台的，无论是手机还是计算机都可以轻松参与交易，商户登录官网，进入后台的“Yo+”即可将商品发布在网店和移动商店，客人便可在您的网店和移动商店上流览 贵店商品及订购。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>支付的方式有哪些？</div>
            <span className={styles.questionDetailStyle}>我们开通目前所有最流行的支付方式，包括Paypal、Visa、MasterCard、支付宝、微信支付、银联、国际银联、以及中银澳门。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>开通会员卡管理系统有什么好处？</div>
            <span className={styles.questionDetailStyle}>不仅拥有传统会员卡的促销效果，还有许多更强大的会员功能，包括专属于自家店的会员卡，记录客人消费习惯，用于资料采集及统计分析，作为改进营运的依据，使用充值会员卡更可方便客人在 贵店消费支付。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何开通会员卡管理系统？</div>
            <span className={styles.questionDetailStyle}>在YoPoint官网登录后进入商户后台，展开"会员卡管理"菜单项，即可申请开通会员卡服务。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何利用YoPoint进行业务推广？</div>
            <span className={styles.questionDetailStyle}>可利用YoPoint提供的各种营销工具如会员系统、友得分、摇得喜等项目，进行商户推广活动。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>如何能轻松地与顾客互动？</div>
            <span className={styles.questionDetailStyle}>透过信箱管理可随时收发信息，而App上的新功能“Sup”更可进行实时对话，方便解答客人的查询。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>YoPoint有哪些营销管理工具？</div>
            <span className={styles.questionDetailStyle}>YoPoint已经拥有非常丰富的营销活动与推广方案，还有更实用的顾客互动功能，并在不断更新中，是一款强大的营销工具。在YoPoint官网登录后进入商户后台，展开“营销推广”菜单项即可进行操作。 现有特色营销功能有：</span>
          </div>

          <div className={styles.tableBoxStyle} >
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>YoPoint公用积分</div>
              <span className={styles.questionDetailStyle}>发挥商圈效应，增加您的积分与印花吸引力，商圈联盟的客户就是您的潜在客户，迅速壮大您的客户群。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>迎新礼物</div>
              <span className={styles.questionDetailStyle}>将您的粉丝转化成您的客户，还可以透过礼物的转赠功能达到口碑传播，让更多的消费群体认知。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>WiFi营销互动</div>
              <span className={styles.questionDetailStyle}>让您的免费服务带来更大的附加价值，保障客户的连线安全，更能令您的WiFi使用者变成您的粉丝保持联系。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>打卡分享</div>
              <span className={styles.questionDetailStyle}>让您的每位顾客都成为您的推广员，分享您的信息，透过顾客向朋友圈的推荐增加您的品牌可信度。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>在店VIP</div>
              <span className={styles.questionDetailStyle}>VIP客户在店消费情况一目了然，提升服务质量，令您的最要客户感受宾至如归。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>Sup实时通</div>
              <span className={styles.questionDetailStyle}>一体化的客服实时沟通工具，提升您的客服水平，绝不会错过每一个客户的任何信息，维护品牌形象。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>友得分</div>
              <span className={styles.questionDetailStyle}>透过客户朋友间的互动游戏将您的品牌快速扩散之余，更可大大提升客户的转化率，留住老客户，吸引新顾客。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>摇得喜</div>
              <span className={styles.questionDetailStyle}>用户摇一摇轻松获取您的优惠信息及礼物的好玩游戏，让您的推广讯息变得更有趣吸引。</span>
            </div>
            <div className={styles.tableItemDivStyle}>
              <div className={styles.questionTitleStyle}>嘟宝</div>
              <span className={styles.questionDetailStyle}>电子化拼图游戏，引发客户之间的集图活动，使您的品牌认知快速扩散，吸引客户的二次消费。</span>
            </div>
          </div>

          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>什么是YoPoint公用积分？</div>
            <span className={styles.questionDetailStyle}>YP积分是YoPoint特有的公用积分，App用户透过消费、朋友推荐、摇得喜、友得分等随时获取YP积分。除以YP积分换取商户优惠外，更可直接兑换成Anywhere消费金，到加盟商户直接消费使用。</span>
          </div>
          <div className={styles.questionItemDivStyle}>
            <div className={styles.questionTitleStyle}>什么是Anywhere消费金？</div>
            <span className={styles.questionDetailStyle}>用YP兑换价值等同现金，可在YoPoint Anywhere加盟商店使用</span>
          </div>
        </div>

        
      </div>
    );
  }
}
