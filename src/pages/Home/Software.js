import React, { PureComponent } from 'react';
import Link from 'umi/link';
import { } from 'antd';
import styles from './Software.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';

const soft_imgs = [
  { alt:'img_software01.png', url:require('../../assets/images/img_software01.png') },
  { alt:'img_software02.png', url:require('../../assets/images/img_software02.png') },
  { alt:'img_software03.png', url:require('../../assets/images/img_software03.png') },
  { alt:'img_software04.png', url:require('../../assets/images/img_software04.png') }
];

//标题组件
function MyTitle(props){
    let item = props.item;
    return (
      <div className={styles.titleBox}>
        <span className={styles.appNameStyle}>{item.title}</span>
        <span className={styles.appDetailStyle}>{item.desc}</span>
      </div>
    );
   
}

//图片组件
function MyImg(props){
    let item = props.item;
    return (
      <div className={styles.item_img}>
        <img  alt={item.alt} src={item.url} />
      </div>
    );
}

//yoPointApp列表文字组件
function YopointFunctionLi(props) {
  let items = props.items.context;
  let data =  items.map((item) =>
    <li key={item.fcTitle}>
      <div className={styles.functionTitleStyle}>{item.fcTitle}</div>
      <span className={styles.smallTextGrayStyle}>{item.fcContent}</span>
    </li>
  );
  return (
     <ul className={styles.yopointUlStyle} style={props.items.iconStyle}>
        {data}
     </ul>
  );
}

export default class Software extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>

            <img alt="top_software.png" width="100%" src={CurrentLang.soft_subImg} />
            {/*YoPoint APP*/}
            <div className={styles.white_container}>
                <div className={styles.childDivCenterBox} >
                  <div className={styles.first_prodSystemStyle}>
                    <MyTitle  item={CurrentLang.soft_title[0]} />

                    <YopointFunctionLi items={CurrentLang.soft_app} />
                    <Link to="/download"><div className={styles.downloadButton}>{CurrentLang.soft_app.btn}</div></Link>
                  </div>
                  <MyImg item={soft_imgs[0]} />
                </div>
            </div>

            {/*YoPoint小程序*/}
            <div className={styles.gray_container}>
                <div className={styles.childDivCenterBox} >
                  <MyImg item={soft_imgs[1]} />
                  <div className={styles.prodSystemStyle}>
                    <MyTitle  item={CurrentLang.soft_title[1]} />

                    <div className={styles.maxWidthDivStyle}>
                      <span className={styles.smallTextGrayStyle}>{CurrentLang.soft_wechat[0]}</span>
                      <span className={styles.middleTextBlackStyle}>{CurrentLang.soft_wechat[1]}</span>
                      <span className={styles.smallTextGrayStyle}>{CurrentLang.soft_wechat[2]}</span>
                    </div>

                    <span className={styles.smallTextOrangeStyle}>{CurrentLang.soft_wechat[3]}</span>
                  </div>
                </div>
            </div>
            {/*Yo+云后台管理*/}
            <div className={styles.white_container}>
                <div className={styles.childDivCenterBox} >
                  <div className={styles.prodSystemStyle}>
                    <MyTitle  item={CurrentLang.soft_title[2]} />

                    <span className={styles.smallTextGrayStyle}>{CurrentLang.soft_mgr[0]}</span>
                    <div className={styles.functionTitleStyle}>{CurrentLang.soft_mgr[1]}</div>
                    <span className={styles.smallTextGrayStyle}>{CurrentLang.soft_mgr[2]}</span>
                    <div className={styles.functionTitleStyle}>{CurrentLang.soft_mgr[3]}</div>
                    <span className={styles.smallTextGrayStyle}>{CurrentLang.soft_mgr[4]}</span>

                    <Link to="/merchant_registe"><div className={styles.downloadButton}>{CurrentLang.soft_mgr[5]}</div></Link>
                  </div>
                  <MyImg item={soft_imgs[2]} />
                </div>
            </div>
            {/*Yo+统计报表*/}
            <div className={styles.gray_container}>
                <div className={styles.childDivCenterBox} >
                  <MyImg item={soft_imgs[3]} />
                  <div className={styles.prodSystemStyle}>
                    <MyTitle  item={CurrentLang.soft_title[3]} />

                    <span className={styles.smallTextGrayStyle}>{CurrentLang.soft_rep[0]}</span>
                    <span className={styles.functionTitleStyle}>{CurrentLang.soft_rep[1]}</span>
                    <span className={styles.smallTextGrayStyle}>{CurrentLang.soft_rep[2]}</span>
                    <span className={styles.smallTextOrangeStyle}>{CurrentLang.soft_rep[3]}</span>
                  </div>
                </div>
            </div>
            {/*回到顶部*/}
             <BackTop />
      </div>
    );
  }
}
