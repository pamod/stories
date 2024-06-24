#Remove all services 

kubectl delete service payment-ui-service
kubectl delete service wso2am-service
kubectl delete service wso2iam-service
kubectl delete service wso2mi-service
kubectl delete service paymentsvc

#Remove all deployments 

kubectl delete deployment payment-ui-deployment
kubectl delete deployment wso2am-deployment
kubectl delete deployment wso2iam-deployment
kubectl delete deployment wso2mi-deployment
kubectl delete deployment paymentsvc

#Remove all images 

docker rmi -f wso2.demo/ui:v1.0.0
docker rmi -f wso2.demo/wso2apim:v4.3.0
docker rmi -f wso2.demo/wso2iam:v7.0.0
docker rmi -f wso2.demo/wso2mi:v4.2.0
docker rmi -f wso2.demo/paymentsvc:v1

#Remove all orphen images

#docker rmi -f $(docker images -f "dangling=true" -q)
