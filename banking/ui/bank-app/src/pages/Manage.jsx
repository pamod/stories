import { Col, Container, Form, Row, Button, Table, Alert } from "react-bootstrap";
import planetimage from '../images/manage-img.jpeg';
import { useEffect, useState } from "react";
import axios from "axios";
import { Hosts } from "../constants/links";

const Manage = () => {

    const [customerId, setCustomerId] = useState('');
    const [submittedCustomerId, setSubmittedCustomerId] = useState('');
    const [points, setPoints] = useState(0);
    const [loyaltyAdditionSuccess, setLoyaltyAdditionSuccess] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const HOST = Hosts.Loyalty;

    useEffect(() => {
        const authorizationHeader = {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        };
        axios.get(HOST + "/pay/1.0.0/allrecords", authorizationHeader).then((responseData) => {
            let responseEntries = Object.entries(responseData.data);
            setAllUsers(responseEntries);
        });
    }, [submittedCustomerId, HOST]);

    async function submitPoints(event) {
        const authorizationHeader = {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        };
        let data = { "id": customerId, "amount": points };
        const result = await axios.post(HOST + "/pay/1.0.0", data, authorizationHeader);

        try {
            if (result.status === 200) {
                setLoyaltyAdditionSuccess(true);
                setSubmittedCustomerId(customerId);
            }
        } catch (e) {
            setLoyaltyAdditionSuccess(false);
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Container className="mt-5">
                        <Row>
                            <h1>Credit</h1>
                            {
                                loyaltyAdditionSuccess && <Alert variant="success">Ammount Credited Successfully For {submittedCustomerId} </Alert>
                            }
                        </Row>
                        <Row className="mt-2">
                            <Col md="4">Customer ID : </Col>
                            <Col md="5"><Form.Control size="sm" type="text" placeholder="Enter Customer ID"
                                value={customerId} onChange={event => setCustomerId(event.target.value)} /></Col>
                        </Row>
                        <Row>
                            <Col md="4" >Amount : </Col>
                            <Col md="5" >
                                <Form.Control size="sm" type="text" placeholder="Enter Amount"
                                    value={points} onChange={event => setPoints(event.target.value)} />
                            </Col>
                        </Row>
                        <Row className="mt-2" >
                            <Col md="4" />
                            <Col md="5" className="d-flex flex-row-reverse" >
                                <Button variant="dark" onClick={submitPoints}>Credit</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Container className="mt-5">
                                <Row>
                                    <h1>Transaction History</h1>
                                </Row>
                                <Row>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Customer ID</th>
                                                <th>Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allUsers.map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{user[1].id}</td>
                                                            <td>{user[1].amount}</td>
                                                        </tr>
                                                    )
                                                }
                                                )
                                            }
                                            {/* <tr>
                                                <td>User1</td>
                                                <td>xxx</td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <img src={planetimage} alt="Loading" style={{ opacity: 0.8 }} width="100%" height="100%" />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Manage;