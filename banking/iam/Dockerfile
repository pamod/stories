FROM eclipse-temurin:11 as build
ARG USERNAME=bankuser
ARG USER_UID=10014
ARG USER_GID=$USER_UID

# Create a new user with UID 10014
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME

RUN mkdir -p /workspace/app && chown -R $USERNAME /workspace/app && cd /workspace/app
WORKDIR /workspace/app

COPY ./wso2is-7.0.0.zip .
RUN apt update
RUN apt install unzip
RUN unzip ./wso2is-7.0.0.zip

EXPOSE 9443

ENTRYPOINT ["sh","/workspace/app/wso2is-7.0.0/bin/wso2server.sh"]
