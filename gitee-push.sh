echo "\033[32m <<<<<<<<<\n正在拉取Gitee仓库远程代码...\n>>>>>>>>> \033[0m"
git pull gitee-origin master

echo "\033[32m <<<<<<<<<\n正在添加文件...\n>>>>>>>>> \033[0m"
git add .

echo "\033[33m <<<<<<<<<\n请填写备注信息（可为空）:\n>>>>>>>>> \033[0m"
read remarks
if [ ! -n "$remarks" ]
then
	remarks="deploy: 常规提交部署"
fi

git commit -m "$remarks"

echo -e "\033[32m <<<<<<<<<\n正在提交Gitee仓库代码...\n>>>>>>>>> \033[0m"
git push gitee-origin master

exit