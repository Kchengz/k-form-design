# k-form-build
## 介绍
表单构建组件，将表单设计器生成的json数据构建成表单

## 基础用法

![3](assets/3.png)

> 代码示例：

```  html
<template>
  <div>
    <k-form-build :value="jsonData" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsonData: {
        list: [
          {
            type: 'input',
            label: '单行文本',
            options: {
              width: '100%',
              defaultValue: '',
              placeholder: '请输入',
              disabled: false
            },
            model: 'input_1577875678405',
            key: 'input_1577875678405',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'date',
            label: '日期选择器',
            options: {
              width: '100%',
              defaultValue: '',
              range: false,
              showTime: false,
              disabled: false,
              clearable: false,
              placeholder: '请选择',
              rangePlaceholder: ['开始时间', '结束时间'],
              format: 'YYYY-MM-DD'
            },
            model: 'date_1577877450971',
            key: 'date_1577877450971',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'textarea',
            label: '多行文本',
            options: {
              width: '100%',
              minRows: 4,
              maxRows: 6,
              defaultValue: '',
              disabled: false,
              placeholder: '请输入'
            },
            model: 'textarea_1577877446659',
            key: 'textarea_1577877446659',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'rate',
            label: '评分',
            options: {
              defaultValue: 0,
              max: 5,
              disabled: false,
              allowHalf: false
            },
            model: 'rate_1577877468717',
            key: 'rate_1577877468717',
            rules: [{ required: true, message: '必填项' }]
          }
        ],
        config: {
          layout: 'horizontal',
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ''
        }
      }
    }
  }
}
</script>
```

## 获取数据

[filelabel](./form-build1.html ':include :type=iframe width=100% height=320px')

> 使用getData函数获取数据

```  html
<template>
  <div>
    <k-form-build ref="kfb" :value="jsonData" />
    <button @click="handleGetData">获取数据</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsonData: {
        list: [
          {
            type: 'input',
            label: '单行文本',
            options: {
              width: '100%',
              defaultValue: '',
              placeholder: '请输入',
              disabled: false
            },
            model: 'input_1577875678405',
            key: 'input_1577875678405',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'date',
            label: '日期选择器',
            options: {
              width: '100%',
              defaultValue: '',
              range: false,
              showTime: false,
              disabled: false,
              clearable: false,
              placeholder: '请选择',
              rangePlaceholder: ['开始时间', '结束时间'],
              format: 'YYYY-MM-DD'
            },
            model: 'date_1577877450971',
            key: 'date_1577877450971',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'textarea',
            label: '多行文本',
            options: {
              width: '100%',
              minRows: 4,
              maxRows: 6,
              defaultValue: '',
              disabled: false,
              placeholder: '请输入'
            },
            model: 'textarea_1577877446659',
            key: 'textarea_1577877446659',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'rate',
            label: '评分',
            options: {
              defaultValue: 0,
              max: 5,
              disabled: false,
              allowHalf: false
            },
            model: 'rate_1577877468717',
            key: 'rate_1577877468717',
            rules: [{ required: true, message: '必填项' }]
          }
        ],
        config: {
          layout: 'horizontal',
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ''
        }
      }
    }
  },
  methods: {
    handleGetData () {
      // 使用getData函数获取数据
      this.$refs.kfb.getData().then(values => {
        console.log('验证通过', values)
      }).catch(() => {
        console.log('验证未通过，获取失败')
      })
    }
  }
}
</script>
```

## 表单赋值数据

![1](assets/1-1585492231794.gif)

> 使用setData函数设置一组输入控件的值

