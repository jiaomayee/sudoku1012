// 测试专家难度数独API返回格式 - 使用Node.js内置http模块
const http = require('http');

function testExpertPuzzleAPI() {
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/api/v1/sudoku/puzzles/random/expert',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        let data = '';
        
        console.log('API响应状态码:', res.statusCode);
        
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const jsonData = JSON.parse(data);
                console.log('API响应数据类型:', typeof jsonData);
                console.log('API响应数据结构:', JSON.stringify(jsonData, null, 2));
                console.log('是否包含puzzle字段:', 'puzzle' in jsonData);
                if ('puzzle' in jsonData) {
                    console.log('puzzle字段类型:', typeof jsonData.puzzle);
                }
                console.log('是否包含solution字段:', 'solution' in jsonData);
                if ('solution' in jsonData) {
                    console.log('solution字段类型:', typeof jsonData.solution);
                }
            } catch (error) {
                console.error('解析JSON出错:', error);
                console.log('原始响应数据:', data);
            }
        });
    });

    req.on('error', (error) => {
        console.error('测试API出错:', error);
    });

    req.end();
}

testExpertPuzzleAPI();