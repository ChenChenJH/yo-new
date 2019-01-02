import React from 'react';
import {Layout,Menu,Button,Icon,Affix,Select} from 'antd';
import DocumentTitle from 'react-document-title';
import Link from 'umi/link';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';
import { formatMessage } from 'umi/locale';
import logo from '../../public/logo.png';
import Context from './MenuContext';
import styles from './HomeLayout.less';
//引入国际化
import {CurrentLang,SetCurrentLang} from '../assets/i18n/languageUtil.js';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

//底部图标
const icons = [
   { name: 'twitter', url: 'javascript:;' },
   { name: 'facebook', url: 'javascript:;' },
   { name: 'google', url: 'javascript:;' },
   { name: 'weibo', url: 'https://weibo.com/signup/signup.php?inviteCode=2617744131' },
   { name: 'qq', url: 'javascript:;' },
];

//语言栏
const lang = [
  { name: '简体中文', value: 'zh_CN' },
  { name: '繁體中文', value: 'zh_TW' },
  { name: 'English', value: 'en_US' }
];


//语言栏组件
class CreateSelect extends React.PureComponent {
   constructor(props) {
      super(props);
      this.state = {
      };
       this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(value){
         this.props.changeLang(SetCurrentLang(value));
    }

    render(){
       let list = this.props.list;
        let data = list.map((item) =>
            <Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>
        );
        return (
            <Select defaultValue={this.props.CurrentLang.lang} style={{ width: 100,fontWeight:600 }} onChange={this.handleChange}>
              {data}
            </Select>
        );
    }
}

//底部二维码显示组件
function MyCode(props){
  let item = props.item;
  return (
    <div className={styles.mycode}>
      <div style={{color:'white'}}>
        <label style={{fontSize:'18px'}}>{item.title}</label><br/>
        {item.context}
      </div>
      <div style={{background:'white',borderRadius:'7px',textAlign:'center',marginTop:'10px'}}>
        <img src={item.imgUrl} />
      </div>
    </div>
  );
}

//底部导航组件
function Mynav(props){
  let nav_title = props.nav_title;
  let nav_text = props.nav_text;
  let data1 =  (
    <tr >
      {nav_title.map((item,index) =>
       <td key={index}><b style={{color:'white',fontSize:'18px'}}>{item}</b></td>
      )}
    </tr>

  );
  //用一个变量存组数的最后一条数据，用于单独渲染data3数据
  let lastOne = nav_text[3];
  let new_nav_text =[];
  for(let i=0;i<nav_text.length-1;i++){
    new_nav_text.push(nav_text[i]);
  }

  /*遍历二维数组生成表格的信息*/
  let data2 = (
      new_nav_text.map((item,index) =>
        <tr key={index}>
          {item.map((i)=>
            <td key={i.text}>
              <Link to={i.url}>{i.text}</Link>
            </td>
          )}
        </tr>
      )
  );

 let data3 = (
    <tr>
      {
        lastOne.map((item,index)=>
          <td key={index}><a href={item.url} target="_blank">{item.text}</a></td>
        )
      }
    </tr>
  );

  return (
    <table className={styles.my_table} >
      <thead>
        {data1}
      </thead>
      <tbody>
        {data2}
        {data3}
      </tbody>
    </table>
  );
}

// Conversion router to menu.
function formatter(data, parentPath = '', parentAuthority, parentName) {
  return data.map(item => {
    let locale = 'menu';
    if (parentName && item.name) {
      locale = `${parentName}.${item.name}`;
    } else if (item.name) {
      locale = `menu.${item.name}`;
    } else if (parentName) {
      locale = parentName;
    }
    const result = {
      ...item,
      locale,
      authority: item.authority || parentAuthority,
    };
    if (item.routes) {
      const children = formatter(item.routes, `${parentPath}${item.path}/`, item.authority, locale);
      // Reduce memory usage
      result.children = children;
    }
    delete result.routes;
    return result;
  });
}


class HomeLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getPageTitle = memoizeOne(this.getPageTitle);
    this.getBreadcrumbNameMap = memoizeOne(this.getBreadcrumbNameMap, isEqual);
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
  }

  state = {
    CurrentLang:CurrentLang
  };

  //切换语言
  changeLang(value){
       this.setState({ CurrentLang:value });
  }

  getContext() {
    const { location } = this.props;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap,
    };
  }

  getMenuData() {
    const {
      route: { routes },
    } = this.props;
    return formatter(routes);
  }

  /**
   * 获取面包屑映射
   * @param {Object} menuData 菜单配置
   */
  getBreadcrumbNameMap() {
    const routerMap = {};
    const mergeMenuAndRouter = data => {
      data.forEach(menuItem => {
        if (menuItem.children) {
          mergeMenuAndRouter(menuItem.children);
        }
        // Reduce memory usage
        routerMap[menuItem.path] = menuItem;
      });
    };
    mergeMenuAndRouter(this.getMenuData());
    return routerMap;
  }

  getPageTitle = pathname => {
    
    return "智能商業，智慧生活 Intelligent Commerce, Wise Life";
  };


  handleMenuCollapse = collapsed => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };

  render() {
    const {
      navTheme,
      layout: PropsLayout,
      children,
      location: { pathname },
    } = this.props;
    const { rendering, isMobile } = this.state;
    const isTop = PropsLayout === 'topmenu';
    const menuData = this.getMenuData();
    const layout = (
      <Layout className={styles.ant_layout}>
        <Affix>
          <div
            style={{ background: '#ffffff',padding:'0'}} 
            className={styles.my_header}
          >
            <div className={styles.nav_div}>
             
              <div className={styles.log_div}>
                <img alt="logo" src={logo} />
              </div>

              {/*导航菜单，当屏幕分辨率大于1090时使用*/}
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                style={{ lineHeight: '64px' }}
                className={styles.my_menu}
              >
               
                <Menu.Item key="home"><Link to="/">{CurrentLang.home}</Link></Menu.Item>
                <SubMenu title={<span>{CurrentLang.product} <Icon type="down-circle-o" /></span>}>
                  <Menu.Item key="software"><Link to="/software">{CurrentLang.software}</Link></Menu.Item>
                  <Menu.Item key="hardware"><Link to="/hardware">{CurrentLang.hardware}</Link></Menu.Item>
                  <Menu.Item key="video"><Link to="/video">{CurrentLang.video}</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="features"><Link to="/features">{CurrentLang.features}</Link></Menu.Item>
                
                <Menu.Item key="help"><Link to="/help">{CurrentLang.help}</Link></Menu.Item>
                <SubMenu title={<span>{CurrentLang.us} <Icon type="down-circle-o" /></span>}>
                  <Menu.Item key="aboutus"><Link to="/aboutus">{CurrentLang.aboutus}</Link></Menu.Item>
                  <Menu.Item key="honor"><Link to="/honor">{CurrentLang.honor}</Link></Menu.Item>
                </SubMenu>
              </Menu>


                {/*按钮组，当当屏幕分辨率大于1090时使用*/}
              <div className={styles.btn_group}>
                <Link to="/merchant_registe" style={{textDecoration:'none'}}>
                  <Button type="primary"   style={{ verticalAlign: 'middle' }}>{CurrentLang.Register}</Button>
                </Link>
                <Link to="/login" style={{textDecoration:'none'}}>
                  <Button type="primary"  style={{ marginLeft: '10px', verticalAlign: 'middle' }}>{CurrentLang.Login}</Button>
                </Link>
                &nbsp; &nbsp;{CurrentLang.language}:
              </div>

              {/*语言栏*/}
              <div className={styles.lang_div}><CreateSelect CurrentLang={CurrentLang} list={lang} changeLang={this.changeLang.bind(this)}/> </div>

              {/*导航菜单，当屏幕分辨率小于1090时使用*/}
              <div className={styles.change_menu}>
                  <div className={styles.menu_list}>
                    <Icon type="bars" style={{fontSize :'32px',color:'#808080'}}/>
                    <Icon type="down-circle-o" />
                    <div className={styles.menu_item}>
                      <ul>
                          <li><Link to="/">{CurrentLang.home}</Link></li>
                          <li><Link to="/software">{CurrentLang.software}</Link></li>
                          <li><Link to="/hardware">{CurrentLang.hardware}</Link></li>
                          <li><Link to="/video">{CurrentLang.video}</Link></li>
                          <li><Link to="/features">{CurrentLang.features}</Link></li>
                          <li><Link to="/help">{CurrentLang.help}</Link></li>
                          <li><Link to="/aboutus">{CurrentLang.aboutus}</Link></li>
                          <li><Link to="/honor">{CurrentLang.honor}</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.menu_list}>
                    <Icon type="user" style={{fontSize :'32px',color:'#808080'}}/>
                    <Icon type="down-circle-o" />
                    <div className={styles.menu_item}>
                      <ul>
                          <li><Link to="/merchant_registe">{CurrentLang.Register}</Link></li>
                          <li><Link to="/login">{CurrentLang.Login}</Link></li>
                      </ul>
                    </div>
                  </div>
              </div>

            </div>

          </div>
        </Affix>
        
        {/*中间内容*/}
        <Content >{children}</Content>
        
        <Footer style={{ textAlign: 'center',height:'300px',paddingLeft: 0,paddingRight: 0}} className={styles.my_footer}>
            <div className={styles.footer_content}>
                  {/*底部导航*/}
                  <div className={styles.footer_content_left}>
                    <Mynav nav_title={CurrentLang.nav_title} nav_text={CurrentLang.nav_text}/>
                    {/*底部图标*/}
                    <div className={styles.icon_list}>
                      {
                        icons.map((icon)=>
                          <a href={icon.url} target="_blank" style={{marginRight:'8px'}} key={icon.name}>
                            <div className={styles.icon_div}>
                              <Icon type={icon.name} style={{fontSize :'20px',color:'#696969'}} />
                            </div>
                          </a>
                        )
                      }
                    </div>
                  </div>

                  {/*底部二维码*/}
                  <div className={styles.footer_content_right}>
                    <MyCode item={CurrentLang.mycode_img[0]} /> <MyCode item={CurrentLang.mycode_img[1]} />
                  </div>
            </div>
            <div className={styles.copy_div}>
              <a>
                Copyright <Icon type="copyright" /> Netelis Asia<Icon type="trademark" />2018. All Rights Reserved.  
              </a>
              <a>
                力达计算机信息技术（珠海）有限公司&nbsp;&nbsp;<label>粤ICP备10026853号-3</label>&nbsp;&nbsp;   
              </a>
              <a>
                 ISP License: <label>7/2003 in Macau</label>
              </a>
            </div>
        </Footer>
       
      </Layout>
    );
    return (
      <DocumentTitle title={this.getPageTitle()}>
        {layout}
      </DocumentTitle>
    );
  }
}

export default HomeLayout;
