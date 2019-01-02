import React, { PureComponent } from 'react';
import {
} from 'antd';
import styles from './Download.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';

export default class Download extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className={styles.my_container}>
      		<div className={styles.main_div}>
      			 <p style={{fontSize:'26px'}}>{CurrentLang.down_data[0]}</p>
      			 <div style={{fontSize:'35px',marginBottom:'30px', fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>{CurrentLang.down_data[1]}</div>
      			 <p style={{fontSize:'16px'}}>{CurrentLang.down_data[2]}</p>
      			 <div className={styles.img_div}>
      			 	<a href="javascript:;"><img src={require("../../assets/images/btn_download01.png")} /></a>
      			 	<a href="javascript:;"><img src={require("../../assets/images/btn_download02.png")} /></a>
      			 </div>
      			 <p style={{fontSize:'16px'}}>{CurrentLang.down_data[3]}</p>
      			 <div className={styles.code_div}><img width="100%" src={require("../../assets/images/download_wx.png")} /></div>
      		</div>

      </div>
    );
  }
}
