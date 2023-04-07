<template>
  <div class="properties-centent kk-checkbox">
    <div class="properties-body">
      <a-empty
        class="hint-box"
        v-show="selectItem.key === ''"
        description="未选择控件"
      />

      <a-form v-show="selectItem.key !== ''">
        <a-form-item v-if="isDefined(selectItem.label)" label="标签">
          <Input v-model="selectItem.label" placeholder="请输入" />
        </a-form-item>

        <a-form-item
          v-if="!hideModel && isDefined(selectItem.model)"
          label="数据字段"
        >
          <Input v-model="selectItem.model" placeholder="请输入" />
        </a-form-item>
        <!-- input type start -->
        <a-form-item v-if="selectItem.type === 'input'" label="输入框type">
          <Input v-model="options.type" placeholder="请输入" />
        </a-form-item>
        <!-- input type end -->
        <a-form-item
          v-if="
            typeof options.rangePlaceholder !== 'undefined' && options.range
          "
          label="占位内容"
        >
          <Input placeholder="请输入" v-model="options.rangePlaceholder[0]" />
          <Input placeholder="请输入" v-model="options.rangePlaceholder[1]" />
        </a-form-item>

        <a-form-item
          v-else-if="isDefined(options.placeholder)"
          label="占位内容"
        >
          <Input placeholder="请输入" v-model="options.placeholder" />
        </a-form-item>
        <a-form-item
          v-if="selectItem.type === 'textarea'"
          label="自适应内容高度"
        >
          <InputNumber
            style="width: 100%"
            v-model="options.minRows"
            placeholder="最小高度"
          />
          <InputNumber
            style="width: 100%"
            v-model="options.maxRows"
            placeholder="最大高度"
          />
        </a-form-item>
        <a-form-item v-if="isDefined(options.width)" label="宽度">
          <Input placeholder="请输入" v-model="options.width" />
        </a-form-item>
        <a-form-item v-if="isDefined(options.height)" label="高度">
          <InputNumber v-model="options.height" />
        </a-form-item>
        <a-form-item v-if="isDefined(options.step)" label="步长">
          <InputNumber v-model="options.step" placeholder="请输入" />
        </a-form-item>
        <a-form-item v-if="isDefined(options.min)" label="最小值">
          <InputNumber v-model="options.min" placeholder="请输入" />
        </a-form-item>
        <a-form-item v-if="isDefined(options.max)" label="最大值">
          <InputNumber v-model="options.max" placeholder="请输入" />
        </a-form-item>

        <a-form-item v-if="isDefined(options.maxLength)" label="最大长度">
          <InputNumber v-model="options.maxLength" placeholder="请输入" />
        </a-form-item>
        <a-form-item
          v-if="
            isDefined(options.minLimit) || ['batch'].includes(selectItem.type)
          "
          label="最小行数"
        >
          <InputNumber
            v-model="options.minLimit"
            :min="0"
            placeholder="请输入"
          />
        </a-form-item>
        <a-form-item v-if="isDefined(options.tabBarGutter)" label="标签间距">
          <InputNumber v-model="options.tabBarGutter" placeholder="请输入" />
        </a-form-item>
        <a-form-item v-if="isDefined(options.precision)" label="数值精度">
          <InputNumber
            :min="0"
            :max="50"
            v-model="options.precision"
            placeholder="请输入"
          />
        </a-form-item>
        <a-form-item v-if="isDefined(options.dictCode)" label="dictCode">
          <Input v-model="options.dictCode" />
        </a-form-item>
        <!-- 选项配置及动态数据配置 start -->
        <a-form-item v-if="isDefined(options.options)" label="选项配置">
          <Radio buttonStyle="solid" v-model="options.dynamic">
            <RadioButton :value="false">静态数据</RadioButton>
            <RadioButton :value="true">动态数据</RadioButton>
          </Radio>

          <Input
            v-show="options.dynamic"
            v-model="options.dynamicKey"
            placeholder="动态数据变量名"
          />

          <KChangeOption v-show="!options.dynamic" v-model="options.options" />
        </a-form-item>
        <!-- 选项配置及动态数据配置 end -->
        <!-- tabs配置 start -->
        <a-form-item
          v-if="['tabs', 'selectInputList'].includes(selectItem.type)"
          :label="selectItem.type === 'tabs' ? '页签配置' : '列选项配置'"
        >
          <KChangeOption v-model="selectItem.columns" type="tab" />
        </a-form-item>
        <!-- tabs配置 end -->
        <a-form-item v-if="selectItem.type === 'grid'" label="栅格间距">
          <InputNumber
            v-model="selectItem.options.gutter"
            placeholder="请输入"
          />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'grid'" label="列配置项">
          <KChangeOption v-model="selectItem.columns" type="colspan" />
        </a-form-item>

        <a-form-item v-if="selectItem.type === 'switch'" label="默认值">
          <ASwitch v-model="options.defaultValue" />
        </a-form-item>
        <a-form-item
          v-if="['number', 'slider'].indexOf(selectItem.type) >= 0"
          label="默认值"
        >
          <InputNumber
            :step="options.step"
            :min="options.min || -Infinity"
            :max="options.max || Infinity"
            v-model="options.defaultValue"
          />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'rate'" label="默认值">
          <Rate
            v-model="options.defaultValue"
            :allowHalf="options.allowHalf"
            :count="options.max"
          />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'select'" label="默认值">
          <Select
            :options="options.options"
            v-model="options.defaultValue"
            :allowClear="options.clearable"
            :mode="options.multiple ? 'multiple' : ''"
          />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'radio'" label="默认值">
          <Radio :options="options.options" v-model="options.defaultValue" />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'checkbox'" label="默认值">
          <Checkbox :options="options.options" v-model="options.defaultValue" />
        </a-form-item>
        <!-- 日期选择器默认值 start -->
        <a-form-item v-if="selectItem.type === 'date'" label="默认值">
          <Input
            v-if="!options.range"
            v-model="options.defaultValue"
            :placeholder="!isDefined(options.format) ? '' : options.format"
          />
          <Input
            v-if="options.range"
            v-model="options.rangeDefaultValue[0]"
            :placeholder="!isDefined(options.format) ? '' : options.format"
          />
          <Input
            v-if="options.range"
            v-model="options.rangeDefaultValue[1]"
            :placeholder="!isDefined(options.format) ? '' : options.format"
          />
        </a-form-item>
        <!-- 日期选择器默认值 start -->
        <a-form-item
          v-if="
            ![
              'number',
              'radio',
              'checkbox',
              'date',
              'rate',
              'select',
              'switch',
              'slider',
              'html'
            ].includes(selectItem.type) && isDefined(options.defaultValue)
          "
          label="默认值"
        >
          <Input
            v-model="options.defaultValue"
            :placeholder="isDefined(options.format) ? '请输入' : options.format"
          />
        </a-form-item>
        <!-- 修改html -->
        <a-form-item v-if="selectItem.type === 'html'" label="默认值">
          <Textarea
            v-model="options.defaultValue"
            :autoSize="{ minRows: 4, maxRows: 8 }"
          />
        </a-form-item>
        <a-form-item v-if="isDefined(options.format)" label="时间格式">
          <Input
            v-model="options.format"
            placeholder="时间格式如：YYYY-MM-DD HH:mm:ss"
          />
        </a-form-item>

        <a-form-item v-if="isDefined(options.orientation)" label="标签位置">
          <Radio buttonStyle="solid" v-model="options.orientation">
            <RadioButton value="left">左</RadioButton>
            <RadioButton value="">居中</RadioButton>
            <RadioButton value="right">右</RadioButton>
          </Radio>
        </a-form-item>
        <!-- 页签位置 start -->
        <a-form-item v-if="selectItem.type === 'tabs'" label="页签位置">
          <Radio buttonStyle="solid" v-model="options.tabPosition">
            <RadioItem value="top">top</RadioItem>
            <RadioItem value="right">right</RadioItem>
            <RadioItem value="bottom">bottom</RadioItem>
            <RadioItem value="left">left</RadioItem>
          </Radio>
        </a-form-item>
        <!-- 页签位置 end -->
        <!-- 页签类型 start -->
        <a-form-item v-if="selectItem.type === 'tabs'" label="页签类型">
          <Radio buttonStyle="solid" v-model="options.type">
            <RadioButton value="line">line</RadioButton>
            <RadioButton value="card">card</RadioButton>
          </Radio>
        </a-form-item>
        <!-- 页签类型 end -->
        <!-- 页签大小 start -->
        <a-form-item v-if="isDefined(options.size)" label="大小">
          <Radio buttonStyle="solid" v-model="options.size">
            <RadioButton value="large">large</RadioButton>
            <RadioButton value="default">default</RadioButton>
            <RadioButton value="small">small</RadioButton>
          </Radio>
        </a-form-item>
        <!-- 页签大小 end -->
        <a-form-item v-if="selectItem.type === 'button'" label="类型">
          <Radio buttonStyle="solid" v-model="options.type">
            <RadioItem value="primary">Primary</RadioItem>
            <RadioItem value="default">Default</RadioItem>
            <RadioItem value="dashed">Dashed</RadioItem>
            <RadioItem value="danger">Danger</RadioItem>
          </Radio>
        </a-form-item>
        <!-- 下载方式 start -->
        <a-form-item v-if="isDefined(options.downloadWay)" label="下载方式">
          <Radio buttonStyle="solid" v-model="options.downloadWay">
            <RadioButton value="a">a标签</RadioButton>
            <RadioButton value="ajax">ajax</RadioButton>
            <RadioButton value="dynamic">动态函数</RadioButton>
          </Radio>
          <Input
            v-show="options.downloadWay === 'dynamic'"
            v-model="options.dynamicFun"
            placeholder="动态函数名"
          />
        </a-form-item>
        <!-- 下载方式 end -->
        <a-form-item v-if="selectItem.type === 'button'" label="按钮操作">
          <Radio buttonStyle="solid" v-model="options.handle">
            <RadioButton value="submit">提交</RadioButton>
            <RadioButton value="reset">重置</RadioButton>
            <RadioButton value="dynamic">动态函数</RadioButton>
          </Radio>
          <Input
            v-show="options.handle === 'dynamic'"
            v-model="options.dynamicFun"
            placeholder="动态函数名"
          />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'alert'" label="辅助描述">
          <Input v-model="options.description" />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'alert'" label="类型">
          <Radio buttonStyle="solid" v-model="options.type">
            <RadioItem value="success">success</RadioItem>
            <RadioItem value="info">info</RadioItem>
            <RadioItem value="warning">warning</RadioItem>
            <RadioItem value="error">error</RadioItem>
          </Radio>
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'alert'" label="操作属性">
          <kCheckbox v-model="options.showIcon" label="显示图标" />
          <kCheckbox v-model="options.banner" label="无边框" />
          <kCheckbox v-model="options.closable" label="可关闭" />
        </a-form-item>
        <!-- 上传图片 -->
        <a-form-item v-if="selectItem.type === 'uploadImg'" label="样式">
          <Radio buttonStyle="solid" v-model="options.listType">
            <RadioButton value="text">text</RadioButton>
            <RadioButton value="picture">picture</RadioButton>
            <RadioButton value="picture-card">card</RadioButton>
          </Radio>
        </a-form-item>
        <!-- 上传数量 -->
        <a-form-item v-if="isDefined(options.limit)" label="最大上传数量">
          <InputNumber :min="1" v-model="options.limit" />
        </a-form-item>

        <!-- scrollY -->
        <a-form-item v-if="isDefined(options.scrollY)" label="scrollY">
          <InputNumber :min="0" v-model="options.scrollY" />
        </a-form-item>

        <!-- 上传地址 -->
        <a-form-item v-if="isDefined(options.action)" label="上传地址">
          <Input v-model="options.action" placeholder="请输入" />
        </a-form-item>

        <!-- 文件name -->
        <a-form-item v-if="isDefined(options.fileName)" label="文件name">
          <Input v-model="options.fileName" placeholder="请输入" />
        </a-form-item>
        <!-- 上传额外参数 -->
        <a-form-item
          v-if="isDefined(options.data)"
          label="额外参数（JSON格式）"
        >
          <Textarea
            v-model="options.data"
            placeholder="严格JSON格式"
          ></Textarea>
        </a-form-item>
        <!-- 文字对齐方式 -->
        <a-form-item v-if="selectItem.type === 'text'" label="文字对齐方式">
          <Radio buttonStyle="solid" v-model="options.textAlign">
            <RadioButton value="left">左</RadioButton>
            <RadioButton value="center">居中</RadioButton>
            <RadioButton value="right">右</RadioButton>
          </Radio>
        </a-form-item>
        <!-- 文字字体 -->
        <a-form-item v-if="selectItem.type === 'text'" label="字体属性设置">
          <ColorPicker v-model="options.color" />
          <Select
            :options="familyOptions"
            v-model="options.fontFamily"
            style="width:36%;margin-left:2%;vertical-align:bottom;"
          />
          <Select
            :options="sizeOptions"
            v-model="options.fontSize"
            style="width:35%;margin-left:2%;vertical-align:bottom;"
          />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'text'" label="操作属性">
          <kCheckbox v-model="options.showRequiredMark" label="显示必选标记" />
        </a-form-item>

        <a-form-item
          v-if="
            typeof options.hidden !== 'undefined' ||
              typeof options.disabled !== 'undefined' ||
              typeof options.readonly !== 'undefined' ||
              typeof options.clearable !== 'undefined' ||
              typeof options.multiple !== 'undefined' ||
              typeof options.range !== 'undefined' ||
              typeof options.showTime !== 'undefined' ||
              typeof options.allowHalf !== 'undefined' ||
              typeof options.showInput !== 'undefined' ||
              typeof options.animated !== 'undefined'
          "
          label="操作属性"
        >
          <kCheckbox
            v-if="isDefined(options.hidden)"
            v-model="options.hidden"
            label="隐藏"
          />
          <kCheckbox
            v-if="isDefined(options.disabled)"
            v-model="options.disabled"
            label="禁用"
          />
          <kCheckbox
            v-if="isDefined(options.readonly)"
            v-model="options.readonly"
            label="只读"
          />
          <kCheckbox
            v-if="isDefined(options.clearable)"
            v-model="options.clearable"
            label="可清除"
          />
          <kCheckbox
            v-if="isDefined(options.multiple)"
            v-model="options.multiple"
            label="多选"
          />
          <kCheckbox
            v-if="isDefined(options.range)"
            v-model="options.range"
            label="范围选择"
          />
          <kCheckbox
            v-if="isDefined(options.showTime)"
            v-model="options.showTime"
            label="时间选择器"
          />
          <kCheckbox
            v-if="isDefined(options.allowHalf)"
            v-model="options.allowHalf"
            label="允许半选"
          />
          <kCheckbox
            v-if="isDefined(options.showInput)"
            v-model="options.showInput"
            label="显示输入框"
          />
          <kCheckbox
            v-if="isDefined(options.showLabel)"
            v-model="options.showLabel"
            label="显示Label"
          />
          <kCheckbox
            v-if="isDefined(options.chinesization)"
            v-model="options.chinesization"
            label="汉化"
          />
          <kCheckbox
            v-if="isDefined(options.hideSequence)"
            v-model="options.hideSequence"
            label="隐藏序号"
          />
          <kCheckbox
            v-if="isDefined(options.drag)"
            v-model="options.drag"
            label="允许拖拽"
          />
          <kCheckbox
            v-if="isDefined(options.showSearch)"
            v-model="options.showSearch"
            label="可搜索"
          />
          <kCheckbox
            v-if="isDefined(options.treeCheckable)"
            v-model="options.treeCheckable"
            label="可勾选"
          />
          <kCheckbox
            v-if="isDefined(options.animated)"
            v-model="options.animated"
            label="动画切换"
          />
          <kCheckbox
            title="勾选后移除FormItem嵌套且表单无法获取该组件数据"
            v-model="options.noFormItem"
            label="移除FormItem"
          />
        </a-form-item>

        <a-form-item
          v-if="isDefined(selectItem.rules) && selectItem.rules.length > 0"
          label="校验"
        >
          <kCheckbox v-model="selectItem.rules[0].required" label="必填" />
          <Input
            v-model="selectItem.rules[0].message"
            placeholder="必填校验提示信息"
          />
          <KChangeOption v-model="selectItem.rules" type="rules" />
        </a-form-item>

        <!-- 表格选项 -->
        <a-form-item v-if="selectItem.type === 'table'" label="表格样式CSS">
          <Input v-model="selectItem.options.customStyle" />
        </a-form-item>
        <a-form-item v-if="selectItem.type === 'table'" label="属性">
          <kCheckbox v-model="selectItem.options.bordered" label="显示边框" />
          <kCheckbox v-model="selectItem.options.bright" label="鼠标经过点亮" />
          <kCheckbox v-model="selectItem.options.small" label="紧凑型" />
        </a-form-item>

        <a-form-item v-if="selectItem.type === 'table'" label="提示">
          <p style="line-height: 26px">请点击右键增加行列，或者合并单元格</p>
        </a-form-item>

        <a-form-item v-if="isDefined(selectItem.help)" label="帮助信息">
          <Input v-model="selectItem.help" placeholder="请输入" />
        </a-form-item>

        <!-- 前缀 -->
        <a-form-item label="前缀" v-if="isDefined(options.addonBefore)">
          <Input v-model="options.addonBefore" placeholder="请输入" />
        </a-form-item>

        <!-- 后缀 -->
        <a-form-item label="后缀" v-if="isDefined(options.addonAfter)">
          <Input v-model="options.addonAfter" placeholder="请输入" />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
