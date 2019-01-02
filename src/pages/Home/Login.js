import React, { PureComponent } from 'react';
import { Input,Icon,Button,Switch,Modal,Form } from 'antd';
import  Link from 'umi/link';
import styles from './Login.less';
//引入国际化配置
import {CurrentLang} from '../../assets/i18n/languageUtil.js';

const FormItem = Form.Item;

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        window.location.href="/admin";
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }

  render() {
    let { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
       {/*账号*/}
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input style={{height:'50px'}} prefix={<Icon type="user" style={{fontSize:'20px'}} />} size="large" placeholder={CurrentLang.login_data[1]} />
          )}
        </FormItem>
        {/*密码*/}
        <FormItem >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input style={{height:'50px'}} prefix={<Icon type="lock" style={{fontSize:'20px'}} />} size="large" type="password" placeholder={CurrentLang.login_data[2]} />
          )}
        </FormItem>

        <FormItem style={{marginTop:'-10px',marginBottom:'0px'}}>
            <span style={{fontSize: '16px',color:'#666666',}}>{CurrentLang.login_data[3]}<a onClick={this.showModal}>{CurrentLang.login_data[4]}</a></span>
        </FormItem>

        <FormItem style={{marginBottom:'10px'}}>
            {/*记住账号*/}
            <Switch checkedChildren={CurrentLang.login_data[5]} unCheckedChildren={CurrentLang.login_data[5]}  />
        </FormItem>
        
        <FormItem style={{marginBottom:'0px'}}>
            <Button type="primary" htmlType="submit" size="large" style={{height:'50px',lineHeight:'40px'}} block>{CurrentLang.login_data[6]}</Button>
        </FormItem>

        <FormItem style={{textAlign:'center'}}>
            <span style={{fontSize: '16px',color:'#666666',}}>{CurrentLang.login_data[7]}<Link to="/merchant_registe">{CurrentLang.login_data[8]}</Link></span>
        </FormItem>
      </Form>
    );
  }
}
const WrappedApp = Form.create()(App);

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
                    <WrappedApp />
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
