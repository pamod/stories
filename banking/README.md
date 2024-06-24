
**Banking Demonstration App**

This repository showcases a sample banking application built using a microservices architecture, secured with WSO2 products, and orchestrated using Kubernetes (k8s) for container management.

**Technologies Used**

* **API Gateway:** WSO2 API Manager 4.3.0
* **Identity & Access Management:** WSO2 Identity Server 7.0
* **Integration Platform:** WSO2 Micro Integrator (MI) 4.2.0
* **Microservice Framework:** SpringBoot (for payment service)
* **User Interface:** React
* **Container Orchestration:** Kubernetes (k8s)

**Project Structure**

* **am:** Contains the configuration files for WSO2 API Manager.
* **iam:** Contains the configuration files for WSO2 Identity Server.
* **mi:** Contains the configuration files for WSO2 Micro Integrator.
* **service:** A SpringBoot application simulating a payment processing service.
* **ui:** The React application for user interaction with banking functionalities.
* **README.md:** This file (you are currently reading it!)

**Prerequisites**

* Kubernetes cluster up and running on your system. The example was tested with Rancher Desktop 1.13.1 running on Mac OS 13.5 
* Basic understanding of WSO2 API Manager, Identity Server, WSO2 Micro Integrator, SpringBoot, React, and Kubernetes concepts.

**Running the Application**

**1. Deploying the Application on Kubernetes**

The deploy.sh script in the root directory automates building Docker images and deploying the application to your Kubernetes cluster.

Navigate to the root directory of the project.

Run the following command:

```
Bash ./deploy.sh
```

This script will:
* Build Docker images for each service (API Gateway, Identity Server, Micro Integrator, payment service, and UI)
* Deploy the application components to your Kubernetes cluster using the manifests in the kubernetes directory.

Run the following commands in CLI to verify the deployment 

```
docker images
```

The following images should be listed 

```
wso2.demo/paymentsvc                                 v1                     
wso2.demo/ui                                         v1.0.0                 
wso2.demo/wso2apim                                   v4.3.0                
wso2.demo/wso2iam                                    v7.0.0                 
wso2.demo/wso2mi                                     v4.2.0                
```

```
kubectl get deployment
```

```
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
wso2am-deployment       1/1     1            1           15m
wso2mi-deployment       1/1     1            1           15m
wso2iam-deployment      1/1     1            1           15m
paymentsvc              1/1     1            1           15m
payment-ui-deployment   1/1     1            1           15m
```

```
kubectl get service
```
```
NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                         AGE
wso2am-service       NodePort    10.43.139.251   <none>        9445:30004/TCP,8245:30005/TCP   16m
wso2iam-service      NodePort    10.43.180.235   <none>        9444:30003/TCP                  16m
wso2mi-service       NodePort    10.43.198.20    <none>        8290:30349/TCP                  16m
paymentsvc           NodePort    10.43.250.31    <none>        8080:30001/TCP                  16m
payment-ui-service   NodePort    10.43.203.84    <none>        3000:30010/TCP                  16m
```
**2. Accessing the UI**

Once the application is deployed, you should be able to access the React UI. 

The UI Console can be accessed using following URLs

Payment Service 'Try-Out' : http://localhost:30001/swagger-ui/index.html 
WSO2 IAM : https://localhost:30003/ 
WSO2 APIM Publisher : https://localhost:30004/publisher/apis 
WSO2 APIM Dev Portal : https://localhost:30004/devportal/apis
React UI (M-Mobile App) : http://localhost:30010/  

**3. Undeploy**

To uninstall/undeploy run the following command 

```
Bash ./undeploy.sh
```

**Common Scenarios:**

The demonstration pre-creted two users with roles 'User' and 'Manager'. The following credentials could be used to login to the M-Mobile App

```
username : user
password : User@123

username: manager
password : Manager@123
```

**Further Instructions**

The following commands will be useful

Create K8S deployment (Imperative)

```
kubectl create deploy <name> --image <imgname> && kubectl scale deploy <name> --replicas 3  --dry-run=client -o yaml > deployment.yaml
kubectl create -f app.yaml
```

Create K8S service (Imperative)

```
kubectl expose deployment <name> --type=NodePort --port=8080 --target-port=8080  --name=<service-name> --dry-run=client -o yaml > service.yaml
```

Update docker image and restart deployment 

```
kubectl rollout restart deployment/<deployment>
```

View logs related to pod
```
kubectl logs -f <podname>
```