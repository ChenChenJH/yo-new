
import React, { PureComponent } from 'react';
import styles from './Help.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';


export default class Privacy extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className={styles.my_container}>
        <div className={styles.quetionBoxDivStyle}>

          <div className={styles.startTitle}>
            <span className={styles.legend}>{CurrentLang.question}</span>
          </div>
          {/*数据列表*/}
          {
            CurrentLang.pri_data.map((item,index) =>
                <div className={styles.questionItemDivStyle} key={index}>
                  <div className={styles.questionTitleStyle}>{item.title}</div>
                  <span className={styles.questionDetailStyle}>{item.content}</span>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}
