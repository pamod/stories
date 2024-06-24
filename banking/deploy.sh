#compress products

cd ./am && zip -r wso2am-4.3.0.zip ./wso2am-4.3.0 && cd ..
cd ./iam && zip -r wso2is-7.0.0.zip ./wso2is-7.0.0 && cd ..
cd ./mi && zip -r wso2mi-4.2.0.zip wso2mi-4.2.0 && cd ..

#Build images

cd ./am && sh ./exec.sh && cd ..
cd ./iam && sh ./exec.sh && cd ..
cd ./mi && sh ./exec.sh && cd ..
cd ./service/bank-project && sh ./exec.sh && cd ../..
cd ./ui/bank-app && sh ./exec.sh && cd ../..

#Create Deployments 

kubectl create -f ./am/k8s/deployment.yaml
kubectl create -f ./iam/k8s/deployment.yaml
kubectl create -f ./mi/k8s/deployment.yaml
kubectl create -f ./service/k8s/deployment.yaml
kubectl create -f ./ui/k8s/deployment.yaml

#Create Services

kubectl create -f ./am/k8s/service.yaml
kubectl create -f ./iam/k8s/service.yaml
kubectl create -f ./mi/k8s/service.yaml
kubectl create -f ./service/k8s/service.yaml
kubectl create -f ./ui/k8s/service.yaml
