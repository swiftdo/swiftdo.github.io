#!/bin/bash

nvm use v18.20.8 --default

# 使用 pwd 命令获取当前脚本所在目录作为项目根目录
PROJECT_DIR=$(pwd)
# 定义打包后文件存放的目录
BUILD_DIR="$PROJECT_DIR/docs/.vuepress/dist"
# 定义服务器上项目部署的目录
DEPLOY_DIR="/www/wwwroot/oldbird.run"
# 定义远程服务器的 IP 地址和用户名
SERVER="root@106.52.236.186"
# 定义 SSH 端口
SSH_PORT=2002

# 进入项目目录
cd $PROJECT_DIR

# 使用 Yarn 安装依赖
export NODE_OPTIONS=--openssl-legacy-provider
yarn docs:build


# 检查打包是否成功
if [ $? -eq 0 ]; then
    echo "项目打包成功"
    # 提示用户确认是否上传
    rsync -avz -e "ssh -p $SSH_PORT" $BUILD_DIR/ $SERVER:$DEPLOY_DIR
    # 检查上传是否成功
    if [ $? -eq 0 ]; then
        echo "文件上传成功"
    else
        echo "文件上传失败"
    fi
else
    echo "项目打包失败"
fi

echo "提交代码到仓库"

git add .
git commit -m "update"
git push