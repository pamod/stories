#Remove all services 

kubectl delete service payment-ui-service
kubectl delete service wso2am-service
kubectl delete service wso2iam-service
kubectl delete service wso2mi-service
kubectl delete service paymentsvc
kubectl delete service wso2mi-dashboard-svc

#Remove all deployments 

kubectl delete deployment payment-ui-deployment
kubectl delete deployment wso2am-deployment
kubectl delete deployment wso2iam-deployment
kubectl delete deployment wso2mi-deployment
kubectl delete deployment paymentsvc
kubectl delete deployment wso2mi-dashboard-deployment

#Remove all images 

docker rmi -f wso2.demo/ui:v1.0.0
docker rmi -f wso2.demo/wso2apim:v4.3.0
docker rmi -f wso2.demo/wso2iam:v7.0.0
docker rmi -f wso2.demo/wso2mi:v4.2.0
docker rmi -f wso2.demo/paymentsvc:v1
docker rmi -f wso2.demo/wso2mi-dashboard

#Remove all orphen images

#docker rmi -f $(docker images -f "dangling=true" -q)