/*
 * author kcz
 * date 2019-11-20
 * description 表单控件属性设置组件,因为配置数据是引用关系，所以可以直接修改
 */
import KChangeOption from "../../KChangeOption/index.vue";
import kCheckbox from "../../KCheckbox/index.vue";
import { pluginManager } from "../../../utils/index";
const Input = pluginManager.getComponent("input").component;
const InputNumber = pluginManager.getComponent("number").component;
const Rate = pluginManager.getComponent("rate").component;
const Checkbox = pluginManager.getComponent("checkbox").component;
const Radio = pluginManager.getComponent("radio").component;
const RadioButton = pluginManager.getComponent("radioButton").component;
const RadioItem = pluginManager.getComponent("radioItem").component;
const Textarea = pluginManager.getComponent("textarea").component;
const Select = pluginManager.getComponent("select").component;
const ColorPicker = pluginManager.getComponent("colorPicker").component;
const ASwitch = pluginManager.getComponent("switch").component;

export default {
  name: "formItemProperties",
  components: {
    KChangeOption,
    kCheckbox,
    ColorPicker,
    Input,
    InputNumber,
    Rate,
    ASwitch,
    Checkbox,
    Radio,
    RadioItem,
    RadioButton,
    Textarea,
    Select
  },
  data() {
    return {
      familyOptions: [
        // 字体选择设置
        {
          value: "",
          label: "默认"
        },
        {
          value: "SimSun",
          label: "宋体"
        },
        {
          value: "FangSong",
          label: "仿宋"
        },
        {
          value: "SimHei",
          label: "黑体"
        },
        {
          value: "PingFangSC-Regular",
          label: "苹方"
        },
        {
          value: "KaiTi",
          label: "楷体"
        },
        {
          value: "LiSu",
          label: "隶书"
        }
      ],
      sizeOptions: [
        //字号选择设置
        {
          value: "26pt",
          label: "一号"
        },
        {
          value: "24pt",
          label: "小一"
        },
        {
          value: "22pt",
          label: "二号"
        },
        {
          value: "18pt",
          label: "小二"
        },
        {
          value: "16pt",
          label: "三号"
        },
        {
          value: "15pt",
          label: "小三"
        },
        {
          value: "14pt",
          label: "四号"
        },
        {
          value: "12pt",
          label: "小四"
        },
        {
          value: "10.5pt",
          label: "五号"
        },
        {
          value: "9pt",
          label: "小五"
        }
      ]
    };
  },
  computed: {
    options() {
      return this.selectItem.options || {};
    }
  },
  props: {
    selectItem: {
      type: Object,
      required: true
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * 判断是否已定义
     * @param {*} value
     */
    isDefined(value) {
      return typeof value !== "undefined";
    }
  }
};
</script>
