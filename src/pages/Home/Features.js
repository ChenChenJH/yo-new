import React, { PureComponent } from 'react';
import { } from 'antd';
import styles from './Features.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';


const imgs = [require("../../assets/images/icon_functionpay01.png"),require("../../assets/images/icon_functionpay02.png"),
              require("../../assets/images/icon_functionpay03.png"),require("../../assets/images/icon_functionpay04.png"),
              require("../../assets/images/icon_functionpay05.png"),require("../../assets/images/icon_functionpay06.png")];


//会员管理/宣传推广/游戏互动组件
function VipItem(props){
    let obj = props.obj;
    return (
      <div className={styles.white_container} style={props.bg_style}>
          <p className={styles.title_b}>{obj.p_title}</p>
          <div className={styles.main_div}>
            {
              props.img_postion=="before" ? (<div className={styles.imgbox}><img alt="features" src={obj.img} /></div>) : ("")
            }
            <div className={styles.viptable} style={props.font_style}>
              {
                obj.data.map((item,index)=>
                  <div className={styles.vip_item +' '+ (item.css==null ? '':(item.css.en))} key={index}>
                    <div className={styles.vip_item_div} style={item.bg}>
                      <div className={styles.vipicon}></div>
                      <b style={{fontWeight:'bold',fontSize: '18px'}}>{item.title}</b><br/>
                      <small style={{fontWeight:600}}>{item.detail}</small>
                    </div>
                  </div>
                )
              }
            </div>
            {
              props.img_postion=="after" ? (<div className={styles.imgbox}><img alt="features" src={obj.img} /></div>) : ("")
            }
          </div>
      </div>
    );
}

//智能订单管理/管理体系的组件
function BrainItem(props){
    let obj = props.obj;
    return (
      <div className={styles.white_container} style={props.bg_style}>
        <p className={styles.title_b} style={props.p_color}>{obj.p_title}</p>
        <p style={{fontSize: '18px',marginBottom:'0px'}}>{obj.p_desc}</p>
        <div className={styles.main_div}>
          {
            obj.data.map((item,index)=>
              <div className={styles.pay_item +' '+ (item.css==null ? '':(item.css.en))} key={index}>
                  <div className={styles.vipicon}></div>
                  <b style={{fontWeight:'bold',fontSize: '18px'}}>{item.title}</b><br/>
                  <p >{item.detail}</p>
              </div>
            )
          }
        </div>
      </div>
    );
}

export default class Features extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
          <img style={{width:'100%'}} alt="features" src={CurrentLang.feature_img} />
          {/*我们能解决哪些问题*/}
          <div className={styles.white_container}>
              <p className={styles.title_b}>{CurrentLang.feature_title}</p>
              <div className={styles.main_div}>
                 <div className={styles.question_list}>
                    {
                      CurrentLang.feature_top.map((item,index)=>
                          <div className={styles.question_item} key={index}>
                            <div className={styles.circle_div +' '+ (item.css==null ? '':(item.css.circle_style))}>{item.weakTitle}</div>
                            <p>{item.weakDetail}</p>
                          </div>
                        )
                    }
                 </div>
              </div>
          </div>
        
          {/*会员管理体系*/}
          <VipItem obj={CurrentLang.feature_data[0]} bg_style={{background:'#eee'}} img_postion="after"/>
          {/*宣传推广体系*/}
          <VipItem obj={CurrentLang.feature_data[1]} font_style={{color:'#17b07a'}} img_postion="before"/>
           {/*游戏互动体系*/}
          <VipItem obj={CurrentLang.feature_data[2]} bg_style={{background:'#eee'}} img_postion="after"/>

          {/*支付体系*/}
          <div className={styles.white_container}>
              <p className={styles.title_b} >{CurrentLang.feature_pay.p_title}</p>
              <p style={{fontSize: '18px'}}>{CurrentLang.feature_pay.p_desc}</p>
              <div className={styles.main_div}>
                  {
                    CurrentLang.feature_pay.data.map((item,index)=>
                       <div className={styles.pay_item +' '+ (item.css==null ? '':(item.css.en))} key={index}>
                          <div className={styles.payimg}><img src={imgs[index]} /></div>
                          <b style={{fontWeight:'bold',fontSize: '18px'}}>{item.title}</b><br/>
                          <p >{item.detail}</p>
                      </div>
                    )
                  }
              </div>
          </div>
          {/*智能订单管理*/}
          <BrainItem obj={CurrentLang.feature_data2[0]} bg_style={{color:'white',background:'#1E9FFF'}}
            p_color={{color:'white'}}/>
          {/*管理体系*/}
          <BrainItem obj={CurrentLang.feature_data2[1]} />

          {/*回到顶部*/}
          <BackTop />
      </div>
    );
  }
}
