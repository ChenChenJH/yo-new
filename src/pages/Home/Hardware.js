import React, { PureComponent } from 'react';
import { } from 'antd';
import styles from './Hardware.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';

const hard_imgs = [
      require('../../assets/images/img_yopos.png'),require('../../assets/images/img_yopad.png'),
      require('../../assets/images/img_yocloud.png'), require('../../assets/images/img_yomo.png'),
      require('../../assets/images/img_yobot.png'),require('../../assets/images/img_yocall.png'),
      require('../../assets/images/img_yoque.png')
];

//产品数据显示组件
function CreateItem(props){
    let dataItem = props.item;
    let items = dataItem.items;
    let data =  items.map((item) =>
      <div key={item.title} className={styles.item_div}>
          <span style={{fontSize:'18px',fontWeight:'600',color: '#282828'}}>{item.title}</span>
          <div style={{fontSize:'16px',fontWeight:'500'}}>{ item.desc!='false' ? (item.desc):
                /*如果desc为flase，则把list数组数据显示出来*/
                (<ul>{item.list.map((i,index) =>
                        <li key={index}>{i}</li>)
                      }
                </ul>)
              }
          </div>
      </div>
    );

    return (
      <div className={styles.white_container} style={{background:props.bg_color}}>
        <div className={styles.main_div}>
          {/*如果图片位置在前边就在前边输出*/}
          {
            props.img_postion=="before" ? (<div className={styles.img_div}><img alt="photo" src={props.img} /></div>) : ("")
          }
          <div className={styles.main_context}>
              <div className={styles.context_img}><img src={dataItem.topImg} /></div>
              <span >{dataItem.title1}</span>
              <p>{dataItem.title2}</p>
              {data}
              <br></br>
              <a href="/consult" target="_blank"><div className={styles.buyContactButton}>{CurrentLang.hard_obj[1]}</div></a>
          </div>
          {/*如果图片位置在后边就在后边输出*/}
          {
            props.img_postion=="after" ? (<div className={styles.img_div}><img alt="photo" src={props.img} /></div>) : ("")
          }
        </div>
       </div>
    );
}

//尾部数据展示组件
function BottomItem(props){
    let dataItem = props.item;
    let items = dataItem.items;
    let image = props.image;
    let data =  items.map((item) =>
      <div key={item.title} className={styles.item_div}>
          <span style={{fontSize:'18px',fontWeight:'600',color: '#282828'}}>{item.title}</span>
          <div style={{fontSize:'16px',fontWeight:'500'}}>{item.desc}
          </div>
      </div>
    );
     return (
        <div className={styles.bottom_main}>
            <div className={styles.context_img}><img src={dataItem.topImg} /></div>
            <span>{dataItem.title1}</span>
            <p>{dataItem.title2}</p>
            <div className={styles.bottom_img}><img src={image} /></div>
            {data}
        </div>
    );
}

export default class Hardware extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
          <img alt="top_hardware.png" width="100%" src={CurrentLang.hard_obj[0]} />
          {/*智能收款机*/}
          <CreateItem item={CurrentLang.hard_data[0]} img={hard_imgs[0]} img_postion="after"/>
          {/*智能点餐平板*/}
          <CreateItem item={CurrentLang.hard_data[1]} img={hard_imgs[1]} img_postion="before" bg_color="#eee"/>
          {/*云点打印机*/}
          <CreateItem item={CurrentLang.hard_data[2]} img={hard_imgs[2]} img_postion="after"/>
          {/*手持点餐打单机*/}
          <CreateItem item={CurrentLang.hard_data[3]} img={hard_imgs[3]} img_postion="before" bg_color="#eee"/>
          {/*智能点餐一体机*/}
          <CreateItem item={CurrentLang.hard_data[4]} img={hard_imgs[4]} img_postion="after"/>

          <div className={styles.gray_container}>
              <div className={styles.main_div}>
                {/*智能叫号机*/}
                <BottomItem item={CurrentLang.hard_data[5]} image={hard_imgs[5]} />
                 {/*叫号提示机*/}
                <BottomItem item={CurrentLang.hard_data[6]} image={hard_imgs[6]} />
              </div>

              <div className={styles.flexColumnGrayStyle}>
                <div className={styles.functionTitleStyle}>{CurrentLang.hard_obj[2]}</div>
                <div className={styles.functionDetailStyle}>{CurrentLang.hard_obj[3]}</div>
                <a href="/consult" target="_blank"><div className={styles.buyContactButton}>{CurrentLang.hard_obj[1]}</div></a>
              </div>
          </div>

          {/*回到顶部*/}
          <BackTop />
      </div>
    );
  }
}
