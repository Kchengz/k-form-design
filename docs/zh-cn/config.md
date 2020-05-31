# 配置默认上传接口
## 使用KFormDesign的setConfig函数
```javascript
import KFormDesign from 'k-form-design'

KFormDesign.setConfig({
  uploadFile: "", // 上传文件地址
  uploadImage: "", // 上传图片地址
  uploadFileName: "", // 上传文件name
  uploadImageName: "", // 上传图片name
  uploadFileData: { data: 223 }, // 上传文件额外参数
  uploadImageData: { data: 223 } // 上传图片额外参数
  uploadFileHeaders: { data: 1545 }, // 上传文件请求头部
  uploadImageHeaders: { data: 1545 } // 上传图片请求头部
})
```

## 或者单独引入设置函数
```javascript
// 引入 setFormDesignConfig 函数
import { setFormDesignConfig } from 'k-form-design'

setFormDesignConfig({
  uploadFile: "", // 上传文件地址
  uploadImage: "", // 上传图片地址
  uploadFileName: "", // 上传文件name
  uploadImageName: "", // 上传图片name
  uploadFileData: { data: 223 }, // 上传文件额外参数
  uploadImageData: { data: 223 } // 上传图片额外参数
  uploadFileHeaders: { data: 1545 }, // 上传文件请求头部
  uploadImageHeaders: { data: 1545 } // 上传图片请求头部
})
```
## 文件上传响应数据
```json
{
  "code": 0, // 判断文件上传是否成功，结果为0成功，否则上传失败
  "data":
    {
      "fileId": "文件ID",
      "url": "文件下载地址"
    }
}
```
## 图片上传响应数据
```json
{
  "code": 0, // 判断图片上传是否成功，结果为0成功，否则上传失败
  "data":
    {
      "url": "图片url"
    }
}
```

