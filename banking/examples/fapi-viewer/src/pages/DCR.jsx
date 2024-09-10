import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const DCR = () => {
    let data = {
        "redirect_uris": [
            "http://localhost:3000",
            "http://localhost:3000/token",
        ],
        "client_name": "FAPI DCR app",
        "grant_types": [
            "client_credentials",
            "authorization_code"
        ],
        "backchannel_logout_uri": "http://localhost:3000/logout",
        "backchannel_logout_session_required": true,
        "token_endpoint_auth_method": "private_key_jwt",
        "token_endpoint_auth_signing_alg": "PS256",
        "sector_identifier_uri": "https://localhost:3000/v1/04b49547-0ae2-4049-8d1c-42648e633001",
        "id_token_signed_response_alg": "PS256",
        "id_token_encrypted_response_alg": "RSA-OAEP",
        "id_token_encrypted_response_enc": "A128GCM",
        "request_object_signing_alg": "PS256",
        "tls_client_auth_subject_dn": "CN=client.example.org, O=Client, L=Chiyoda-ku, ST=Tokyo, C=JP",
        "require_signed_request_object": true,
        "require_pushed_authorization_requests": true,
        "tls_client_certificate_bound_access_tokens": false,
        "subject_type": "pairwise",
        "request_object_encryption_alg": "RSA-OAEP",
        "request_object_encryption_enc": "A128GCM"
    };
    let dcrURL = "https://localhost:30003/api/identity/oauth2/dcr/v1.1/register"

    let username = "admin";
    let password = "admin";

    const [url, setUrl] = useState(dcrURL);
    const [body, setBody] = useState(JSON.stringify(data, null, 2));
    const [response, setResponse] = useState('{}');

    async function submitRegistrationRequest(event) {
        const encodedCredentials = btoa(`${username}:${password}`);
        const authorizationHeader = {
            headers: { Authorization: `Basic ${encodedCredentials}`, "Content-Type": "application/json" }
        };
        const result = await axios.post(url, body, authorizationHeader);

        try {
            setResponse(JSON.stringify(result.data, null, 2));
        } catch (e) {
            //add log here 
        }
    }

    return (
        <Container>
            <Row className="mb-3" >
                <Col style={{ display: 'flex', justifyContent: 'left' }} >
                    Client Registration
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            URL
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={url} onChange={event => setUrl(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'left' }} >
                    <Button as="input" type="button" value="Request" onClick={submitRegistrationRequest} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <InputGroup>
                        <InputGroup.Text>Body:</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" rows={10} value={body} onChange={event => setBody(event.target.value)} />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <InputGroup>
                        <InputGroup.Text>Response:</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" rows={10} value={response} readOnly="true" />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default DCR;