from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# 导入路由
from routes.sudoku_routes import router as sudoku_router
from routes.user_routes import router as user_router
from routes.stats_routes import router as stats_router

# 创建FastAPI应用实例
app = FastAPI(
    title="数独游戏API",
    description="提供数独游戏相关的API服务",
    version="1.0.0"
)

# 配置CORS中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 明确指定前端地址
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(sudoku_router, prefix="/sudoku", tags=["sudoku"])
app.include_router(user_router, prefix="/user", tags=["user"])
app.include_router(stats_router, prefix="/stats", tags=["stats"])

# 根路径
@app.get("/")
def read_root():
    return {"message": "数独游戏API服务正在运行"}

# 健康检查端点
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# 启动应用
if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)