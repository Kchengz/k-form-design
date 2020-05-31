/*
 * author kcz
 * date 2019-11-20
 * description 表单控件项
 */
// 基础控件
export const basicsList = [
  {
    type: "input", // 表单类型
    label: "输入框", // 标题文字
    icon: "icon-write",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    model: "", // 数据字段
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
    label: "文本框", // 标题文字
    icon: "icon-edit",
    options: {
      width: "100%", // 宽度
      minRows: 4,
      maxRows: 6,
      maxLength: null,
      defaultValue: "",
      clearable: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      placeholder: "请输入"
    },
    model: "", // 数据字段
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
    label: "数字输入框", // 标题文字
    icon: "icon-number",
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值
      min: null, // 可输入最小值
      max: null, // 可输入最大值
      precision: null,
      step: 1, // 步长，点击加减按钮时候，加减多少
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false, //是否禁用
      placeholder: "请输入"
    },
    model: "", // 数据字段
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
    label: "下拉选择器", // 标题文字
    icon: "icon-xiala",
    options: {
      width: "100%", // 宽度
      defaultValue: undefined, // 下拉选框请使用undefined为默认值
      multiple: false, // 是否允许多选
      disabled: false, // 是否禁用
      clearable: false, // 是否显示清除按钮
      hidden: false, // 是否隐藏，false显示，true隐藏
      placeholder: "请选择", // 默认提示文字
      dynamicKey: "",
      dynamic: false,
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
      showSearch: false // 是否显示搜索框，搜索选择的项的值，而不是文字
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
    type: "checkbox",
    label: "多选框",
    icon: "icon-duoxuan1",
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: [],
      dynamicKey: "",
      dynamic: false,
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
    type: "radio", // 表单类型
    label: "单选框", // 标题文字
    icon: "icon-danxuan-cuxiantiao",
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: "", // 默认值
      dynamicKey: "",
      dynamic: false,
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
    type: "date", // 表单类型
    label: "日期选择框", // 标题文字
    icon: "icon-calendar",
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      rangeDefaultValue: [], // 默认值，字符串 12:00:00
      range: false, // 范围日期选择，为true则会显示两个时间选择框（同时defaultValue和placeholder要改成数组），
      showTime: false, // 是否显示时间选择器
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
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
    type: "time", // 表单类型
    label: "时间选择框", // 标题文字
    icon: "icon-time",
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
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
    type: "rate", // 表单类型
    label: "评分", // 标题文字
    icon: "icon-pingfen_moren",
    options: {
      defaultValue: 0,
      max: 5, // 最大值
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
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
    type: "slider", // 表单类型
    label: "滑动输入条", // 标题文字
    icon: "icon-menu",
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值， 如果range为true的时候，则需要改成数组,如：[12,15]
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
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
    type: "uploadFile", // 表单类型
    label: "上传文件", // 标题文字
    icon: "icon-upload",
    options: {
      defaultValue: "",
      multiple: false,
      disabled: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      drag: false,
      downloadWay: "a",
      dynamicFun: "",
      width: "100%",
      limit: 3,
      data: "{}",
      fileName: "file",
      headers: {},
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
    label: "上传图片",
    icon: "icon-image",
    options: {
      defaultValue: "",
      multiple: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      width: "100%",
      data: "{}",
      limit: 3,
      placeholder: "上传",
      fileName: "image",
      headers: {},
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
  },
  {
    type: "treeSelect", // 表单类型
    label: "树选择器", // 标题文字
    icon: "icon-tree",
    options: {
      disabled: false, //是否禁用
      defaultValue: undefined, // 默认值
      multiple: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      clearable: false, // 是否显示清除按钮
      showSearch: false, // 是否显示搜索框，搜索选择的项的值，而不是文字
      treeCheckable: false,
      placeholder: "请选择",
      dynamicKey: "",
      dynamic: true,
      options: [
        {
          value: "1",
          label: "选项1",
          children: [
            {
              value: "11",
              label: "选项11"
            }
          ]
        },
        {
          value: "2",
          label: "选项2",
          children: [
            {
              value: "22",
              label: "选项22"
            }
          ]
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
    type: "cascader", // 表单类型
    label: "级联选择器", // 标题文字
    icon: "icon-guanlian",
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: undefined, // 默认值
      showSearch: false, // 是否显示搜索框，搜索选择的项的值，而不是文字
      placeholder: "请选择",
      clearable: false, // 是否显示清除按钮
      dynamicKey: "",
      dynamic: true,
      options: [
        {
          value: "1",
          label: "选项1",
          children: [
            {
              value: "11",
              label: "选项11"
            }
          ]
        },
        {
          value: "2",
          label: "选项2",
          children: [
            {
              value: "22",
              label: "选项22"
            }
          ]
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
    type: "batch",
    label: "动态表格",
    icon: "icon-biaoge",
    list: [],
    options: {
      scrollY: 0,
      disabled: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      showLabel: false,
      hideSequence: false,
      width: "100%"
    },
    model: "",
    key: ""
  },
  {
    type: "editor",
    label: "富文本",
    icon: "icon-LC_icon_edit_line_1",
    list: [],
    options: {
      height: 300,
      placeholder: "请输入",
      defaultValue: "",
      chinesization: true,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      showLabel: false,
      width: "100%"
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
    label: "开关", // 标题文字
    icon: "icon-kaiguan3",
    options: {
      defaultValue: false, // 默认值 Boolean 类型
      hidden: false, // 是否隐藏，false显示，true隐藏
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
    type: "button", // 表单类型
    label: "按钮", // 标题文字
    icon: "icon-button-remove",
    options: {
      type: "primary",
      handle: "submit",
      dynamicFun: "",
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    key: ""
  },
  {
    type: "alert",
    label: "警告提示",
    icon: "icon-zu",
    options: {
      type: "success",
      description: "",
      showIcon: false,
      banner: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      closable: false
    },
    key: ""
  },
  {
    type: "text",
    label: "文字",
    icon: "icon-zihao",
    options: {
      textAlign: "left",
      hidden: false, // 是否隐藏，false显示，true隐藏
      showRequiredMark: false
    },
    key: ""
  },
  {
    type: "html",
    label: "HTML",
    icon: "icon-ai-code",
    options: {
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: "<strong>HTML</strong>"
    },
    key: ""
  }
];

// 高级控件
// export const highList = [];

// import { Alert } from "ant-design-vue";

// 自定义组件
export const customComponents = {
  title: "自定义组件",
  list: [
    // {
    //   label: "测试",
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
// window.$customComponentList = customComponents.list;

// 布局控件
export const layoutList = [
  {
    type: "divider",
    label: "分割线",
    icon: "icon-fengexian",
    options: {
      orientation: "left"
    },
    key: "",
    model: ""
  },
  {
    type: "card",
    label: "卡片布局",
    icon: "icon-qiapian",
    list: [],
    key: "",
    model: ""
  },
  {
    type: "grid",
    label: "栅格布局",
    icon: "icon-zhage",
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
    label: "表格布局",
    icon: "icon-biaoge",
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
      customStyle: ""
    },
    key: "",
    model: ""
  }
];
