import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Upload = () => {

    return (
        <>
            <div className="header-2">
                <div className="header-second-2">
                    <div className="content-header-second">
                        <Link className="t-c" to={`/content/1`}>Trang chủ</Link><CaretRightOutlined />
                        <Link className="d-g-t-l" to={`/upload/`}>Đóng góp tài liệu</Link>
                    </div>
                </div>
                <div className="padding-top-2">
                    <div className="content-upload">
                        <Row >
                            <Col span={12} offset={6}>
                                <div className="form-upload">
                                    <h2 style={{ color: "#4485bb" }}>Đóng góp tài liệu</h2>
                                    <div className="name-select">Chọn trường
                                        <b> * </b>
                                    </div>
                                    <div>
                                        <Select style={{ overflow: "auto" }} className="select" placeholder="Chọn trường">
                                            <Option>Kinh tế quốc dân</Option>
                                            <Option>Đại học xây dựng Hà Nội</Option>
                                            <Option>Học viện ngân hàng</Option>
                                            <Option>Đại học Bách Khoa</Option>
                                            <Option>Học viện nông nghiệp Việt Nam</Option>
                                            <Option>Đại học thương mại</Option>
                                            <Option>Đại học điện lực</Option>
                                            <Option>Đại học quốc gia Hà Nội</Option>
                                            <Option>Học viện tài chính</Option>
                                            <Option>Đại học Quy Nhơn</Option>

                                        </Select>
                                    </div>

                                    <div className="name-select">Tên môn
                                        <b> * </b>
                                    </div>
                                    <div>
                                        <Select style={{ overflow: "auto" }} className="select" placeholder="Chọn môn">
                                            <Option>An sinh xã hội</Option>
                                            <Option>An toàn bảo mật thông</Option>
                                            <Option>Anh Văn</Option>
                                            <Option>Bao bì và thương hiệu</Option>
                                            <Option>Bảo hiểm doanh nghiệp</Option>
                                            <Option>Bảo hiểm thương mại 1</Option>
                                            <Option>Bảo hiểm xã hội</Option>
                                            <Option>Chiến lược kinh doanh</Option>
                                            <Option>Chuyên đề tự chọn kế toán</Option>
                                            <Option>Chính sách kinh tế</Option>
                                            <Option>Chủ nghĩa xã hội khoa học</Option>
                                            <Option>Du lịch sinh thái</Option>
                                        </Select>
                                    </div>
                                    <div className="name-select">Loại tài liệu
                                        <b> * </b>
                                    </div>
                                    <div>
                                        <Select className="select" placeholder="Chọn loại tài liệu">
                                            <Option >Đề thi</Option>
                                            <Option >Tài liệu</Option>
                                            <Option >Đề cương</Option>
                                        </Select>
                                    </div>
                                    <div className="name-select">Tiêu đề
                                        <b> * </b>
                                    </div>
                                    <div>
                                        <i> Đề thi + tên môn + ngày tháng đóng góp </i>
                                    </div>
                                    <div><i>Ví dụ: Đề thi giữa kì kinh tế vĩ mô 2020</i></div>
                                    <div>
                                        <Input placeholder="Nhập tiêu đề"></Input>
                                    </div>
                                    <div className="name-select">File tài liệu
                                        <b> * </b><a>:</a><Button className="btn-select-file">Select File </Button>
                                    </div>
                                    <div>
                                        <i>*File hỗ trợ: Doc, PPT, Excel, jar</i>
                                    </div>
                                    <div>
                                        <i>*Dung lượng tối đa: 32MB. Nếu file quá nặng mong bạn gửi cho nhóm admin bằng email đến </i>
                                        <a style={{ color: "red" }} href={"hotro@onthisinhvien.com"}>hotro@onthisinhvien.com</a>
                                    </div>
                                    <Button className="btn-upload-file">Đóng góp</Button>
                                </div>
                            </Col>

                            <div className="history">
                                <div className="list-history">10 người ghi danh gần đây</div>

                            </div>


                        </Row>

                    </div>

                </div>
            </div>
        </>
    )

}

export default Upload;