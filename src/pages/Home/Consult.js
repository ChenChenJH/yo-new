import React, { PureComponent } from 'react';
import { Input,Icon,Button,Switch,Select } from 'antd';
import DocumentTitle from 'react-document-title';
import styles from './Consult.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';

//下拉框选择国家区号组件
function CreateSelect(props){
    let items = props.items;
    let data = items.map((item,index) =>
            <option key={index} value={item.value}>{item.text}</option>
        );
    return (
        <select  style={{ width: '120px',borderColor:'#DCDCDC',height:'38px'}} >
            {data}
        </select>
    );
}

export default class Login extends PureComponent {

  render() {
    const layout = (
        <div className={styles.main_div}>
            <img style={{width:'100%'}} src={require("../../assets/images/top_consult.png")} />
            <div className={styles.title_div}>
                <span className={styles.title_t}>{CurrentLang.consult_data[0].title}</span>
            </div>
            <form method="post" action="#">
                <div className={styles.my_form}>
                    <p className={styles.tip}>{CurrentLang.consult_data[0].tip}</p>
                    <div className={styles.form_group}>
                        <label><span>*</span>{CurrentLang.consult_data[1].title}</label>
                        <div><Input style={{height:'38px'}}  placeholder={CurrentLang.consult_data[1].tip} /></div>
                    </div>
                    <div className={styles.form_group}>
                        <label><span>*</span>{CurrentLang.consult_data[2].title}</label>
                        {/*下拉框*/}
                        <CreateSelect items={CurrentLang.consult_tel} />

                        <Input style={{height:'38px',width:'207px'}}  placeholder={CurrentLang.consult_data[2].tip} />
                    </div>
                    <div className={styles.form_group}>
                        <label><span>*</span>{CurrentLang.consult_data[3].title}</label>
                        <div><Input style={{height:'38px'}}  placeholder={CurrentLang.consult_data[3].tip} /></div>
                    </div>
                     <div className={styles.form_group}>
                        <label>{CurrentLang.consult_data[4].title}</label>
                        <div><Input.TextArea rows={5} placeholder={CurrentLang.consult_data[4].tip} /></div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Button htmlType="reset">{CurrentLang.consult_data[5].btn1}</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button  type="primary" htmlType="submit">{CurrentLang.consult_data[5].btn2}</Button>
                    </div>
                </div>
            </form>
      </div>
    );

    return (
        <DocumentTitle title="智能商業，智慧生活 Intelligent Commerce, Wise Life">
            {layout}
        </DocumentTitle>
    );

  }
}
