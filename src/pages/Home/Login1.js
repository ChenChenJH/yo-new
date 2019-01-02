import React, { PureComponent } from 'react';
import { Input,Icon,Button,Switch,Modal } from 'antd';
import { Link  } from 'dva/router';
import styles from './Login.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';


export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
        }
        this.showModal=this.showModal.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
        this.handleOk=this.handleOk.bind(this);
    }
    showModal(){
        this.setState({visible:true});
    }
    handleCancel(){
         this.setState({visible:false});
    }
    handleOk(){
        this.setState({visible:false});
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
  render() {
    return (
      <div className={styles.login_container}>
    		<div className={styles.main_div}>
    			<div className={styles.white_box}>
    				<p className={styles.title_l}>{CurrentLang.login_data[0]}</p>
                    {/*账号*/}
    				<div>
    					<Input style={{height:'50px'}} prefix={<Icon type="user" style={{fontSize:'20px'}} />} size="large" placeholder={CurrentLang.login_data[1]} />
    				</div>
                    {/*密码*/}
    				<div style={{margin:'15px 0px'}}>
    					<Input style={{height:'50px'}} prefix={<Icon type="lock" style={{fontSize:'20px'}} />} size="large" type="password" placeholder={CurrentLang.login_data[2]} />
    				</div>

    				<div className={styles.pwd}>
    					<span style={{fontSize: '16px',color:'#666666',}}>{CurrentLang.login_data[3]}<a onClick={this.showModal}>{CurrentLang.login_data[4]}</a></span>
    				</div>
    				{/*记住账号*/}
    				<Switch checkedChildren={CurrentLang.login_data[5]} unCheckedChildren={CurrentLang.login_data[5]}  />
    				<div style={{marginTop:'20px'}}>
    					<Button type="primary" href="/admin" size="large" style={{height:'50px',lineHeight:'40px'}} block>{CurrentLang.login_data[6]}</Button>
    				</div>
    				<div className={styles.account}>
    					<span style={{fontSize: '16px',color:'#666666',}}>{CurrentLang.login_data[7]}<Link to="/merchant_registe">{CurrentLang.login_data[8]}</Link></span>
    				</div>
                    {/*对话框*/}
                    <Modal title={CurrentLang.login_data[9]} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} 
                        okText={CurrentLang.login_data[11]} cancelText={CurrentLang.login_data[12]}>
                      <label>{CurrentLang.login_data[10]}</label><Input  size="large" />
                    </Modal>
    			</div>
    		</div>
      </div>
    );

  }
}
