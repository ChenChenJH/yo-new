import React, { PureComponent } from 'react';
import styles from './Help.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';
import Help_CN from './Help_CN.js';
import Help_TW from './Help_TW.js';
import Help_EN from './Help_EN.js';

function QuestionItemDiv(props) {
  return (
    <div className={styles.questionItemDivStyle}>
      <div className={styles.questionTitleStyle}>{props.questionData.title}</div>
      <span className={styles.questionDetailStyle}>{props.questionData.content}</span>
    </div>
  );
}

function TableItemDiv(props) {
  return (
    <div className={styles.tableItemDivStyle}>
      <div className={styles.questionTitleStyle}>{props.questionData.title}</div>
      <span className={styles.questionDetailStyle}>{props.questionData.content}</span>
    </div>
  );
}

export default class Help extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
　
  }

  render() {
    if(CurrentLang.lang == 'en_US'){
      return <Help_EN />;
    }else if(CurrentLang.lang == 'zh_TW'){
      return <Help_TW />;
    }
    return <Help_CN />;
  }
}
