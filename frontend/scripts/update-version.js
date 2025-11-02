// 版本更新脚本
// 使用方法: node scripts/update-version.js [major|minor|patch|x.y.z]

const fs = require('fs');
const path = require('path');

// 获取版本配置文件路径
const versionFilePath = path.resolve(__dirname, '../src/config/version.js');

// 读取当前版本
function getCurrentVersion() {
  const content = fs.readFileSync(versionFilePath, 'utf8');
  const match = content.match(/export const APP_VERSION = '(\d+\.\d+\.\d+)'/);
  if (match) {
    return match[1];
  }
  throw new Error('无法读取当前版本号');
}

// 解析版本号为数字数组
function parseVersion(version) {
  return version.split('.').map(num => parseInt(num, 10));
}

// 格式化版本号数组为字符串
function formatVersion(versionParts) {
  return versionParts.join('.');
}

// 增加版本号
function incrementVersion(currentVersion, type) {
  const [major, minor, patch] = parseVersion(currentVersion);
  
  switch (type) {
    case 'major':
      return formatVersion([major + 1, 0, 0]);
    case 'minor':
      return formatVersion([major, minor + 1, 0]);
    case 'patch':
      return formatVersion([major, minor, patch + 1]);
    default:
      // 检查是否为有效的语义化版本号格式
      if (/^\d+\.\d+\.\d+$/.test(type)) {
        return type;
      }
      throw new Error('无效的版本类型，请使用 major, minor, patch 或指定 x.y.z 格式的版本号');
  }
}

// 更新版本配置文件
function updateVersionFile(newVersion) {
  const content = fs.readFileSync(versionFilePath, 'utf8');
  const newContent = content.replace(
    /export const APP_VERSION = '\d+\.\d+\.\d+'/, 
    `export const APP_VERSION = '${newVersion}'`
  );
  fs.writeFileSync(versionFilePath, newContent, 'utf8');
  console.log(`版本号已更新为: ${newVersion}`);
}

// 主函数
function main() {
  try {
    const currentVersion = getCurrentVersion();
    const args = process.argv.slice(2);
    let updateType = args[0] || 'patch';
    
    const newVersion = incrementVersion(currentVersion, updateType);
    updateVersionFile(newVersion);
    
  } catch (error) {
    console.error(`更新版本失败: ${error.message}`);
    process.exit(1);
  }
}

// 执行主函数
main();