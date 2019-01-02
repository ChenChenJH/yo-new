import React, { PureComponent } from 'react';
import { Carousel} from 'antd';
import styles from './Index.less';
//引入回到顶部组件
import BackTop from '../../components/BackTop';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';

//合作商户图片
let customerImg = [
    { alt: '', src: require('../../assets/images/logo_customer01.png') },
    { alt: '', src: require('../../assets/images/logo_customer02.png') },
    { alt: '', src: require('../../assets/images/logo_customer03.png') },
    { alt: '', src: require('../../assets/images/logo_customer04.png') },
    { alt: '', src: require('../../assets/images/logo_customer05.png') },
    { alt: '', src: require('../../assets/images/logo_customer06.png') },
    { alt: '', src: require('../../assets/images/logo_customer07.png') },
    { alt: '', src: require('../../assets/images/logo_customer08.png') },
    { alt: '', src: require('../../assets/images/logo_customer09.png') },
    { alt: '', src: require('../../assets/images/logo_customer10.png') },
]; 

//多样营销,连结分店,随时随地组件
function SaleItem(props){
    let item = props.item;
    return (
        <div className={styles.list_item_div}>
          {
            props.img_postion=="before" ? (<div className={styles.manager_img}><img alt="photo" src={props.img.src} /></div>) : ("")
          }
          <div className={styles.manager_text}>
              <h3 >{item.title1}<br></br>{item.title2}</h3>
              <label >{item.context}</label>
          </div>
          {
            props.img_postion=="after" ? (<div className={styles.manager_img}><img alt="photo" src={props.img.src} /></div>) : ("")
          }
        </div>
      );
}

//成功案例文字描述的组件
function SuccessText(props){
    let item = props.item;
    return (
      <div >
        <h2 style={{fontWeight:'bold',fontSize:'24px',color:props.t_color}}>{item.title}</h2>
        <label style={item.fontStyle}>{item.context}</label>
      </div>
    );
}


export default class Index extends PureComponent {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div style={{background:'#ffffff'}}>
        {/*走马灯图*/}
        <Carousel autoplay>
          {
            CurrentLang.index_imgs.map((item)=>
                <div key={item.alt}>
                  <img alt={item.alt} src={item.src} style={{width:'100%'}}/>
                </div>
              )
          }
        </Carousel>

        {/*企业级管理+全方位营销*/}
        <div  style={{ textAlign: 'center' }} className={styles.manager_div}>
          <h2 style={{fontWeight:'bold',fontSize:'22px'}}>{CurrentLang.idx_context1[0]}</h2>
          <h3 style={{fontSize:'18px'}}>{CurrentLang.idx_context1[1]}</h3>
          <img alt="con_img01" src={CurrentLang.idx_context1[2]} />
        </div>

        {/*多样营销,连结分店,随时随地*/}
        <div className={styles.list_div}>
          <SaleItem item={CurrentLang.idx_managerText[0]} img={CurrentLang.idx_managerImg[0]} img_postion="after" />
          <SaleItem item={CurrentLang.idx_managerText[1]} img={CurrentLang.idx_managerImg[1]} img_postion="before" />
          <SaleItem item={CurrentLang.idx_managerText[2]} img={CurrentLang.idx_managerImg[2]} img_postion="after" />
        </div>

        {/*合作商户,成功案例*/}
        <div className={styles.custom_main_div}>
            {/*合作商户*/}
            <h2 style={{fontWeight:'bold',fontSize:'24px'}}>{CurrentLang.idx_context1[3]}</h2>
            <div className={styles.custom_list}>
                {
                  customerImg.map((item,index)=>
                      <div className={styles.customer_img} key={index}>
                        <img src={item.src} />
                      </div>
                    )
                }
            </div>

             {/*成功案例*/}
            <h2 >
              <label style={{fontWeight:'bold',fontSize:'24px',marginTop:'20px'}}>
                {CurrentLang.idx_context1[4]}
              </label> 
              <label style={{color:'#666666'}}> / COMEBUY TEA</label>
            </h2>

            <div className={styles.success_example_main}>
              {/*内容顶部*/}
              <div className={styles.success_example_top}>
                  <div className={styles.success_left_div}>
                    <img src={require('../../assets/images/photo_comebuy.png')} />
                  </div>
                  <div className={styles.success_right_div}>
                    <SuccessText item={CurrentLang.idx_successText[0]} t_color="#666666"/>
                  </div>
              </div>
               {/*内容底部*/}
               <div className={styles.success_example_bottom}>
                  <SuccessText item={CurrentLang.idx_successText[1]} t_color="#17b07a"/>
               </div>
            </div>

            {/*支持大多数行业*/}
            <div style={{marginTop:'30px'}}> 
              <div style={{fontWeight:'bold',fontSize:'22px',color:'black'}}>{CurrentLang.idx_context1[5]}</div>
              <label style={{fontSize:'18px'}}>{CurrentLang.idx_context1[6]}</label>
            
              <div className={styles.industry_list}>
                {
                  CurrentLang.idx_industry.map((item)=>
                      <div className={styles.industry_item} key={item.context}>
                        <i className={styles.icon_yp} style={{fontSize:'100px',color: '#32a2f9'}}>&#xe615;</i>
                        <h3 >{item.context}</h3>
                      </div>
                    )
                }
              </div>
            </div>

            {/*国内一流的服务*/}
            <div className={styles.services_main}>
              <div className={styles.service_content}>
                  <div style={{fontWeight:'bold',fontSize:'22px',paddingTop:'20px'}}>{CurrentLang.idx_context1[7]}</div>
                  <div className={styles.services_list}>
                    {
                       CurrentLang.idx_localService.map((item)=>
                          <div className={styles.services_item} key={item.title}>
                            <img alt="" style={{width:'120px',height:'120px'}}/>
                            <div style={item.titleStyle}>{item.title}</div>
                            <label style={{fontSize:'16px'}}>{item.context}</label>
                          </div>
                        )
                    }
                  </div>
              </div>
            </div>

        </div>
        {/*回到顶部*/}
        <BackTop />
          
      </div>
    );
  }
}
