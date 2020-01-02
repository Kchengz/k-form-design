/*
 * author kcz
 * date 2019-11-20
 * description 表单控件项
 */
// 基础控件
export const basicsList = [
  {
    type: "input", // 表单类型
    name: "单行文本", // 标题文字
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    model: "", // 数据绑定Key
    key: "",
    rules: [
      //验证规则
      {
        required: false, // 必须填写
        message: "必填项"
      }
    ]
  },
  {
    type: "textarea", // 表单类型
    name: "多行文本", // 标题文字
    options: {
      width: "100%", // 宽度
      minRows: 4,
      maxRows: 6,
      defaultValue: "",
      disabled: false,
      placeholder: "请输入"
    },
    model: "", // 数据绑定Key
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "number", // 表单类型
    name: "计数器", // 标题文字
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值
      min: 0, // 可输入最小值
      max: 100, // 可输入最大值
      step: 1, // 步长，点击加减按钮时候，加减多少
      disabled: false, //是否禁用
      placeholder: "请输入"
    },
    model: "", // 数据绑定Key
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "radio", // 表单类型
    name: "单选框组", // 标题文字
    options: {
      disabled: false, //是否禁用
      defaultValue: "", // 默认值
      options: [
        // 按钮选项配置，value为选项值，label为选项文字
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        },
        {
          value: "3",
          label: "选项3"
        }
      ]
    },
    model: "", // 数据绑定Key
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "checkbox",
    name: "多选框组",
    options: {
      disabled: false, //是否禁用
      defaultValue: [],
      options: [
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        },
        {
          value: "3",
          label: "选项3"
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "time", // 表单类型
    name: "时间选择器", // 标题文字
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      disabled: false, // 是否禁用
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择",
      format: "HH:mm:ss" // 展示格式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "date", // 表单类型
    name: "日期选择器", // 标题文字
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      // rangeDefaultValue: ["2015-10-15", "2015-10-15"], // 默认值，字符串 12:00:00
      range: false, // 范围日期选择，为true则会显示两个时间选择框（同时defaultValue和placeholder要改成数组），
      showTime: false, // 是否显示时间选择器
      disabled: false, // 是否禁用
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择",
      rangePlaceholder: ["开始时间", "结束时间"],
      format: "YYYY-MM-DD" // 展示格式  （请按照这个规则写 YYYY-MM-DD HH:mm:ss，区分大小写）
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "rate", // 表单类型
    name: "评分", // 标题文字
    options: {
      defaultValue: 0,
      max: 5, // 最大值
      disabled: false, // 是否禁用
      allowHalf: false // 是否允许半选
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "select", // 表单类型
    name: "下拉选择框", // 标题文字
    options: {
      width: "100%", // 宽度
      defaultValue: undefined, // 下拉选框请使用undefined为默认值
      multiple: false, // 是否允许多选
      disabled: false, // 是否禁用
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择", // 默认提示文字
      options: [
        // 下拉选择项配置
        {
          value: "1",
          label: "下拉框1"
        },
        {
          value: "2",
          label: "下拉框2"
        }
      ],
      filterable: false // 是否显示搜索框，搜索选择的项的值，而不是文字
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "switch", // 表单类型
    name: "开关", // 标题文字
    options: {
      defaultValue: false, // 默认值 Boolean 类型
      disabled: false // 是否禁用
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "slider", // 表单类型
    name: "滑动输入条", // 标题文字
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值， 如果range为true的时候，则需要改成数组,如：[12,15]
      disabled: false, // 是否禁用
      min: 0, // 最小值
      max: 100, // 最大值
      step: 1, // 步长，取值必须大于 0，并且可被 (max - min) 整除
      showInput: false // 是否显示输入框，range为true时，请勿开启
      // range: false // 双滑块模式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "button", // 表单类型
    name: "按钮", // 标题文字
    options: {
      type: "primary",
      handle: "submit",
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    key: ""
  },
  {
    type: "alert",
    name: "提示",
    options: {
      type: "success",
      description: "",
      showIcon: false,
      banner: false,
      closable: false
    },
    key: ""
  },
  {
    type: "text",
    name: "文字",
    options: {
      textAlign: "right",
      showRequiredMark: false
    },
    key: ""
  },
  {
    type: "html",
    name: "HTML",
    options: {
      defaultValue: "<strong>This is a HTML</strong>"
    },
    key: ""
  }
];

// 高级控件
export const highList = [
  {
    type: "uploadFile", // 表单类型
    name: "上传文件", // 标题文字
    options: {
      multiple: false,
      disabled: false,
      drag: false,
      width: "100%",
      limit: 3,
      data: "{}",
      action: "http://cdn.kcz66.com/uploadFile.txt",
      placeholder: "上传"
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "uploadImg",
    name: "上传图片",
    options: {
      multiple: false,
      disabled: false,
      width: "100%",
      data: "{}",
      limit: 3,
      placeholder: "上传",
      action: "http://cdn.kcz66.com/upload-img.txt",
      listType: "picture-card"
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  }
];

// import { Alert } from "ant-design-vue";

// const UploadImg = () => import("../../UploadImg");
// 自定义组件
export const customComponents = {
  title: "自定义组件",
  list: [
    // {
    //   name: "测试",
    //   type: "jkjksdf",
    //   component: Alert,
    //   options: {
    //     multiple: false,
    //     disabled: false,
    //     width: "100%",
    //     data: "{}",
    //     limit: 3,
    //     placeholder: "上传",
    //     action: "",
    //     listType: "picture-card"
    //   },
    //   model: "",
    //   key: "",
    //   rules: [
    //     {
    //       required: false,
    //       message: "必填项"
    //     }
    //   ]
    // }
  ]
};

// 布局控件
export const layoutList = [
  {
    type: "divider",
    name: "分割线",
    options: {
      orientation: "left"
    },
    key: "",
    model: ""
  },
  {
    type: "card",
    name: "卡片布局",
    list: [],
    key: "",
    model: ""
  },
  {
    type: "grid",
    name: "栅格布局",
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0
    },
    key: "",
    model: ""
  },
  {
    type: "table",
    name: "表格布局",
    trs: [
      {
        tds: [
          {
            colspan: 1,
            rowspan: 1,
            list: []
          },
          {
            colspan: 1,
            rowspan: 1,
            list: []
          }
        ]
      },
      {
        tds: [
          {
            colspan: 1,
            rowspan: 1,
            list: []
          },
          {
            colspan: 1,
            rowspan: 1,
            list: []
          }
        ]
      }
    ],
    options: {
      width: "100%",
      bordered: true,
      bright: false,
      small: true,
      customClass: ""
    },
    key: "",
    model: ""
  }
];
