// 应用版本配置
// 生成包含日期和版本序号的版本号
const generateVersion = () => {
  // 获取当前日期作为版本标识
  const now = new Date();
  const versionDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  // 从localStorage获取版本计数器，如果不存在则初始化为1
  let versionCount = localStorage.getItem(`version_${versionDate}_count`) || 1;
  
  return `${versionDate}.${versionCount}`;
};

export const APP_VERSION = generateVersion();