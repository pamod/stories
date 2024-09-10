import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import * as jose from 'jose';

const TokenRequest = () => {
    let tokenURL = "https://localhost:30003/oauth2/token";
    let clientAssertionTypeValue = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    let grantTypeValue = "authorization_code";
    let redirectionUriValue = "http://localhost:3000";
    let codeVerifierValue = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";

    const [tokenUrl, setTokeUrl] = useState(tokenURL);
    const [clientAssertionType, setClientAssertionType] = useState(clientAssertionTypeValue);
    const [code, setCode] = useState('');
    const [grantType, setGrantType] = useState(grantTypeValue);
    const [redirectionUri, setRedirectionUri] = useState(redirectionUriValue);
    const [clientAssertion, setClientAssertion] = useState('');
    const [codeVerifier, setCodeVerifier] = useState(codeVerifierValue);
    const [response, setResponse] = useState('{}');
    const [clientId, setClientId] = useState('');
    const [idToken, setIdToken] = useState(null);

    useEffect(() => {
        const match = window.location.href.match(/id_token=([^&]+)&code=([^&]+)/);
        if (match) {
            const extractedIdToken = decodeURIComponent(match[1]);
            const extractedCode = decodeURIComponent(match[2]);

            setIdToken(extractedIdToken);
            setCode(extractedCode);
        }
    }, []);

    useEffect(() => {
        let clientAssertionValue = {
            "sub": clientId,
            "aud": "https://localhost:30003/oauth2/token",
            "iss": clientId,
            "jti": "dj4840290-2-2=9403"
        }
        setClientAssertion(clientAssertionValue);
    }, [clientId]);

    const handleSignAssersion = async () => {
        const alg = 'PS256'
        const pkcs8 = `-----BEGIN PRIVATE KEY-----
        MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCiLsCJqXPwgO01
        3S3xoaOdNJKfJDaG66to6bqIDAeX5si4C9YCL/rtKAgvko8aaaqHQ3YA2Ln5dsbU
        rWcMcKo6NDeNKzZj1P//76gNm9uqOIRAjwarWyhqO3SNk87OXhAdKNDBsCPxS1Tn
        cp1+cqzNfj4izTr0U1Es84kkQVSe4upoztnRwdB7W9zn/MiDdrNU2tFPmDSHA3dF
        eGX8fYOLy8CAkoVqILPepTojEOxx/0NrCe59t9HAUgdF0fGRPaAsUz93LII0wfT7
        l9n9lVQoyYeNHLG4f/cqTqiHVnOJPKV8cHNYqGZpA2h3D5645FBLKOhIx8P+vsoZ
        dMBMRRPRAgMBAAECggEACKFjRpAZZtl9hgnEmaCn48Q57zUOn8RnxTf24Kl/N/Kk
        iMK8ezZRbJBeSyXJ7rZjyDnrTCU8VE2hTA0EOFHAhUNlF2KOzOY3T0fSEhNSr669
        PvA9gx3hOzH5xFTywuGXiu2ymjQE3aDMHlrnjaSNlIvcw55XPkw2vCUjjaXaWnAU
        DwyWEEJvUpleqq/boUaQe8DTnuxmRStSd6dhFopR8T+m5LaxrM3cGd/FkqTyiLmR
        Ilv1LwaxGwvEcpUcnmEcoVXTSBvn9r0LdTwD3EDVdoziPaf31yuGsW8UDEziyBnu
        4xgUv8iCUmgsM3U6at5FL47AdaRhGIN9ZN3HlTFdAQKBgQDgQ+uyJuzFdmayZOkN
        cSFmsNlPdzavRlRH6jNNcJNVM3DIQa4c4gsJeMxxRh4YyFzQKanCrdJiucbTzlAO
        c/R82EBU+tmkvlCVk1zzt+DnXwDvUmen92ur7zZgfkfARwtCIwatYjgMu5cZV8fB
        92KbsSV4z+r7D5ch3xcH+o3JIQKBgQC5Id34vHMT+Oe2o1Y2Ydpv43EXkrfUopmO
        o1QEG/ExRrsxeYlSJKes1vko/jx5w/rETMiMyAOquRxcJOwgTFJGtqj74y/h2zox
        w/Odw9+ua7nt0Q/ghvPJFjBcDBJmsrUBDtYFP2vUA1gT/B/50TOZO/MQmpqXwr0U
        cAMtu4iEsQKBgBwEAB6qRCvKxbuFZaO7PTvx3cPSla9Brueo9y22YYFkQrORmOmc
        x1owkAGai8n2xblvaviZ9E1G/fKZtGCJ1cH+1dKH38Z3y+NTnGoJz3u334sGFVLj
        Ur0Qzg8x107K0To62+uu+GeGy7Jrx9WQTO48K/0ypB0m7m9ZyivB/hJhAoGAe9ay
        xBNTK1YBsgNaxS/5zYSn/uvO+nb2HxsUNVd3pM26pGK3P/JzE0QOEaTXUWCOW0c9
        lCarhUUkOmMcbJKBKvo+2ZfkTMG4ENgSG0OOWf+HtRR2+WtsoeOs37XXjUkXmSiS
        c5o0B/NgtKWfwh111ZfrhPzWUpQapRQ0nB/pN1ECgYEAsayhkSeZCqR/Jr9fn3+8
        QteXPGCDnKuDo60nrtNDAhEsPWzwhyOlELTExJKo10EL9CtZAXnVdhxQ7Z27oFNc
        9SWTijo2WRDa6s8J86NBtI2kSMlLBjxFzMZe4+Glf5+gc80EvOEd8SUfi2qf2s2v
        qI3VtYg2YJoIZcTutyY2AN4=
        -----END PRIVATE KEY-----`
        const privateKey = await jose.importPKCS8(pkcs8, alg)

        const jwt = await new jose.SignJWT(clientAssertion)
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setIssuer(clientId)
            .setAudience("https://localhost:30003/oauth2/token")
            .setExpirationTime('3600S')
            .sign(privateKey)

        setClientAssertion(jwt);
    };

    async function submitAuthTokenRequest() {
        let form = {
            "code": code,
            "grant_type": grantType,
            "redirect_uri": redirectionUri,
            "code_verifier": codeVerifier,
            "client_assertion": clientAssertion,
            "client_assertion_type": clientAssertionType
        };

        const headers = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
        const result = await axios.post(tokenUrl, form, headers);
        try {
            setResponse(JSON.stringify(result.data, null, 2));
        } catch (e) {
            //add log here 
        }
    }

    return (
        <Container>
            <Row className="mb-3">
                <Col md={12} style={{ display: 'flex', justifyContent: 'left' }} >
                    Token Generation Request
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12}>
                    <InputGroup>
                        <InputGroup.Text>OIDC Token:</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" rows={8} value={idToken} readOnly="true" />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6} >
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            URL
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={tokenURL} onChange={event => setTokeUrl(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col md={6} style={{ display: 'flex', justifyContent: 'left' }} >
                    <Button as="input" type="button" value="Send" onClick={submitAuthTokenRequest} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={4}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            Client ID
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={clientId} onChange={event => setClientId(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            Code
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={code} onChange={event => setCode(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            GrantType
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={grantType} onChange={event => setGrantType(event.target.value)} />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={4}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            Redirection URL
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={redirectionUri} onChange={event => setRedirectionUri(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            Code Verifier
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={codeVerifier} onChange={event => setCodeVerifier(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            Client Assertion Type
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={clientAssertionType} onChange={event => setClientAssertionType(event.target.value)} />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12} style={{ display: 'flex', justifyContent: 'left' }} >
                    <Button as="input" type="button" value="Sign Assertion" onClick={handleSignAssersion} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6} >
                    <InputGroup>
                        <InputGroup.Text id="basic-addon3">
                            Client Assertion
                        </InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" rows={8} value={JSON.stringify(clientAssertion, null, 2)} onChange={event => setClientAssertion(event.target.value)} readOnly="true" />
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup>
                        <InputGroup.Text>Access Token:</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" rows={8} value={response} readOnly="true" />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default TokenRequest;