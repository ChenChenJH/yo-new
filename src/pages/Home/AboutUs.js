import React, { PureComponent } from 'react';
import { } from 'antd';
import styles from './AboutUs.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';


export default class AboutUs extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
          <img alt="photo" style={{width:'100%'}} src="https://www.yopoint.cn/newpage/img/cn/top_aboutus.png" />
          {/*公司简介*/}
          <div className={styles.companyInfo} >
            <div className={styles.companyStyle} >
              <span className={styles.bigTitleStyle} >{CurrentLang.us_title[0]}</span>
              {
                CurrentLang.us_companyDesAry.map((item,index) =>
                    <div className={styles.companyItemStyle} key={index}>
                      <div className={styles.companyTitleDivStyle} style={item.divWidth}>{item.title}</div>
                      <div className={styles.companyContentDivStyle} style={item.contentStyle}>{item.content}</div>
                    </div>
                  )
              }
            </div>
          </div>

           {/*联系我们*/}
          <div className={styles.companyBoxStyle} style={{}}>
            <div className={styles.companyStyle} >
              <span className={styles.bigTitleStyle}>{CurrentLang.us_title[1]}</span>
              <div className={styles.companyAddressStyle}>
                {
                  CurrentLang.us_companyContactAry.map((item,index) =>
                      <div className={styles.companyAddressItemStyle} key={index}>
                        <div className={styles.areaTextStyle}>{item.area}</div>
                        <div className={styles.companyNameTextStyle}>{item.name}</div>
                        <div className={styles.companyContactDivStyle}>{item.address}</div>
                        <div className={styles.companyContactDivStyle}>{item.tel}</div>
                        <div className={styles.companyContactDivStyle}>{item.fax}</div>
                      </div>
                    )
                }
              </div>
            </div>
          </div>
          
          {/*回到顶部*/}
          <BackTop />
      </div>
    );
  }
}