```html
<template>
  <div>
    <k-form-build ref="kfb" :value="jsonData" />
    <button @click="handleChange">修改数据</button>
    <button @click="handleReset">重置表单</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jsonData: {
        list: [
          {
            type: "input",
            label: "输入框",
            icon: "icon-write",
            options: {
              type: "text",
              width: "100%",
              defaultValue: "",
              placeholder: "请输入",
              clearable: false,
              maxLength: null,
              disabled: false
            },
            model: "input_1585491903047",
            key: "input_1585491903047",
            rules: [
              {
                required: false,
                message: "必填项"
              }
            ]
          },
          {
            type: "rate",
            label: "评分",
            options: {
              defaultValue: 0,
              max: 5,
              disabled: false,
              allowHalf: false
            },
            model: "rate_1585491911405",
            key: "rate_1585491911405",
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
            list: [
              {
                type: "input",
                label: "输入框",
                icon: "icon-write",
                options: {
                  type: "text",
                  width: "100%",
                  defaultValue: "",
                  placeholder: "请输入",
                  clearable: false,
                  maxLength: null,
                  disabled: false
                },
                model: "input_1585491918383",
                key: "input_1585491918383",
                rules: [
                  {
                    required: false,
                    message: "必填项"
                  }
                ]
              },
              {
                type: "date",
                label: "日期选择框",
                icon: "icon-calendar",
                options: {
                  width: "100%",
                  defaultValue: "",
                  rangeDefaultValue: [],
                  range: false,
                  showTime: false,
                  disabled: false,
                  clearable: false,
                  placeholder: "请选择",
                  rangePlaceholder: ["开始时间", "结束时间"],
                  format: "YYYY-MM-DD"
                },
                model: "date_1585491929847",
                key: "date_1585491929847",
                rules: [
                  {
                    required: false,
                    message: "必填项"
                  }
                ]
              }
            ],
            options: {
              scrollY: 0,
              defaultValue: "",
              disabled: false,
              showLabel: false,
              hideSequence: false,
              width: "100%"
            },
            model: "batch_1585491902024",
            key: "batch_1585491902024",
            rules: [
              {
                required: false,
                message: "必填项"
              }
            ]
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: {
            span: 4
          },
          wrapperCol: {
            span: 18
          },
          hideRequiredMark: false,
          customStyle: ""
        }
      }
    };
  },
  methods: {
    handleChange() {
      // 使用k-form-design组件的form属性修改表单数据
      this.$refs.kfb.setData({
        input_1585491903047: "信息输入",
        rate_1585491911405: 3,
        batch_1585491902024: [
          {
            input_1585491918383: "数据1",
            date_1585491929847: "2020-03-12",
            key: 1585491980422
          },
          {
            input_1585491918383: "数据2",
            date_1585491929847: "2020-03-12",
            key: 1585491983966
          }
        ]
      });
    },
    handleReset() {
      // 重置表单
      this.$refs.kfb.reset();
    }
  }
};
</script>
```

## 设置表单默认数据

![image-20200402202132463](assets/image-20200402202132463.png)

> 通过defaultValue属性插入默认数据，示例代码：

```html
<template>
  <div>
    <k-form-build
      :defaultValue="defaultValue"
      :value="jsonData"
      ref="KFB"
      @submit="handleSubmit"
    />
    <button @click="getData">提交</button>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      defaultValue: {
        select_1585829530472: "2",
        radio_1585829530935: "3"
      },
      jsonData: {
        list: [
          {
            type: "select",
            label: "下拉选择器",
            options: {
              width: "100%",
              multiple: false,
              disabled: false,
              clearable: false,
              placeholder: "请选择",
              dynamicKey: "",
              dynamic: false,
              options: [
                { value: "1", label: "下拉框1" },
                { value: "2", label: "下拉框2" }
              ],
              filterable: false
            },
            model: "select_1585829530472",
            key: "select_1585829530472",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "radio",
            label: "单选框",
            icon: "icon-danxuan-cuxiantiao",
            options: {
              disabled: false,
              defaultValue: "",
              dynamicKey: "",
              dynamic: false,
              options: [
                { value: "1", label: "选项1" },
                { value: "2", label: "选项2" },
                { value: "3", label: "选项3" }
              ]
            },
            model: "radio_1585829530935",
            key: "radio_1585829530935",
            rules: [{ required: false, message: "必填项" }]
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      }
    };
  },
  methods: {
    handleSubmit(p) {
      // 通过表单提交按钮触发，获取promise对象
      p()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    },
    getData() {
      // 通过函数获取数据
      this.$refs.KFB.getData()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    }
  }
};
</script>
```



