import axios from "axios";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Hosts } from "../constants/links";

const Customer = () => {

    const [points, setPoints] = useState(0);
    let userName = localStorage.getItem('userName');
    const HOST = Hosts.Loyalty;

    const headers = {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        params: { id: userName }
    };

    useEffect(() => {
        axios.get(HOST + "/pay/1.0.0/info", headers).then(res => {
            setPoints(res.data.amount);
        });
    });


    return (
        <Container className="mt-5">
            <Row >
                <Col>
                    Your account balance is {points} !
                </Col>
            </Row>
            <Row className="mt-5" >
                <Col>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Merchant</th>
                                <th>Product</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>M Mobile Main</td>
                                <td>50 GB package with unlimited voice</td>
                                <td><Button variant="outline-primary">Buy</Button></td>
                            </tr>
                            <tr>
                                <td>M Mobile TV</td>
                                <td>55 channels with HBO</td>
                                <td><Button variant="outline-primary">Buy</Button></td>
                            </tr>
                            <tr>
                                <td>M Mobile Fiber</td>
                                <td>1x Fiber Connection</td>
                                <td><Button variant="outline-primary">Buy</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Customer;