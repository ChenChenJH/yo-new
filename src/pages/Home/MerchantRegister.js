import React, { PureComponent } from 'react';
import styles from './MerchantRegister.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';


function RegistShopType(props) {
  return (
    <div className={styles.registTypeBoxStyle}>
      <img alt={props.shopdata.alt} className={styles.shopIconStyle} src={props.shopdata.iconUrl} />
      <a href="javascript:;" style={{textDecoration:'none'}}>
        <div className={styles.shopContentBoxStyle}>
          <div style={{fontSize: '20px'}}>{props.shopdata.shopType}</div>
          <div style={{fontSize: '16px'}}>{props.shopdata.shopDetail}</div>
        </div>
      </a>
    </div>
  );
}

export default class MerchantRegister extends PureComponent {
   componentDidMount() {
        window.scrollTo(0,0);
    }
  render() {
    return (
      <div>
        <div className={styles.topDivStyle}>
          <div className={styles.topImg}>
            <img alt="merchantRegister"  src={CurrentLang.free_data[0]} />
          </div>
        </div>

        <div className={styles.registerBoxStyle}>
          <span className={styles.registTitleStyle}>{CurrentLang.free_data[1]}</span><br></br>
          <div className={styles.registTipStyle}>{CurrentLang.free_data[2]}</div>
          <div className={styles.shopDivBox}>
            <RegistShopType shopdata={CurrentLang.free_shop[0]} />
            <RegistShopType shopdata={CurrentLang.free_shop[1]} />
          </div>
        </div>
      </div>
    );
  }
}
