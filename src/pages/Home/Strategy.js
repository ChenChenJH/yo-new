import React, { PureComponent } from 'react';
import {Button,Icon} from 'antd';
import styles from './Strategy.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';


//各模块组件
function CreateItem(props){
    let obj = props.obj;
    let data = obj.data.map((item,index) =>
      <div className={styles.item_div} key={index}>
        <img src={item.img} />
        <h4>{item.head}</h4>
        <span>{item.desc}</span>
      </div>
    );
    return(
      <div className={styles.big_box} style={{borderColor:props.useColor}}>
          <div className={styles.point} >
            <div style={{background:props.useColor}}>{props.serial}</div>
            <span style={{borderRightColor:props.useColor}}>&nbsp;</span>
          </div>
          <div className={styles.content_body} style={{borderColor:props.useColor}}>
              {/*大标题*/}
              <div className={styles.content_title} style={{background:props.useColor}}>{obj.title}</div>
              <div className={styles.content_main}>
                {data}
              </div>
          </div>
      </div>
    );
}

export default class Strategy extends PureComponent {
  render() {
    return (
      <div className={styles.main_div}>
          {/*返回按钮*/}
          <Button  href="/" size="large" style={{width:'117px',background:'#ee7526',color:'white'}}block><Icon type="arrow-left" />{CurrentLang.st_other[0]}</Button>
          <div className={styles.t_center}>
            <h2 className={styles.top_title}>{CurrentLang.st_other[1]}</h2>
            <div className={styles.top_line}></div>
          </div>
         {/*五个模块内容*/}
          <CreateItem obj={CurrentLang.st_data[0]} serial="1" useColor="#98d633" />
          <CreateItem obj={CurrentLang.st_data[1]} serial="2" useColor="#33a0d6" />
          <CreateItem obj={CurrentLang.st_data[2]} serial="3" useColor="#f2c73a" />
          <CreateItem obj={CurrentLang.st_data[3]} serial="4" useColor="#7848d9" />
          <CreateItem obj={CurrentLang.st_data[4]} serial="5" useColor="#d74747" />

          {/*底部*/}
          <div className={styles.bot_box}>
            <div className={styles.bot_line}></div>
            <div className={styles.t_target}></div>
            <div className={styles.bot_title}>{CurrentLang.st_other[2]}</div>
          </div>
      </div>
      
    );
  }
}
