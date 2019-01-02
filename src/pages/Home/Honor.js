import React, { PureComponent } from 'react';
import { Timeline } from 'antd';
import styles from './Honor.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';

//发展历程时间轴组件，大于780px时使用
function DevelopmentItem1(props) {
    let items = props.items;
    let data =  items.map((item) =>
      <Timeline.Item key={item.date}>
        <div className={styles.dev_item} style={item.rightFloat}>
          <div className={styles.honorDateStyle} style={item.dateStyle}>{item.date}</div>
          <div className={styles.honorContentStyle} style={item.orderStyle}>{item.devDetail}</div>
        </div>
      </Timeline.Item>
    );

    return (
       <Timeline className={styles.timelineStyle} mode="alternate">
            {data}
       </Timeline>
    );
}

//发展历程时间轴组件，小于780px时使用
function DevelopmentItem2(props) {
    let items = props.items;
    let data =  items.map((item) =>
      <Timeline.Item key={item.date}>
        <div className={styles.dev_item}>
          <div className={styles.honorDateStyle} style={item.dateStyle}>{item.date}</div>
          <div className={styles.honorContentStyle} >{item.devDetail}</div>
        </div>
      </Timeline.Item>
    );

    return (
       <Timeline className={styles.timelineStyle2}>
            {data}
       </Timeline>
    );
}

//荣誉证书列表数据组件
function Honorli(props) {
    let items = props.items;
    let data = items.map((item) =>
      <li key={item.honorDetail}>
        <span className={styles.honorDateStyle} style={item.dateStyle}>{item.date}</span>
        <span className={styles.honorContentStyle}>{item.honorDetail}</span>
      </li>
    );
    return (
      <ul className={styles.honorUlStyle}>
        {data}
      </ul>
    );
}

export default class Honor extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
        <img width="100%" alt="features" src={CurrentLang.honor_title[0]} />
        <div className={styles.devBoxStyle} >
          {/*发展历程*/}
          <div className={styles.devStyle}>
            <span className={styles.bigTitleStyle}>{CurrentLang.honor_title[1]}</span>
            {/*分辨率大于780px时使用这个*/}
            <DevelopmentItem1 items={CurrentLang.honor_devData} />
            {/*分辨率小于780px时使用这个*/}
            <DevelopmentItem2 items={CurrentLang.honor_devData} />
          </div>
        </div>

        <div className={styles.honorBoxStyle} >
           {/*荣誉证书*/}
          <div className={styles.honorStyle}>
            <span className={styles.bigTitleStyle}>{CurrentLang.honor_title[2]}</span>
            <Honorli items={CurrentLang.honor_data} />
            <img  width="100%" alt="features" src={require("../../assets/images/photo_honor.png")} />
          </div>
        </div>
        {/*回到顶部*/}
        <BackTop />
      </div>
    );
  }
}
