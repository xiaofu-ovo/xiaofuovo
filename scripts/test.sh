# 链接到服务器
rm -rf ./dist
npm run build

scp -r ./dist/ root@47.101.206.163:/root/dist/