## 通过提交按钮触发submit事件

![2](assets/2-1584794814249.gif)

```  html
<template>
  <div>
    <k-form-build @submit="submitData" :value="jsonData" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsonData: {
        list: [
          {
            type: 'input',
            label: '单行文本',
            options: {
              width: '100%',
              defaultValue: '',
              placeholder: '请输入',
              disabled: false
            },
            model: 'input_1577875678405',
            key: 'input_1577875678405',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'button',
            label: '提交',
            options: { type: 'primary', handle: 'submit', disabled: false },
            key: 'button_1577880512173'
          }
        ],
        config: {
          layout: 'horizontal',
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ''
        }
      }
    }
  },
  methods: {
    submitData (getData) {
      getData()
        .then(values => {
          console.log('验证通过', values)
        })
        .catch(() => {
          console.log('验证未通过，获取失败')
        })
    }
  }
}
</script>
```

## 动态数据配置

> 设计时需要选择动态数据绑定数据key

![image-20200329173941524](assets/image-20200329173941524.png)

> 使用dynamicData属性传入

![image-20200329174425298](assets/image-20200329174425298.png)

> 代码示例

```html
<template>
  <div>
    <k-form-build
      :value="jsonData"
      :dynamicData="dynamicData"
      ref="KFB"
      @submit="handleSubmit"
    />
    <button @click="getData">提交</button>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      dynamicData: {
        dataKey: [
          {
            label: "动态数据1",
            value: 1
          },
          {
            label: "动态数据2",
            value: 2
          },
          {
            label: "动态数据3",
            value: 3
          }
        ]
      },
      jsonData: {
        list: [
          {
            type: "select",
            label: "下拉选择器",
            options: {
              width: "100%",
              multiple: false,
              disabled: false,
              clearable: false,
              placeholder: "请选择",
              dynamicKey: "dataKey",
              dynamic: true,
              options: [
                { value: "1", label: "下拉框1" },
                { value: "2", label: "下拉框2" }
              ],
              filterable: false
            },
            model: "select_1585474682040",
            key: "select_1585474682040",
            rules: [{ required: false, message: "必填项" }]
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      }
    };
  },
  methods: {
    handleSubmit(p) {
      // 通过表单提交按钮触发，获取promise对象
      p()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    },
    getData() {
      // 通过函数获取数据
      this.$refs.KFB.getData()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    }
  }
};
</script>
```

## 按钮动态函数绑定

![image-20200329202427369](assets/image-20200329202427369.png)

> dynamicData属性传入函数，示例代码如下：

```html
<template>
  <div>
    <k-form-build
      :value="jsonData"
      ref="KFB"
      :dynamicData="dynamicData"
      @submit="handleSubmit"
    />
    <button @click="getData">提交</button>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      dynamicData: {
        funName: this.printHelloWorld
      },
      jsonData: {
        list: [
          {
            type: "input",
            label: "输入框",
            options: {
              type: "text",
              width: "100%",
              defaultValue: "",
              placeholder: "请输入",
              clearable: false,
              maxLength: null,
              disabled: false
            },
            model: "input_1585484534818",
            key: "input_1585484534818",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "button",
            label: "按钮",
            options: {
              type: "primary",
              handle: "dynamic",
              dynamicFun: "funName",
              disabled: false
            },
            key: "button_1585484533580"
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      }
    };
  },
  methods: {
    handleSubmit(p) {
      // 通过表单提交按钮触发，获取promise对象
      p()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    },
    getData() {
      // 通过函数获取数据
      this.$refs.KFB.getData()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    },
    printHelloWorld() {
      alert("hello world");
    }
  }
};
</script>
```

## 监听表单数据变化

![444](assets/444.gif)

> 当修复表单数据时会触发change事件，代码示例：

