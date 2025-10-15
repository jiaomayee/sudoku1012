@echo off
REM Sudoku 前端服务启动脚本
REM 使用方法：双击运行此脚本

REM 设置 Node.js 环境变量
set PATH=%PATH%;C:\Program Files\nodejs

REM 启动前端开发服务器
cd frontend
start /B npm run dev

REM 显示提示信息
echo 前端服务已启动，请检查 dev_server.txt 文件查看服务状态
echo 按任意键继续...
pause > nul