import React, { PureComponent } from 'react';
import {
} from 'antd';
import styles from './Video.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';


function LightContentDiv(props) {
  return (
    <div className={styles.lightContentDivBox}>
      <div className={styles.lightTitleStyle}>{props.lightContentData.title}</div>
      <div className={styles.lightDetailStyle}>{props.lightContentData.detail}</div>
    </div>
  );
}

export default class Video extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className={styles.divFlexColumnStyle}>
        <div className={styles.topGrayDivStyle}></div>
        <div className={styles.vedioBoxStyle}>
          <LightContentDiv lightContentData={CurrentLang.video_data} />
          <div className={styles.VedioStyle}>
          <video width="100%"  controls 
            src={require('../../assets/video/yopoint_web.mp4')}  
            poster={require('../../assets/images/poster.png')}>
          </video>
          </div>
        </div>
        <img alt="" src={require('../../assets/images/lights.png')} className={styles.lightImageStyle} />
      </div>
    );
  }
}
