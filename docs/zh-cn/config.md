### 配置默认上传接口
```javascript
// 引入 setFormDesignConfig 函数
import { setFormDesignConfig } form 'k-form-design'

setFormDesignConfig({
  uploadFile: "", // 上传文件地址
  uploadImage: "" // 上传图片地址
})
```
### 文件上传响应数据
```
{
  "code": 0, // 判断文件上传是否成功，结果为0成功，否则上传失败
  "data":
    {
      "fileId": "文件ID",
      "url": "文件下载地址"
    }
}
```
### 图片上传响应数据
```
{
  "code": 0, // 判断图片上传是否成功，结果为0成功，否则上传失败
  "data":
    {
      "url": "图片url"
    }
}
```