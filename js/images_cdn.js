// 定义接口URL
const apiUrl = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';

// 发送GET请求获取JSON数据
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // 获取url字段
        const url = data.images[0].url;
        // 拼接完整URL
        const fullUrl = 'https://cn.bing.com' + url;
        document.body.style.backgroundImage = `url(${fullUrl})`;
    })
    .catch((error) => {
        console.error('请求失败:', error);
    });
