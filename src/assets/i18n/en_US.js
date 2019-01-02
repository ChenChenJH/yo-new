const en_US = {
	"lang":"en_US",
    "Register":"Register",
    "Login":"Login",
    "home" : "Home",
    "product" : "Products",
    "software" : "Products",
    "hardware" : "Hardware",
    "video" : "Video Intro",
    "features" : "Functions",
    "help" : "FAQ",
    "us" : "Abouts us",
    "aboutus" : "Abouts Netelis",
    "honor" : "Honor Awards",
    "language" : "Language",
    //轮播图片
    "index_imgs" :[
        { alt: 'top_img01', src: require('../images/en/top_img01.png') },
        { alt: 'top_img02', src: require('../images/en/top_img02.png') },
        { alt: 'top_img03', src: require('../images/en/top_img03.png') },
        { alt: 'top_img04', src: require('../images/en/top_img04.png') },
        { alt: 'top_img05', src: require('../images/en/top_img05.png') }
    ],
    //底部二维码文字和图片
    "mycode_img" : [
      { title: 'Download', context: 'Intelligent+Wise Life', imgUrl: require('../images/code_app.png') },
      { title: 'WeChat', context: 'For the latest info', imgUrl: require('../images/code_weixin.png') }
    ],
    //尾部文字
    "nav_title" : [
      'Service','Support' ,'About us'
    ],
     //尾部导航文字
    "nav_text" : [
      [{text:'Register',url:'/merchant_registe'},{text:'Products',url:'/software'},{text:'About Netelis',url:'/aboutus'}],
      [{text:'Backend',url:'/login'},{text:'Hardware',url:'/hardware'},{text:'Honor Awards',url:'/honor'}],
      [{text:'Privacy',url:'/privacy'},{text:'FAQ',url:'/help'},{text:'Contact Us',url:'/aboutus'}],
      [{text:'Strategy',url:'/strategy'},{text:'Purchase',url:'/consult'},{text:'Jobs',url:'https://www.liepin.com/company/gs894282/'}]
    ],
    //首页->各模块内容标题
    "idx_context1" : [
        'An Omni-Channel Marketing tool to SMEs','Manage your business easily!', require('../images/en/con_img01.png'),
        'Our Merchants','Success Case','Support Every Industry','With the latest technology to help you integrate management system',
        'Industry-class Service'
    ],
    //首页->多样营销,连结分店,随时随地
    "idx_managerText" : [
        { title1: 'Diversified Marketing', title2: 'Facilitate Business Development', context: 'We are committed to let every SME to have an ombi-channel marketing tool to reduce operating costs, to solve the problem of labour shortage and continued to expand their profits.' },
        { title1: 'Link All Branches', title2: 'Manage Data Synchronously', context: 'Authority is clear between headquarters and branches, easy to manage. Support multi-employee account collaborative management. There are a variety of data reporting to facilitate daily reconciliation and business analysis!' },
        { title1: 'Anytime, Anywhere', title2: 'Inquiry and Manage Business Operations', context: 'You can easily have a full range of ombi-channel marketing management software to meet the demands of cashier, membership management, promotion and others. Meantime, we provide a variety of intelligent hardware to meet requirement of self-ordering, order processing and other functions. It greatly reduce labour costs yet improve sales turnover!' },
    ],
     //首页->多样营销,连结分店,随时随地图片
    "idx_managerImg" : [
        { alt: 'con_img02', src: require('../images/en/con_img02.png') },
        { alt: 'con_img03', src: require('../images/en/con_img03.png') },
        { alt: 'con_img04', src: require('../images/en/con_img04.png') }
    ],
    //首页->成功案例文字
    "idx_successText" : [
        { fontStyle:{ fontSize:'17px',fontWeight:'bold',wordBreak: 'break-all' },title: 'Introduction',context: 'COMEBUY (KanPai) main technology "Freshly Brewed Hand-Shake Milk Tea" are from Taiwan. Currently it has expanded their franchise shops all around the world. COMEBUY stringently control the source and quality of the materials to develop the exclusivef formula, which is proved to be very popular among consumers in Taiwan, China, Hong Kong and Macau. Recently, its brand new COMEBUY TEA first entered to Hong Kong and very quickly it became a “Online Famous Shop”. COMEBUY TEA’s unique tea brewing technology attracted crowds and media publicity and due to the reason, operation were out of hand in the beginning. As a partner, our YoPoint technicians worked overtime back-to-back to upgrade the POS system and optimize the production process. This helped to increase the process of cashier and also improved the efficiency production of milk tea.'},
        { fontStyle:{ fontSize:'17px',fontWeight:'bold',wordBreak: 'break-all' },title: 'Merchant Feedback',context: 'Person incharge of Comebuy Tea: “We have been working with YoPoint for many years. With their self-developed Intelligent POS system, our business is getting better and better. Not only the device easy to operate, our staff are able to get started quickly too. The most important thing is to optimize the production process, all the accounts can link online, also there are reports in real time query, financial reconciliation convenience. I can quickly understand product sales condition, adjust sales strategy. It is too convenient ! "'}
    ],
    //首页->支持大多数行业文字和图片
    "idx_industry" : [
        { context: 'O2O Online Store', icon: 'https://yopoint.cn/newpage/img/cn/top_img01.png' },
        { context: 'Café&restaurant', icon: 'https://yopoint.cn/newpage/img/cn/top_img02.png' },
        { context: 'Drinks&Beverage', icon: 'https://yopoint.cn/newpage/img/cn/top_img03.png' },
        { context: 'Bakery', icon: 'https://yopoint.cn/newpage/img/cn/top_img04.png' },
        { context: 'Beauty Saloon', icon: 'https://yopoint.cn/newpage/img/cn/top_img05.png' },
        { context: 'Convenient Store', icon: 'https://yopoint.cn/newpage/img/cn/top_img03.png' },
        { context: 'Retail Shop', icon: 'https://yopoint.cn/newpage/img/cn/top_img04.png' },
        { context: 'More', icon: 'https://yopoint.cn/newpage/img/cn/top_img05.png' }
    ],
     //首页->国内一流服务文字和图片
    "idx_localService" : [
        { titleStyle:{ fontSize:'19px',fontWeight:'bold',marginTop:'15px' }, title: 'Professional Guidance', context: '', src: 'https://yopoint.cn/newpage/img/cn/top_img01.png' },
        { titleStyle:{ fontSize:'19px',fontWeight:'bold',marginTop:'15px' }, title: 'Speed Response', context: '', src: 'https://yopoint.cn/newpage/img/cn/top_img02.png' },
        { titleStyle:{ fontSize:'19px',fontWeight:'bold',marginTop:'15px' }, title: '24-7-day Service', context: '', src: 'https://yopoint.cn/newpage/img/cn/top_img03.png' },
        { titleStyle:{ fontSize:'19px',fontWeight:'bold',marginTop:'15px' }, title: 'Free maintenance', context: '', src: 'https://yopoint.cn/newpage/img/cn/top_img04.png' },
    ],
    "question" : "YOPOINT Q&A",
    //帮助中心
    "questionAry" : [
        { title: 'What is YoPoint?', content: 'YoPoint is a comprehensive Marketing Management tools with all angles for SMEs.' },
        { title: 'What are the advantages become YoPoint Merchant?', content: 'You can own an online and mobile shop easily and conveniently. YoPoint provides a variety of marketing management tools to help you on your business and always ready to assist you. ' },
        { title: 'How to register to be a YoPoint Merchant?', content: 'type: https://www.yopoint.net to enter into YoPoint official website. Scroll down on main page and you will see Getting Started. Click the shop on the right side to select your preference and start register follow the instruction. Here we provide you two types of shop option. Physical + Online YoShop has more features and yet you need to provide more information during registration. ' },
        { title: 'What you can do on Yopoint Online Shop?', content: 'YoPoint online shop has a completed shop functions, including product launches, order management, delivery, tax management, match management and etc., as well as service bell management for F&B outlets. After YoPoint log into the official website business background, expand the "Yo +" menu item to be operated' },
        { title: 'How do I publish my product on online YoShop and mobile shop?', content: 'Enter into Yo+ Merchant Back-end, you can upload product images and product information. You also may set other conditions for delivery and etc.' },
        { title: 'Is it possible to order product online or order through mobile phone?', content: 'Yes. YoPoint online shop supports multi-platform. It can be easily made transaction whether it is mobile phone or computer. Merchants need to login to YoPoint official website then enter into “Yo+” at the backend to publish their product on their online shop and mobile shop. Customer can browse and purchase your product online. ' },
        { title: 'What payment method do you accept?', content: 'Currently we accept most of the popular payment methods which is Paypal, Visa, MasterCard, Alipay, WeChat payment, UnionPay, UnionPay International and BOC Macao. ' },
        { title: 'What are the benefits to activate membership card management?', content: 'Besides the traditional membership card promotional effect, it has many more powerful membership card features. It has an exclusive membership card which records customer spending habits. Hence, it will have a data collection and statistical analysis as basis information to improve operations. It’s convenient to top-up prepaid membership card at your shop and spend at your shop. ' },
        { title: 'How do I activate my membership card management system?', content: 'Login into YoPoint official website and enter to the back-end. Click and expand "membership card management" menu and you may subscribe to activate your membership card service from there. ' },
        { title: 'How to use YoPoint for promoting?', content: 'You may use any YoPoint marketing tools for promoting such as YoPoint membership card system, YoFun, YoShake and etc. ' },
        { title: 'How do I interative with my customer?', content: 'You may receive and send information via mailbox management. There’s a new features--"Sup" as instantly messager for you to answer customer’s enquiries. ' },
        { title: 'What are the marketing management tools does YoPoint had?', content: 'YoPoint has a extensive and strong marketing background ready to assist you with all marketing management tools. YoPoint also has a practical customer interaction features and it always an updated powerful marketing tools. Login into YoPoint official website and enter to the back-end. Click and expand "marketing promotion" menu to operate. Current Marketing Tools Features:' },
        { title: 'YoPoint General Points', content: 'The attractiveness of points and stamp will be increase through your business circle. Business circle affiliate is your potential customer. It growth your customers base rapidly.' },
        { title: 'Welcome Gift', content: 'Make your fans turn to become your regular customer. Build the awareness through gift transfer as word of mouth too.' },
        { title: 'YoShake', content: 'It’s a fun game which user may shake it anytime and have chance to get an offer message or lovely gift. A fun game can attract user to spend at your shop and make them to become your regular customer.' },
        { title: 'Check-in and Share', content: 'Let every customers become your promoters to share your information, create awareness and increase the credibility of your shop among their circle of friends.' },
        { title: 'YoFun', content: 'Build the awareness and branding via interactive games with customer and their friends. It helps retain existing customers and attract new customers.' },
        { title: 'In-House VIP', content: 'Know your VIP customer spending status, improve service quality to serve your VIP customer better.' },
        { title: 'Sup instant messenger', content: 'A integrated instantly customer service tools to enhance your customer service standards. Do not miss any enquiries of each customer and maintain branding image.' },
        { title: 'Wifi Marketing interaction', content: 'The free service allows you to bring greater added value to protect customer connection security but also make your WiFi users become your fans and stay in touch.' },
        { title: 'DoBo', content: 'Electronic jigsaw puzzle game. Bring up activities between users, make your brand awareness quickly spread among friend circle. Meanwhile, it supports spend-and-earn to get free gift. It make customer at least spend twice.' },
        { title: 'What is YoPoint General Point?', content: 'YP point is a unique points for YoPoint. App user may get their point via spending, recommendation YoShake, YoFun and etc. YP point can be exchanged to a merchant offer and also can be exchanged to Anywhere spending cash to use it directly at any YoPoint Anywhere affiliated shops. ' },
        { title: 'What is Anywhere spending cash?', content: 'Exchange YP to equivalent value of cash. It can be used in YoPoint Anywhere affiliated shops. ' }
    ],
    //关于力达
    "us_title" : [
        'Introduction','Contact Us'
    ],
    //关于力达->公司简介
    "us_companyDesAry" : [
        { divWidth:{width: '180px'}, contentStyle:{wordBreak: 'break-all',lineHeight:'20px'}, title: 'ABOUT US',content: 'Netelis Asia established in 1999. We are the technology service company. Our headquarter is located at Macau. We have subsidiary companies at Zhuhai and Malaysia too. Our business is all over China, Hong Kong, Macao and other countries.We have a number of national patents; own more than 10 copies of the copyright. Our independent research and development projects repeatedly won the award in the International Invention Contest. We work closely with CHINA POST, BANK OF CHINA MACAU BRANCH, BANK OF CHINA (HONG KONG), ICBC on many projects and keep up a good and stable long-term relationship.' },
        { divWidth:{width: '180px'}, contentStyle:{wordBreak: 'break-all',lineHeight:'20px'}, title: 'VISION', content: 'Achieve [Intelligent commerce, wise life]. Assist merchants to manage an omni-channel marketing easily. Reduce operating costs. Solve the problem of labour shortages.' },
        { divWidth:{width: '180px'}, contentStyle:{wordBreak: 'break-all',lineHeight:'20px'}, title: 'MISSION', content: 'Provide service for all merchant, especially for small and medium enterprises to own a store which have an Omni-channel marketing system; reduce operating costs, continue to expand profitability. Meanwhile, we provided a fresh, interesting and preferential shopping platform for the vast number of consumers.' },
        { divWidth:{width: '180px'}, contentStyle:{wordBreak: 'break-all',lineHeight:'20px'}, title: 'PHILOSOPHY', content: 'Customers are our priority, people oriented.' }
    ],
    //关于力达->联系我们
    "us_companyContactAry" : [
        { area: 'Macau (Headquaters)',
        name: 'Netel Information & Services, Ltd.',
        address: 'ADD ：Alm. Dr. Carlos Dassumpcao 335-341 Edf.HOT LINE, 8 Andar U, Macau.',
        tel: 'TEL：+853 2870 2182',
        fax: 'FAX：+853 2870 2132' },
        { area: 'ZhuHai',
        name: 'Netel Computer Information Technology (Zhuhai) Ltd.',
        address: 'ADD ：Room 601-602, CF Tower,No.325 Renmin Road, Xiangzhou Zhuhai, ',
        tel: 'TEL：+86 0756 333 7667',
        fax: 'FAX：+86 0756 333 7567' },
        { area: 'HONG KONG',
        name: 'Finnotech Services Limited',
        address: 'ADD ：FLAT C3, 24/F YOUNG YA IND BLDG 381-389 SHA TSUI RD TSUEN WAN NT HONG KONG',
        tel: 'TEL：+852 5380 8040',
        fax: 'FAX：+852 2868 3108' },
        { area: 'MALAYSIA',
        name: 'Netelis Asia Sdn. Bhd.',
        address: 'ADD ：B-10-13A, Prima Avenue (The Tube), Jalan PJU 1/39, Dataran Prima, 47301 Petaling Jaya, Selangor.',
        tel: 'TEL：+603 7887 8976',
        fax: 'FAX：+603 7887 8976' }
    ],
    //介绍视频
    "video_data" : { 
        title: 'YoPoint- An intelligent ordering system',
        detail: 'YoPoint provides a solution for food and beverage operations, such as self-ordering, take-away ordering, automatic receipt printing , etc.' 
    },
    //荣誉奖项->图片和标题
    "honor_title" : [
        require('../images/en/top_honor.png') ,'Development Path','Honor Certificate'
    ],
    //荣誉奖项->发展历程
    "honor_devData" : [
        { rightFloat:{}, orderStyle:{},dateStyle:{padding:'0 22px'},
        date: '1999.03', devDetail: 'Establishment of Headquarter' 
        },
        { rightFloat:{ justifyContent:'flex-end' }, orderStyle:{order:-1},dateStyle:{padding:'0 22px'},
        date: '2003.03', devDetail: 'Obtained the Bureau of Telecommunications Regulation of Macau’s ISP lisence' 
        },
        { rightFloat:{}, orderStyle:{},dateStyle:{padding:'0 22px'},
        date: '2003.09', devDetail: 'Establishment of ZhuHai Branch' 
        },
        { rightFloat:{ justifyContent:'flex-end' }, orderStyle:{order:-1},dateStyle:{padding:'0 22px'},
        date: '2007.05', devDetail: 'Establishment of Malaysia Branch' 
        },
        { rightFloat:{}, orderStyle:{},dateStyle:{padding:'0 22px'},
        date: '2010.06', devDetail: 'Establishment of good relationship between Netelis and China Post' 
        },
        { rightFloat:{ justifyContent:'flex-end' }, orderStyle:{order:-1},dateStyle:{padding:'0 22px'},
        date: '2011.11', devDetail: '2011 Macau APICTA Awards Ceremony' 
        },
        { rightFloat:{}, orderStyle:{},dateStyle:{padding:'0 22px'},
        date: '2012.07', devDetail: 'Gains the gold medal of the invention of Macau' 
        },
        { rightFloat:{ justifyContent:'flex-end' }, orderStyle:{order:-1},dateStyle:{padding:'0 22px'},
        date: '2013.04', devDetail: 'Won the 41st Exhibition of Inventions Geneva Bronze Award' 
        },
        { rightFloat:{}, orderStyle:{},dateStyle:{padding:'0 22px'},
        date: '2014.12', devDetail: 'Agent2000 Travel B2B2C platform go online' 
        },
        { rightFloat:{ justifyContent:'flex-end' }, orderStyle:{order:-1},dateStyle:{padding:'0 22px'},
        date: '2015.05', devDetail: 'Tied up with Bank of China Macau branch on a "BOC Privilege site project"' 
        },
        { rightFloat:{}, orderStyle:{},dateStyle:{padding:'0 22px'},
        date: '2015.12', devDetail: 'Tied up with BOC (Hong Kong) Credit Card on a “User Privileges Platform” project' 
        },
        { rightFloat:{ justifyContent:'flex-end' }, orderStyle:{order:-1},dateStyle:{padding:'0 22px'},
        date: '2016.12', devDetail: 'Be awarded with ‘High Technology Expertise’ certificate'
        }
    ],
    //荣誉奖项->荣誉证书
    "honor_data" : [
        { dateStyle:{padding:'0 22px'}, date: '2016.12', honorDetail: 'Be awarded with ‘High Technology Expertise’ certificate' },
        { dateStyle:{padding:'0 22px'}, date: '2016.12', honorDetail: 'Be awarded as "YI QI FEI XIANG" Xiangzhou District SME growth project cultivate expertise' },
        { dateStyle:{padding:'0 22px'}, date: '2013.05', honorDetail: 'The 24th Malaysia ITEX International Invention, Innovation & Technology Exhibition:' },
        { dateStyle:{padding:'0 22px'}, date: '2013.04', honorDetail: 'The 41st Exhibition of Inventions Geneva: YoPoint™ won the "Bronze Award"' },
        { dateStyle:{padding:'0 22px'}, date: '2013.02', honorDetail: '2012 Macau InnoICT Grand Prix: YoPoint™ Won "Excellent Award"' },
        { dateStyle:{padding:'0 22px'}, date: '2012.07', honorDetail: 'Macau International Innovation &Invention Expo: YoPoint™ won the “Excellent Award” issued by AICA' },
        { dateStyle:{padding:'0 22px'}, date: '2012.07', honorDetail: 'Macau International Innovation & Invention Expo: YoPoint™ won the “Invention Gold Award” issued' },
        { dateStyle:{padding:'0 22px'}, date: '2012.07', honorDetail: 'YoPoint™ won “The Best Invention Award" from the Korea University Invention Association' }
    ],
     //核心产品->顶部图片
    "soft_subImg" : require('../images/en/top_software.png'),
     //核心产品->各模块内容标题
    "soft_title" : [
      { title:'YoPoint APP', desc:'Store Management Comprehensive Upgrade' },
      { title:'YoPoint Mini Program', desc:'Create Own Mobile Ordering System' },
      { title:'Yo+ Backend Management', desc:'Expanding business is so simple' },
      { title:'Yo+ Report', desc:'Drive Sales Growth With Data' }
    ],
    //核心产品->YoPoint APP
    "soft_app" : { iconStyle:{ backgroundSize: '50px 95%'}, btn:'Download now', context:[
        { fcTitle: 'Member Management', fcContent: 'Make every consumer become your customer' },
        { fcTitle: 'Payment', fcContent: 'The most comprehensive electronic payment' },
        { fcTitle: 'Promotion', fcContent: 'Low budget promotions, but also to reach more consumers' },
        { fcTitle: 'Integrative Games', fcContent: 'More interesting interaction. Keep old customers, get new customers' },
        { fcTitle: 'Intelligent Order Management', fcContent: 'Intelligent print seperately, intergration settlement management, save manpower' },
        { fcTitle: 'Management', fcContent: 'Control business conditions at any time' }]
    },
     //核心产品->小程序
    "soft_wechat" : ['Share among', ' 900 million ', 'WeChat users."Shop services + Membership card + Marketing" as the core, to achieve online store sales and upgrade services!', 'Search ‘YoPoint+’ on WeChat'],
    //核心产品->Yo+雲後台管理
    "soft_mgr" : ['No matter to own a physical store ore-commerce business, merchant can own an online store for free. ', 'Multi-terminal Management',
        'Smart Phone Back-end | PC Back-end | Pad Back-end |Intelligent Hardware', 'Integrated Solution',
        'Web-point Management | Chain-store Management | Staff Management | Hardware Management', 'Free Registration'
    ],
    //核心产品->统计报表
    "soft_rep" : ['Authority is clear between Headquarters and branches, easy to manage stores!', 'The most comprehensive data statistics', 
        'Cashier, order data, tmie period report,member data, product data, etc', 'Sync with Computer & Smart Phone'
    ],
     //下载中心
    "down_data" : ['YoPoint APP Download', 'Intelligent Commerce • Wise Life', 'Please select your device to download our FREE APP', 
        'For local Android device, please scan or click on QR code to download directly.'],
    //免费开店
    "free_data" : [require("../images/en/top_register.png"), 'GETTING STARTED', 'Select a YoShop to begin'],
    //免费开店
    "free_shop" : [
      { alt:'img_shop01.png', iconUrl: require('../images/img_shop01.png'), shopType: 'Online Only', shopDetail: 'Suitable for web-only merchants' },
      { alt:'img_shop02.png', iconUrl: require('../images/img_shop02.png'), shopType: 'Online + Physical', shopDetail: 'Suitable for online merchants with a physical store' },
    ],
     //硬件中心
    "hard_obj" : [ require('../images/en/top_hardware.png'),'Purchase info',
        'Designed for large F&B industry, food court and other business.','Convenient Operation | Smart Management | Save Labour Cost'
    ],
    //硬件中心
    "hard_data" : [
      { topImg:require('../images/logo_yopos.png'), title1:'Intelligent POS System', title2:'Support Dine-in + Take Away', 
        items: [
          {title:'Powerful Function. Simple Operation', desc:'Staff can get started without training'}, 
          {title:'Easy Check bill & Settlement', desc:'Improve the efficiency of bill, save labor costs'},
          {title:'Hardware Collocation', desc:'false', list:['','','','','']}
        ] },
      { topImg:require('../images/logo_yopad.png'), title1:'Intelligent Ordering Tablet', title2:'Especially for Food & Beverage Industry', 
        items: [
          {title:'Diversified Ordering Mode', desc:'Customers self order or order via staff '}, 
          {title:'Intelligent Ordering Mode', desc:'Front desk real-time orders. Kitchen, bar and other departments print synchronously.'}
        ] },
      { topImg:require('../images/logo_yocloud.png'), title1:'Order Printing System', title2:'Receive 0 error on order', 
        items: [
          {title:'Automatic Allocation', desc:'System will smartly allocate prints to different relevant department according to the order information'}, 
          {title:'Improve Efficiency', desc:'Transaction automation fast and accurate.Greatly enhance the Productivity Efficiency'},
          {title:'Multiple Choices', desc:'Wired bill printer, wireless bill printer, label printer'}
        ] },
      { topImg:require('../images/logo_yomo.png'), title1:'Handheld Ordering Printer', title2:'Ordering + Settlement + Printing', 
        items: [
          {title:'Tiny & Smart. Convenient To Use', desc:'Intelligent portable device. Easy to manage'}, 
          {title:'One For All. Cost Effective', desc:'Simple step on ordering & settlement. Only with one device'}
        ] },
      { topImg:require('../images/logo_yobot.png'), title1:'Smart store - No staff needed', title2:'All-in-one Intelligent Ordering Machines', 
        items: [
          {title:'Smart Way to Operate Store', desc:'Customers place order quickly. Get your meal with tickets. Self-service operation. Without the assistance from staff'}, 
          {title:'Easy to Operate | Speed Print-out | Lifetime Maintenance | Comprehensive Management', desc:''}
        ] },
      { topImg:require('../images/logo_yocall.png'), title1:'Intelligent Number Calling Machine', title2:'', 
        items: [
          {title:'Alert with 1 Press', desc:'Enter number for meal-collection calling'}, 
        ] },
       { topImg:require('../images/logo_yoque.png'), title1:'Easy & Simple to Operate', title2:'', 
        items: [
          {title:'Large Screen Info - Clear At A Glance', desc:'Improve the speed of meal-collection'}, 
        ] },
    ],
    //特色功能
    "feature_top" : [
        { css:require('../../pages/Home/Features.less'), weakTitle: 'Bad', weakDetail: 'Customer reduced Business dropped' },
        { css:require('../../pages/Home/Features.less'), weakTitle: 'Difficulty', weakDetail: 'Difficult to build connection' },
        { css:require('../../pages/Home/Features.less'), weakTitle: 'Too High', weakDetail: 'Marketing costs are too high' },
        { css:require('../../pages/Home/Features.less'), weakTitle: 'Shortage', weakDetail: 'Shorthanded during peak hour' },
        { css:require('../../pages/Home/Features.less'), weakTitle: 'Complex', weakDetail: 'Hard to manage all branches' },
        { css:require('../../pages/Home/Features.less'), weakTitle: 'Messy', weakDetail: 'Sales record is messy' }
    ],
    //特色功能
    "feature_title" : 'What we can solve?',
    //特色功能->顶部图片
    "feature_img" : require('../images/en/top_function.png'),
    //特色功能->支付体系
    "feature_pay" : {
        p_title:'Payment System', p_desc:'The most completed electronic payment method',
        data:[
            { css:require('../../pages/Home/Features.less'), title: 'Mobile Payment', detail: 'Support WeChat, Alipay, Paypal' },
            { css:require('../../pages/Home/Features.less'), title: 'Local Bank Card', detail: 'BOC eNet, Banco Tai Fung' },
            { css:require('../../pages/Home/Features.less'), title: 'International Bank Card', detail: 'VISA、MasterCard' },
            { css:require('../../pages/Home/Features.less'), title: 'Multi-currency Payment', detail: 'Support multi-currency payment and calculating the amount of change' },
            { css:require('../../pages/Home/Features.less'), title: 'Card Payment', detail: 'Support electronic membership card and physical card' },
            { css:require('../../pages/Home/Features.less'), title: 'YoCash', detail: 'Common points convertible amount for all Branchisees' }
        ]
    },
    //特色功能->會員管理體系/宣傳推廣體系/遊戲互動體系
    "feature_data" : [
        {p_title: 'Membership Management System', img: require('../images/en/img_functionside01.png'),
         data:[
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', title: 'Customised Membership Card', detail: 'Customize the membership card threshold' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', title: 'Speedy Issue Card', detail: 'Issuing card by just a scan.Fast and simple.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', title: 'Member Accumulate Points', detail: 'Flexibility of points accumulation and exchange.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', title: 'Member Top-up & Spend', detail: 'Increase cash flow and lock a long-term customer resources!' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', title: 'Branches Membership Management', detail: 'Member’s card can be common in all branches.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', title: 'Non-member Points Accumulation', detail: 'Non-members can a become a high-quality customers.' }
          ]
        },
        {p_title: 'Publicity and Promotion System', img: require('../images/en/img_functionside02.png'),
         data:[
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1, background:'#eee'}, iconUrl: '', title: 'Common Points', detail: 'To attract the surrounding potential customers.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1, background:'#eee'}, iconUrl: '', title: 'The Privilege of BOC', detail: 'Your preferential information can reach more customers.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1, background:'#eee'}, iconUrl: '', title: 'Instant Messaging', detail: 'Improve your customer service level without interruption.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1, background:'#eee'}, iconUrl: '', title: 'In-store Advertising', detail: 'Set your promotional items as a ring show.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1, background:'#eee'}, iconUrl: '', title: 'Platform Advertising', detail: 'Put Your promotional activities on YoPoint APP homepage.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1, background:'#eee'}, iconUrl: '', title: 'Hardware Advertising', detail: 'Display your activities to expand your publicity.' }
         ]
        },
        {p_title: 'Interactive Games System', img: require('../images/en/img_functionside03.png'),
         data:[
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', iconUrl: '', title: 'Check-in', detail: 'Attract customers to take the initiative to share activities.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', iconUrl: '', title: 'Stamp & Chop', detail: 'Set up a collection game to attract more customers' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', iconUrl: '', title: 'Free WiFi', detail: 'Just a click to connect to store WiFi.Safe and easy.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', iconUrl: '', title: 'YoShake', detail: 'Use small gifts to attract customers to the store.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', iconUrl: '', title: 'DoBo', detail: 'A jigsaw puzzle helps your brand rapidly spread.' },
            { css:require('../../pages/Home/Features.less'), bg:{fontSize:'18px', lineHeight:1}, iconUrl: '', iconUrl: '', title: 'YoFun', detail: 'Let each YoPoint user become your promoter .' }
         ]
        }
    ],
    //特色功能->智能订单管理/管理体系
    "feature_data2" : [
        {p_title:'Intelligent Order Management', p_desc:'Improve transaction efficiency, save labor costs',
         data:[
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Self-ordering System', detail: 'Customer self-ordering,each department print orders meanwhile.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Take-away & Pre-order', detail: 'Fully support take-away orders or pre-order at anywhere.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Eat First & Pay Later', detail: 'Customers can order and eat first, then pay later' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Edit Order freely', detail: 'Shop assistant can record orders without pen and paper.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Bill Print Out Automatically', detail: 'Each transaction can be printed instantly' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Intelligent Separately Bill', detail: 'Orders can be assigned to print in different departments' },
         ]
        },
        {p_title:'Management System', p_desc:'Let you control the operation of the business situation better',
         data:[
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Yo+ Online Store', detail: 'Have your online-store for free.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'PC Backend Management', detail: 'Grasp the business situation, at any time.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'APP Backend Management', detail: 'View the information or release promotions anywhere.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Branches Management', detail: 'Authority is clear between headquarters and branches.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Staff Account Management', detail: 'The boss can give different employees different authority.' },
            { css:require('../../pages/Home/Features.less'), iconUrl: '', title: 'Hardware Management', detail: 'Provide a variety of hardware system to manage.' }
         ]
        } 
    ],
    //商家登录
    "login_data" : [
        'Login','username','password','Forgot password ? ','Click here','Remember me','Login','No account yet ? ','Register here',
        'Retrieve Password','Login Name：','Confirm','Cancel'
    ],
     //隐私声明
    "pri_title" : 'YOPOINT PERSONAL DATA COLLECTION POLICY STATEMENT',
    //隐私声明
    "pri_data" : [
        { title: '1.Your Privacy', content: 'YoPoint (collectively referred to herein as "we", "our", "us" or "the Company") respects your legal rights of privacy when collecting, storing, using and transmitting personal data and this Personal Data Collection Policy Statement explains our privacy practices. It is our policy to comply with the requirements of the Law of Personal Data Protection Act of the Macau Special Administrative Region. Hereby we ensure compliance by our employees with strict standards of security and confidentiality prescribed by the Law. Please read the following carefully to understand our policy and practices regarding your personal data and how we will treat it. This policy statement applies to all registered and unregistered users of the Website/APP and may be updated, revised, or otherwise changed, from time to time as we deem necessary. A word or term used in this Personal Data Collection Policy Statement which is not specifically defined in this policy statement shall have the same meaning as “Terms of Use”. “Personal Data” shall mean any information relating to an identified or identifiable natural person or data (such as name, email address, the record of online login, gender, mobile number, date of birth, occupation, income, education background) from which it is practicable for the identity of an individual to ' },
        { title: '2.Purposes for the Use of Your Personal Data', content: 'We will collect your personal data when you register as a member or user of the Website and/or services. If you are under the age of 13, please obtain the consent of your parents or guardian before providing any personal data to us. The purposes for which your personal data may be used will vary depending on the type of services you are applying for and will be stated in the application form or webpage of the relevant services. ' },
        { title: '3.Disclosure of Personal Data', content: '--While collecting your personal data, we will:(1)tell you that we are collecting your personal data and the purpose for the collection; (2)give you an opportunity to object to the use of your personal data for a particular purpose;(3)describe how we store your personal data and how you can access, change and delete your personal data that we have stored.' },
        { title: '', content: '--We will take all practicable steps to keep your personal data confidential but we may transfer/assign such data to the following parties:(1)Agents, contractors or third party service providers who provide operational administrative services, telecommunications, computers and/or other relevant services that you registered for; (2)Any person to whom the Company is obliged to disclose information to, in respect of the relevant government regulators or law enforcement agencies, to comply with any laws, rules and regulations, guidelines or code of practice imposed by any governmental authority.' },
        { title: '4.Links to Other Websites', content: 'This Personal Data Collection Policy Statement only applies to our Website/APP. Our Website, products, APP and services may contain links to other third party websites, products and services. Our products and services may also use or provide third party products or services, such as bank payment page. Information collected by third party (which may include information such as location information or contact information, etc.) is governed by the privacy policy of the third party. We encourage you to learn about the privacy policy of such third party websites. We are not responsible for protecting the privacy and personal data that may be leaking if you click on any advertisement or hyperlink to other web pages, which means you have left our Website and entered another website, you should check and see the privacy policy of the third party websites if applicable. ' },
        { title: '5.Personal Data Collected When Ordering on the Website/APP', content: 'When you order online on our Website/APP, you may need to provide some personal information, including the customer’s name, phone number, email address and mailing address (collectively, "personal data"), your refusal to provide such information may prevent us from processing your order. The "transaction information" that we collect will only be used to process the online orders, and we will keep this "transaction information" confidential at any time.' },
        { title: '6.Use of Cookies', content: 'A cookie is stored on a user’s terminal, only applies to store some basic information, it will not store any sensitive information, and set a validity period, a cookie only remains on the browser for a specified period of time, it will be cleared by the system once it is more than the specified time. Cookies are used when you visit our Website, while APP does not use cookies. If the user disable the cookie for the sake of security, it will not affect the user to use the system functions, but not facilitate the user in such a way that it operates.' },
        { title: '7.Security', content: 'Except as mentioned in paragraph 3 above, your personal data, regardless of its storage method, will be accessed only by our employees or contractors who are authorized to do so. When you register on this Website, your personal data will be encrypted and sent to a dedicated server, then it is stored electronically and password protected. Using of personal data is limited to the employees who have been authorized by us or the designated employees authorized by the contractors under a duty of confidentiality of the Company. These employees who have been authorized by the Company or its associated contractors must comply with this "Personal Data Collection Policy Statement" when they access to the personal data.' },
        { title: '8.Use of Personal Data in Legal Proceedings', content: 'If it becomes necessary that we have to take action against you for any reason whatsoever, including of recovering from you any amount in arrears, you expressly agree that the personal data provided by you can be relied upon in identifying and taking legal action against you. ' },
        { title: '9.Retention of Data', content: 'We only retain your personal data for as long as is necessary for us to render a services to you, for your trading and auditing purposes, the "transaction information" and customer’s online transaction records will be encrypted.' },
        { title: '', content: 'This Personal Data Collection Policy Statement is subject to change.Any changes will be posted on this page. ' },
    ],
    //购买咨询
    "consult_tel" : [
        {value:'853', text:'Macao +853'},
        {value:'852', text:'Hong Kong +852'},
        {value:'86', text:'China +86'},
        {value:'886', text:'Taiwan +886'},
        {value:'60', text:'Malaysia +60'},
        {value:'65', text:'Singapore +65'},
        {value:'84', text:'Vietnam +84'},
        {value:'63', text:'Philippines +63'},
        {value:'62', text:'Indonesia +62'},
        {value:'81', text:'Japan +81'},
        {value:'82', text:'Korea +82'},
        {value:'66', text:'Thailand +66'},
        {value:'1', text:'Canada +1'},
        {value:'1', text:'United States of America +1'},
        {value:'33', text:'France +33'}
    ],
    //购买咨询
    "consult_data" :  [
        {title:'Purchase Application', tip:'If you are interested in our products, please leave a message here, we will contact you as soon as possible.'},
        {title:'Contact Person', tip:''},
        {title:'Contact No.', tip:''},
        {title:'Subject', tip:''},
        {title:'Remarks', tip:''},
        {btn1:'Reset', btn2:'Submit'},
    ],
     //营销攻略
    "st_other" : ['Home','Marketing Strategy','Intelligent Commerce, Wise Life'],
     //营销攻略
    "st_data" : [
      { title:'Build Your Customer Base from Zero',
        data:[
          {img:require('../../assets/images/en/img_1-1.png'),head:'Increase Exposure 1: Publishing Offers', desc:'Merchants may publish or update their offers from the system backend. It will display on the YoPoint APP main page randomly. YoPoint users will be able to see the latest offers and information. It is absolutely attracting more customers to the store.'},
          {img:require('../../assets/images/en/img_1-2.png'),head:'Increase Exposure 2: YoFun', desc:'Merchant will see the promotion result after they publish their YoFun information. User who wants to get YP reward points or gifts will forward the merchant information to their friends. It will increase in-store exposure and convert a user to become a customer.'},
          {img:require('../../assets/images/en/img_1-3.png'),head:'Drive Customers to Visit Store 1: YoShake', desc:'Merchants publish YoShake information. Users may shake their mobile phones to win a prize and the prize must be redeemed in the store. This will help to drive customer visits, increase in-store spending and convert a user to become a customer.'},
          {img:require('../../assets/images/en/img_1-4.png'),head:'Drive Customers to Visit Store 2: Fans Gifts', desc:'Merchants may set up Fans Gifts. Users will receive a welcome gift after they bookmark the merchant. The free gift must be redeemed in the store. This welcome gift surely will drive customer visits, increase in-store spending and convert a user to become a customer.'},
          {img:require('../../assets/images/en/img_1-5.png'),head:'Catch your Fans Efficiency 1: Connect to Wifi', desc:'Only one click, customers may connect to the merchant’s WiFi without attended by any service staff. It is safe and secure. It also allows customers to become the merchant’s fans and build up good interaction.'},
          {img:require('../../assets/images/en/img_1-6.png'),head:'Catch your Fans Efficiency 2: Gift For Check-in', desc:'Users get a free gift automatically when they check-in and share on their social media. It’s the effect of word-of-mouth marketing. '},
          {img:require('../../assets/images/en/img_1-7.png'),head:'Joint Promotion 1: Active Anywhere-Spending-Payment Mode', desc:'Active Anywhere-Spending-Payment Mode helps to build up reputation rapidly through YoPoint major social networking promotion platform. Merchants could carry out various marketing activities using YP rewards points.'},
          {img:require('../../assets/images/en/img_1-8.png'),head:'Joint Promotion 2: To Be An A&P Merchant Of The Bank of China (BOC)', desc:'Merchants based in Macau may register to be an A&P merchant of the Bank of China (BOC). It creates business opportunities for merchants by promoting their products and services through the BOC branches in Macau with over 400 million cardholders in China.'}
        ] 
      },
      { title:'Conversion From A Fans To Become A Customer',
        data:[
          {img:require('../../assets/images/en/img_2-1.png'),head:'Interactive with Fans 1: Fans Promotion', desc:'Publish the latest information anytime to your fans along with free YP rewards points to attract the fans come over to redeem it at your shop. Always keep good interaction with fans and hence drive customer visits, increase in-store spending.'},
          {img:require('../../assets/images/en/img_2-2.png'),head:'Interactive with Fans 2: DoBo Puzzle Game', desc:'Merchant may publish DoBo game information to motivate the customer to spend repeatedly. Each and every piece of jigsaw puzzle could be easily transferable or exchangeable amongst friends. It continues to be an effective way in spreading out information and promoting your brand.'},
          {img:require('../../assets/images/en/img_2-3.png'),head:'Interactive with Fans 3: SUP Instant Service Tool', desc:'Sup is a tool for communication between users and friends or customers and merchants. It supports voice, image and instant voice call. It is a convenient way to keep in touch between customers and merchants and enhance customer service level.'},
          {img:require('../../assets/images/en/img_2-4.png'),head:'Member Management 1: Activate Member-Management-System', desc:'Merchant may activate the Member-Management-System from the system backend. It would keep you up to date on the member’s spending status. Also, by prepaid Top-up feature to increase the cash flow and hence drive customer visits, increase in-store spending.'},
          {img:require('../../assets/images/en/img_2-5.png'),head:'Member Management 2: Publish Information Updates to Member', desc:'Merchant may blast out the latest information of products, event promotions and etc. to all members from the system backend. Keep publicity up-to-date, stay in touch with your members.'},
          {img:require('../../assets/images/en/img_2-6.png'),head:'Member Management 3: Loyalty Programme', desc:'Merchant may manage the member information, collect valuable feedback through customer interactions, thereby increase customer service quality and boost customer loyalty.'}
        ] 
      },
      { title:'Make Full Use Of The Advantages Of e-Commerce / Optimize the Use of Online Selling', 
        data:[
          {img:require('../../assets/images/en/img_3-1.png'),head:'e-Commerce 1 : The Most Complete Electronic Payment Methods', desc:'Merchant may activate the most complete electronic payment method like Visa, Mastercard, UnionPay, Paypal, Alipay and etc. To provide your customers with a seamless and secure payment experience.'},
          {img:require('../../assets/images/en/img_3-2.png'),head:'e-Commerce 2 : Own a YoShop', desc:'Merchant has a complete online Yoshop features at the system backend. Set up a domain name for your YoShop and download the merchant QR code. You may print this QR  code on your name card or any promotional materials to let others know about your YoShop.'}
        ] 
      },
      { title:'Reduce Costing, Improve Efficiency', 
        data:[
          {img:require('../../assets/images/en/img_4-1.png'),head:'Easy Transaction 1: YoCloud Order Printing System', desc:'YoCloud Order Printing System categorise the products orders and print out to the relevant department. Every order processed automatically no matter from online or offline, in/out of shop. This could reduce unnecessary labour costs and make manpower fully utilized on other potential services.'},
          {img:require('../../assets/images/en/img_4-2.png'),head:'Easy Transaction 2: Self-Service-Ordering System', desc:'F&B merchant may provide a tablet device with Self-service-ordering system for dine-in customers to make orders. Order made will send to counter, kitchen, bar and etc. to print on-spot. YoCloud Ordering System helps to lower cost of manpower and fully use of the resources.'}
        ] 
      },
      { title:'Real Time Monitoring, Decide Anytime', 
        data:[
          {img:require('../../assets/images/en/img_5-1.png'),head:'Fast Store-Control 1: Manage System Backend via PC Output', desc:'All merchants have an individual system backend that let them connect from the PC output to manage the respective personnel’s delegated tasks daily. It is convenient, safe and fast!'},
          {img:require('../../assets/images/en/img_5-2.png'),head:'Fast Store-Control 2: Manage System Backend via APP Output', desc:'Merchant may click to open the YoPoint management system backend through binding the mobile phone number. It works the same like a PC backend, merchant may manage daily business easily, set marketing strategy timely and monitor real-time operation efficiently.'}
        ] 
      },
    ],
}    
export default en_US;
