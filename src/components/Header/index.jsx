import { DownOutlined, FacebookOutlined, GithubOutlined, LockOutlined, LogoutOutlined, MailOutlined, PhoneOutlined, SearchOutlined, SwapOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Dropdown, Input, Row, Space, Modal, Form, Button, Select, message, Menu } from "antd"
import { useEffect, useState } from "react";
import './index.css'
import { mock } from "./mock";
import { mockData } from "../Content/mock";
import { Link } from 'react-router-dom'
import { Option } from "antd/lib/mentions";
import axios from "axios";
import Content from "../Content";


const Header = ({ data, setData }) => {
    const [dataUsers, setDataUsers] = useState([])
    const [info, setInfo] = useState(undefined)

    const [university, setUniversity] = useState({ name: 'Đại học kinh tế quốc dân', src: 'https://storage.googleapis.com/onthisinhvien.appspot.com/images/651753183-1588559275263-ktqd-zoic.jpg', });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [filterUniversity, setfilterUniversity] = useState("")
    const showModalLogin = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = async (values) => {

        try {
            const res = await axios.post('https://reqres.in/api/login', {
                email: values.username,
                password: values.password,

            })
            console.log('check values ', values);

            if (res.status === 200) {
                message.success('Đăng nhập thành công')
                setInfo(values.username)
                setIsModalVisible(false)
            }

        } catch (error) {
            message.error('Đăng nhập thất bại')
            setInfo(undefined)
        }

    };

    const [isModalVisible2, setIsModalVisible2] = useState(false);

    const showModalSigin = () => {
        setIsModalVisible2(true);
    };

    const handleOk2 = () => {
        setIsModalVisible2(false);
    };

    const handleCancel2 = () => {
        setIsModalVisible2(false);
    };
    const onFinish2 = async (values2) => {
        try {
            const res = await axios.post('https://reqres.in/api/register', {
                email: values2.username,
                password: values2.password,

            })
            console.log('check values ', values2);

            if (res.status === 200) {
                message.success('Tạo tài khoản thành công')
                setInfo(values2.username)
                setIsModalVisible2(false)
            }

        } catch (error) {
            message.error('Tạo tài khoản thất bại')
            setInfo(undefined)
        }



    };

    console.log("check filter", filterUniversity);
    // useEffect(() => {

    //     const login = async () => {
    //         // const res = await axios.get('https://reqres.in/api/users?page=2')
    //         //     .then(res => {
    //         //         console.log('>>>check res:<<<', res);
    //         //     })
    //     //     let res = await axios.post('https://reqres.in/api/login')
    //     //     console.log('check res', res.data);
    //     //     setDataUsers(res.data.data)
    //     // }

    //     login()
    // }, [])

    // const onClick = ({ key }) => {
    //     message.info(`Click on item ${key}`);
    // };

    // const menu = (
    //     <Menu
    //         onClick={onClick}
    //         items={[
    //             {
    //                 label: '1st menu item',
    //                 key: '1',
    //             },
    //             {
    //                 label: '2nd menu item',
    //                 key: '2',
    //             },
    //             {
    //                 label: 'Đăng xuất',
    //                 key: '3',

    //             },
    //         ]}
    //     />
    // );



    return (

        <div className="header-first">

            <Modal className="modal-login" title="Đăng nhập" footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item>

                        <div className="login-forgot">
                            <a className="login-form-forgot" href="">
                                Quên mật khẩu
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item >
                        <div className="form-bottom">
                            <Button className="login" type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>
                            Hoặc đăng nhập bằng
                            <Button className="singal-sigon" type="primary">
                                <FacebookOutlined /> Facebook
                            </Button>

                            <div>
                                Không có tài khoản
                                <a  >
                                    Đăng kí ngay
                                </a>
                                {/* <a onClick={showModalSigin}>
                                    Đăng kí ngay
                                </a> */}
                            </div>
                        </div>
                    </Form.Item>

                </Form>
            </Modal >

            <div className="form-register" >
                <Modal className="modal-sigin" title="Đăng kí" footer={false} visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
                    <Form
                        name="normal_sigin"
                        className="sigin-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish2}
                    >
                        <div className="form-mid-sigin">
                            <div className="left-mid">
                                1. Thông tin cá nhân
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập họ tên!',
                                        },
                                    ]}
                                >

                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Họ tên*" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập Email!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        placeholder="Email*"
                                    />



                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập số điện thoại!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<PhoneOutlined className="site-form-item-icon" />}
                                        placeholder="Số điện thoại*"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="select"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn tên trường!',
                                        },
                                    ]}
                                >
                                    <Select className="dropdown-select" placeholder="Chọn trường">
                                        <Option value="NEU">Kinh tế quốc dân</Option>
                                        <Option value="NUCE">Đại học xây dựng Hà Nội</Option>
                                        <Option value="TMU">Học viện ngân hàng</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="right-mid">
                                2. Thông tin tài khoản
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập tên tài khoản !',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên tài khoản*" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Mật khẩu*"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Xác nhận mật khẩu*"
                                    />
                                </Form.Item>
                            </div>
                        </div>


                        <Form.Item>
                            <div className="form-bottom-sigin">
                                <Button className="btn-register-form" type="primary" htmlType="submit" >
                                    Đăng ký
                                </Button>
                                Hoặc đăng kí bằng
                                <Button className="btn-facebook" type="primary" htmlType="submit">
                                    <FacebookOutlined /> Facebook
                                </Button>

                                <div>
                                    Đã có tài khoản?
                                    <a className="change-login" >
                                        Đăng nhập ngay
                                    </a>
                                </div>
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <div className="container-header">
                <Row wrap={false}>
                    <Col xs={{
                        span: 2,
                        offset: 1,
                    }}
                        lg={{
                            span: 1,
                            offset: 2,
                        }}>
                        <div>

                            <Avatar size={40} src={university.src} />
                        </div>
                    </Col>
                    <Col span={5}>


                        <Dropdown visible={isVisible} onVisibleChange={() => { setIsVisible(!isVisible) }} trigger={['click']} overlay={
                            <>
                                <div className="dropdown"  >

                                    <Input onChange={(event2) => { setfilterUniversity(event2.target.value) }} className="input-search-school" placeholder="Nhập tên trường..." suffix={<SearchOutlined />} />

                                    <div>
                                        {
                                            mock.filter((item1) => item1.name.includes(filterUniversity) || filterUniversity === "").map((item) => {
                                                return (
                                                    <Link onClick={() => { setIsVisible(!isVisible) }} to={`/content/${item.key}`}>
                                                        <div key={item.key} onClick={() => setUniversity({ ...university, name: item.name, src: item.src })} className='menu-item'>
                                                            <Avatar className="item-university" src={item.src} />
                                                            {item.name}
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                            )
                                        }

                                    </div>
                                </div>

                            </>

                        }>
                            <Space>

                                <div>{university.name}</div>
                                <DownOutlined />
                            </Space>

                        </Dropdown>

                    </Col>

                    <Col span={8}>
                        <div className="input-search-mid">
                            <Input onChange={e => { setData(e.target.value) }} className="input-search-subject" placeholder="Tên môn học..." suffix={<SearchOutlined />} />
                            <div>
                                {mockData.map((value, event) => {
                                    return (
                                        <div key={event.key}>
                                            {event.name}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>

                    <Col span={8}  >
                        <div className="right-login">


                            <div className="login-panel">
                                {info ? <div className="user-view">
                                    <Link to={`/upload`}>
                                        <button type="button" className="btn-upload">
                                            <span>Đóng góp tài liệu</span>
                                        </button>
                                    </Link>
                                    <Dropdown overlay={
                                        <div>

                                            <Menu className="menu-dropdown">
                                                <Menu.Item className="backgroud"> <Avatar className="avatar" size={60} icon={<GithubOutlined />} /> {info}</Menu.Item>
                                                <Menu.Item className="menu-down" icon={<SwapOutlined style={{ fontSize: "22px" }} />}>Lịch sử giao dịch</Menu.Item>
                                                <Menu.Item className="menu-down" icon={<UserOutlined style={{ fontSize: "22px" }} />}>Khóa học của tôi</Menu.Item>
                                                <Menu.Item className="menu-down" onClick={() => setInfo(undefined)} icon={<LogoutOutlined style={{ fontSize: "22px" }} />}>Đăng xuất</Menu.Item>
                                            </Menu>
                                        </div>
                                    }>
                                        <a onClick={(e) => e.preventDefault()}>

                                            <Space>
                                                <div className="content-avatar">
                                                    <Avatar className="avatar" icon={<GithubOutlined />} />
                                                    {/* {info} */}
                                                </div>
                                            </Space>

                                        </a>
                                    </Dropdown>


                                </div> :

                                    <div className="button-login">
                                        <button onClick={showModalLogin} type="button" className="btn-upload">
                                            <span>Đóng góp tài liệu</span>
                                        </button>

                                        <button onClick={showModalLogin} className="btn-login" >
                                            <span className="icon-login">{<UserOutlined />}</span>
                                            <span>Đăng nhập</span>
                                        </button>

                                        <button onClick={showModalSigin} className="btn-sigin" >
                                            <span>Đăng ký</span>
                                        </button>
                                    </div>
                                }
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div >

    )
}
export default Header;