```html
<template>
  <div>
    <k-form-build :value="jsonData" @change="handleChange" ref="KFB" />
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      jsonData: {
        list: [
          {
            type: "input",
            label: "输入框",
            options: {
              type: "text",
              width: "100%",
              defaultValue: "",
              placeholder: "请输入",
              clearable: false,
              maxLength: null,
              disabled: false
            },
            model: "input_1585832448970",
            key: "input_1585832448970",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "textarea",
            label: "文本框",
            icon: "icon-edit",
            options: {
              width: "100%",
              minRows: 4,
              maxRows: 6,
              maxLength: null,
              defaultValue: "",
              clearable: false,
              disabled: false,
              placeholder: "请输入"
            },
            model: "textarea_1585832449337",
            key: "textarea_1585832449337",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "select",
            label: "下拉选择器",
            icon: "icon-xiala",
            options: {
              width: "100%",
              multiple: false,
              disabled: false,
              clearable: false,
              placeholder: "请选择",
              dynamicKey: "",
              dynamic: false,
              options: [
                { value: "1", label: "下拉框1" },
                { value: "2", label: "下拉框2" }
              ],
              filterable: false
            },
            model: "select_1585832450864",
            key: "select_1585832450864",
            rules: [{ required: false, message: "必填项" }]
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      }
    };
  },
  methods: {
    handleChange(value, key) {
      // 数据变化时触发
      console.log(value, key);
    }
  }
};
</script>
```



## API
<table>
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
        <th>版本</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>value</td>
        <td>表单设计器生成的json数据</td>
        <td>json</td>
        <td>-</td>
        <td></td>
      </tr>
        <tr>
        <td>dynamicData</td>
        <td>选项控件的动态配置数据</td>
        <td>json</td>
        <td>{}</td>
        <td>3.3.0</td>
      </tr>
        </tr>
        <tr>
        <td>disabled</td>
        <td>禁用所有输入控件</td>
        <td>boolean</td>
        <td>false</td>
        <td>3.3.0</td>
      </tr>
 		<tr>
        <td>outputString</td>
        <td>将获取的值都转成字符串，插入数据时请使用setData函数</td>
        <td>boolean</td>
        <td>false</td>
        <td>3.3.1</td>
      </tr>
		<tr>
        <td>defaultValue</td>
        <td>表单默认数据</td>
        <td>json</td>
        <td>{}</td>
        <td>3.3.5</td>
      </tr>
    </tbody>
  </table>




## 函数
  <table>
    <thead>
      <tr>
        <th>函数名称</th>
        <th>说明</th>
        <th>参数</th>
        <th>回调参数</th>
           <th>版本</th>
      </tr>
    </thead>
    <tbody>
     <tr>
        <td>getData</td>
        <td>获取表单数据，返回Promise对象，判断验证是否通过</td>
        <td>-</td>
        <td>Promise</td>
         <td></td>
      </tr>
      <tr>
        <td>setData</td>
        <td>插入表单数据</td>
        <td>json</td>
        <td>Promise</td>
          <td></td>
      </tr>
      <tr>
        <td>reset</td>
        <td>重置表单</td>
        <td>-</td>
        <td>void</td>
          <td></td>
      </tr>
      <tr>
        <td>hide</td>
        <td>隐藏字段</td>
        <td>list[fields]</td>
        <td>void</td>
          <td>3.5.1</td>
      </tr>
      <tr>
        <td>show</td>
        <td>显示字段</td>
        <td>list[fields]</td>
        <td>void</td>
          <td>3.5.1</td>
      </tr>
      <tr>
        <td>disable</td>
        <td>禁用字段</td>
        <td>list[fields]</td>
        <td>void</td>
          <td>3.5.1</td>
      </tr>
      <tr>
        <td>enable</td>
        <td>启用字段</td>
        <td>list[fields]</td>
        <td>void</td>
          <td>3.5.1</td>
      </tr>
    </tbody>
  </table>





## 事件
  <table>
    <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
        <th>版本</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>submit</td>
        <td>点击提交按钮触发，也可以通过getData函数获取数据</td>
        <td>Promise对象</td>
        <td></td>
      </tr>
        <tr>
        <td>change</td>
        <td>当表单数据改变时触发</td>
        <td>value,key</td>
        <td>3.3.5</td>
      </tr>
    </tbody>
  </table>


