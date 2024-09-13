# FAPI-viewer: Experience Secure Financial APIs with WSO2 IAM (React.js)

## Overview

This React.js application, FAPI-viewer, empowers developers to:

Explore FAPI Flows: Gain hands-on experience with Financial-Grade API (FAPI) security concepts through interactive components.
Reference Implementation: Leverage this code as a foundation for your own FAPI-compliant projects, particularly if you're a financial institution or bank aiming to expose APIs securely to Third-Party Providers (TPPs).

## Prerequisites

A running demonstration setup is essential. For detailed instructions, refer to:

https://github.com/pamod/stories/tree/main/banking

## Getting Started

Run the Application:
Bash
````
npm start
````
Use code with caution.

This launches the FAPI-viewer at http://localhost:3000/.

![fapi-step1](https://github.com/pamod/stories/blob/main/banking/examples/images/FAPI_Step_1.png)

### Key Features

#### Dynamic Client Registration (DCR): (http://localhost:3000/dcr)

Register your application with WSO2 IAM using the provided message structure.
Click "Send" to create the client.
Ensure you have the client certificate for future steps.

![fapi-client-reg](https://github.com/pamod/stories/blob/main/banking/examples/images/FAPI_client_reg.png)

![verify-client](https://github.com/pamod/stories/blob/main/banking/examples/images/FAPI_verify_client.png)

![verify-client](https://github.com/pamod/stories/blob/main/banking/examples/images/FAPI_upload_cert.png)

#### Certificate Management (Optional)

If you don't have existing certificates, use the following commands to generate them (caution: for demonstration purposes only):


#### Generate keystore and CSRs (replace with your own certificate generation process)
````
Generate keystore and CSRs
 
keytool -v -export -file wso2demoCA.cer -keystore clientstore.jks -alias wso2demoCA
openssl x509 -inform DER -in wso2demoCA.cer -out wso2demo.crt

Generate self-sign certificate

openssl genrsa 2048 > client-private.key
chmod 400 client-private.key
openssl req -new -x509 -nodes -sha256 -days 365 -key client-private.key -out wso2demo.cert

Generate PEM for JWKIS information

openssl x509 -in wso2demo.crt -outform PEM -out wso2demo.pem
openssl x509 -in wso2demo.pem -pubkey -out wso2demo-public.pem

Extract key information

openssl x509 -in wso2demo.crt -text -noout
````

Currently, the certificate information is hardcoded. Update files like "PushAuthRequest.jsx" and "TokenRequest.jsx" with your generated certificates.
Use code with caution.

#### Sending a Push Authorization Request (PAR): (http://localhost:3000/par)

Provide the client ID obtained during DCR.
Click "Sign" for both the request and assertion.
Click "Send" to generate the request code.
Click "Get ID Token" to retrieve the ID token.
Obtaining an Access Token

![get-id-token](https://github.com/pamod/stories/blob/main/banking/examples/images/FAPI_Auth_Error.png)
![get-id-token](https://github.com/pamod/stories/blob/main/banking/examples/images/FAPI_Push_Auth_Request.png)


Once you have the ID token, proceed to the access token page and:

Enter the client ID.
Sign the assertion.
Send the request.
Upon successful authorization, you'll receive the access token.

![get-id-token](https://github.com/pamod/stories/blob/main/banking/examples/images/FAPI_Token_Genration_Request.png)

Note: This covers obtaining the access token. FAPI flows often involve establishing a Mutual TLS (MTLS) connection between the client and resource server using the obtained credentials.

## Further Exploration

Dig deeper into the code for a comprehensive understanding of FAPI interaction with WSO2 IAM. Feel free to tailor this application to fit your specific FAPI implementation needs.

## Contributions

We welcome contributions to this project! Please submit pull requests with improvements or bug fixes.

## Important Notes:

The certificate generation commands are for demonstration purposes only. You should implement a secure certificate management process in production environments.
This README provides a high-level overview. Consider adding detailed instructions or comments within the code for specific functionalities.






