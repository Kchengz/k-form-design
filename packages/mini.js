/*
 * @Description: 组件输出文件,不打包antd ui组件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-20 00:31:00
 */

// 导入样式
import "../styles/form-design.less";
// 导入antD样式
import "./utils/antdStyle";

// 导出本地iconfont
import "../static/icons/iconfont";

import { pluginManager, revoke, nodeSchema } from "./utils/getUtility";

/**
 * @Author: kcz
 * @description: 配置组件及添加自定义组件
 * @param {json}
 * @return: Boolean
 */
function setFormDesignConfig(config) {
  if (!config || typeof config !== "object") {
    console.error("传入config的参数必须为对象");
    return false;
  }
  try {
    if (config.list && config.list.length > 0) {
      nodeSchema.addSchemaGroup({
        title: config.title || "自义定组件",
        list: config.list.map(item => item.type)
      });
    }

    // 存储自定义组件
    const customComponentList = config.list || [];
    const schemas = customComponentList.map(item => {
      pluginManager.addComponent(item.type, item.component);
      delete item.component;
      return item;
    });

    nodeSchema.addSchemas(schemas);

    // uploadFile 配置 start
    // 配置uploadFile默认上传地址
    const uploadFile = nodeSchema.getSchemaByType("uploadFile");
    uploadFile.options.action =
      config.uploadFile || "http://cdn.kcz66.com/uploadFile.txt";

    // 配置uploadFile默认额外参数
    uploadFile.options.data = JSON.stringify(config.uploadFileData || {});

    // 配置uploadFile默认name
    uploadFile.options.fileName = config.uploadFileName || "file";
    // 配置uploadFile默认headers
    uploadFile.options.headers = config.uploadFileHeaders || {};
    // uploadFile 配置 end

    // uploadImage配置 start
    // 配置uploadImage默认上传地址
    const uploadImg = nodeSchema.getSchemaByType("uploadImg");
    uploadImg.options.action =
      config.uploadImage || "http://cdn.kcz66.com/upload-img.txt";
    // 配置uploadImage默认额外参数
    uploadImg.options.data = JSON.stringify(config.uploadImageData || {});
    // 配置uploadFile默认name
    uploadImg.options.fileName = config.uploadImageName || "image";
    // 配置uploadFile默认headers
    uploadImg.options.headers = config.uploadImageHeaders || {};
    // uploadImage配置 end

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

/**
 * @author lizhichao<meteoroc@outlook.com>
 * @description 配置k-form-build(预览时)，暂只支持dynamicData的设置
 * @param { object }config
 */
function setFormBuildConfig(config) {
  if (!config || typeof config !== "object") {
    console.error("传入setFormBuildConfig的参数必须为对象");
    return false;
  }
  if (config.dynamicData) {
    window.$kfb_dynamicData = config.dynamicData;
  }
}

// 这里可以用es6的解构语法导入组件
export { setFormDesignConfig, setFormBuildConfig, pluginManager, revoke };

// 这里默认导入全部组件
// export default {
//   setConfig: setFormDesignConfig,
//   setFormDesignConfig: setFormDesignConfig,
//   setFormBuildConfig: setFormBuildConfig,
//   pluginManager
// };
