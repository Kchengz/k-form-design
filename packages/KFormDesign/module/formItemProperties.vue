<template>
  <div class="properties-centent kk-checkbox" ref="propertiesCentent">
    <p class="hint-box" v-show="selectItem.key === ''">请选择控件</p>
    <a-form v-show="selectItem.key !== ''">
      <a-form-item v-if="typeof selectItem.name !== 'undefined'" label="标题">
        <a-input v-model="selectItem.name" placeholder="请输入" />
      </a-form-item>
      <a-form-item
        v-if="typeof selectItem.model !== 'undefined'"
        label="数据绑定Key"
      >
        <a-input v-model="selectItem.model" placeholder="请输入" />
      </a-form-item>

      <a-form-item
        v-if="typeof options.rangePlaceholder !== 'undefined' && options.range"
        label="占位内容"
      >
        <a-input placeholder="请输入" v-model="options.rangePlaceholder[0]" />
        <a-input placeholder="请输入" v-model="options.rangePlaceholder[1]" />
      </a-form-item>
      <a-form-item
        v-else-if="typeof options.placeholder !== 'undefined'"
        label="占位内容"
      >
        <a-input v-model="options.placeholder" />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'textarea'" label="自适应内容高度">
        <a-input-number
          style="width:100%"
          v-model="options.minRows"
          placeholder="最小高度"
        />
        <a-input-number
          style="width:100%"
          v-model="options.maxRows"
          placeholder="最大高度"
        />
      </a-form-item>
      <a-form-item v-if="typeof options.width !== 'undefined'" label="宽度">
        <a-input placeholder="请输入" v-model="options.width" />
      </a-form-item>
      <a-form-item v-if="typeof options.step !== 'undefined'" label="步长">
        <a-input-number v-model="options.step" placeholder="请输入" />
      </a-form-item>
      <a-form-item v-if="typeof options.min !== 'undefined'" label="最小值">
        <a-input-number v-model="options.min" placeholder="请输入" />
      </a-form-item>
      <a-form-item v-if="typeof options.max !== 'undefined'" label="最大值">
        <a-input-number v-model="options.max" placeholder="请输入" />
      </a-form-item>
      <a-form-item
        v-if="typeof options.options !== 'undefined'"
        label="选项配置"
      >
        <KChangeOption v-model="options.options" />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'grid'" label="栅格间距">
        <a-input-number
          v-model="selectItem.options.gutter"
          placeholder="请输入"
        />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'grid'" label="列配置项">
        <KChangeOption v-model="selectItem.columns" type="colspan" />
      </a-form-item>

      <a-form-item v-if="selectItem.type === 'switch'" label="默认值">
        <a-switch v-model="options.defaultValue" />
      </a-form-item>
      <a-form-item
        v-if="['number', 'slider'].indexOf(selectItem.type) >= 0"
        label="默认值"
      >
        <a-input-number
          :step="options.step"
          :max="options.max"
          :min="options.min"
          v-model="options.defaultValue"
        />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'rate'" label="默认值">
        <a-rate
          v-model="options.defaultValue"
          :allowHalf="options.allowHalf"
          :count="options.max"
        />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'select'" label="默认值">
        <a-select :options="options.options" v-model="options.defaultValue" />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'radio'" label="默认值">
        <a-radio-group
          :options="options.options"
          v-model="options.defaultValue"
        />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'checkbox'" label="默认值">
        <a-checkbox-group
          :options="options.options"
          v-model="options.defaultValue"
        />
      </a-form-item>
      <a-form-item
        v-if="selectItem.type === 'date' && !options.range"
        label="默认值"
      >
        <a-input
          v-model="options.defaultValue"
          :placeholder="
            typeof options.format === 'undefined' ? '' : options.format
          "
        />
      </a-form-item>
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
          ].includes(selectItem.type) &&
            typeof options.defaultValue !== 'undefined'
        "
        label="默认值"
      >
        <a-input
          v-model="options.defaultValue"
          :placeholder="
            typeof options.format === 'undefined' ? '请输入' : options.format
          "
        />
      </a-form-item>
      <!-- 修改html -->
      <a-form-item v-if="selectItem.type === 'html'" label="默认值">
        <div class="code-box-9136076486841527">
          <codemirror
            style="height:100%;"
            ref="myEditor"
            v-model="options.defaultValue"
          ></codemirror>
        </div>
      </a-form-item>
      <a-form-item
        v-if="typeof options.format !== 'undefined'"
        label="时间格式"
      >
        <a-input
          v-model="options.format"
          placeholder="时间格式如：YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>

      <a-form-item
        v-if="typeof options.orientation !== 'undefined'"
        label="标题位置"
      >
        <a-radio-group buttonStyle="solid" v-model="options.orientation">
          <a-radio-button value="left">左</a-radio-button>
          <a-radio-button value="">居中</a-radio-button>
          <a-radio-button value="right">右</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'button'" label="类型">
        <a-radio-group buttonStyle="solid" v-model="options.type">
          <a-radio value="primary">Primary</a-radio>
          <a-radio value="default">Default</a-radio>
          <a-radio value="dashed">Dashed</a-radio>
          <a-radio value="danger">Danger</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'button'" label="按钮操作">
        <a-radio-group buttonStyle="solid" v-model="options.handle">
          <a-radio-button value="submit">提交表单</a-radio-button>
          <a-radio-button value="reset">重置表单</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'alert'" label="辅助描述">
        <a-input v-model="options.description"></a-input>
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'alert'" label="类型">
        <a-radio-group buttonStyle="solid" v-model="options.type">
          <a-radio value="success">success</a-radio>
          <a-radio value="info">info</a-radio>
          <a-radio value="warning">warning</a-radio>
          <a-radio value="error">error</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'alert'" label="操作属性">
        <kCheckbox v-model="options.showIcon" label="显示图标" />
        <kCheckbox v-model="options.banner" label="无边框" />
        <kCheckbox v-model="options.closable" label="可关闭" />
      </a-form-item>
      <!-- 上传图片 -->
      <a-form-item v-if="selectItem.type === 'uploadImg'" label="样式">
        <a-radio-group buttonStyle="solid" v-model="options.listType">
          <a-radio-button value="text">text</a-radio-button>
          <a-radio-button value="picture">picture</a-radio-button>
          <a-radio-button value="picture-card">card</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <!-- 上传数量 -->
      <a-form-item
        v-if="typeof options.limit !== 'undefined'"
        label="最大上传数量"
      >
        <a-input-number :min="1" v-model="options.limit" />
      </a-form-item>
      <!-- 上传地址 -->
      <a-form-item
        v-if="typeof options.action !== 'undefined'"
        label="上传地址"
      >
        <a-input v-model="options.action" placeholder="请输入"></a-input>
      </a-form-item>
      <!-- 上传额外参数 -->
      <a-form-item
        v-if="typeof options.data !== 'undefined'"
        label="额外参数（JSON格式）"
      >
        <a-input v-model="options.data" placeholder="严格JSON格式"></a-input>
      </a-form-item>
      <!-- 文字对齐方式 -->
      <a-form-item v-if="selectItem.type === 'text'" label="文字对齐方式">
        <a-radio-group buttonStyle="solid" v-model="options.textAlign">
          <a-radio-button value="left">左</a-radio-button>
          <a-radio-button value="center">居中</a-radio-button>
          <a-radio-button value="right">右</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'text'" label="操作属性">
        <kCheckbox v-model="options.showRequiredMark" label="显示必选标记" />
      </a-form-item>

      <a-form-item
        v-if="
          typeof options.disabled !== 'undefined' ||
            typeof options.readonly !== 'undefined' ||
            typeof options.clearable !== 'undefined' ||
            typeof options.multiple !== 'undefined' ||
            typeof options.range !== 'undefined' ||
            typeof options.showTime !== 'undefined' ||
            typeof options.allowHalf !== 'undefined' ||
            typeof options.showInput !== 'undefined'
        "
        label="操作属性"
      >
        <kCheckbox
          v-if="typeof options.disabled !== 'undefined'"
          v-model="options.disabled"
          label="禁用"
        />
        <kCheckbox
          v-if="typeof options.readonly !== 'undefined'"
          v-model="options.readonly"
          label="只读"
        />
        <kCheckbox
          v-if="typeof options.clearable !== 'undefined'"
          v-model="options.clearable"
          label="可清除"
        />
        <kCheckbox
          v-if="typeof options.multiple !== 'undefined'"
          v-model="options.multiple"
          label="多选"
        />
        <kCheckbox
          v-if="typeof options.range !== 'undefined'"
          v-model="options.range"
          label="范围选择"
        />
        <kCheckbox
          v-if="typeof options.showTime !== 'undefined'"
          v-model="options.showTime"
          label="时间选择器"
        />
        <kCheckbox
          v-if="typeof options.allowHalf !== 'undefined'"
          v-model="options.allowHalf"
          label="允许半选"
        />
        <kCheckbox
          v-if="typeof options.showInput !== 'undefined'"
          v-model="options.showInput"
          label="显示输入框"
        />
        <kCheckbox
          v-if="typeof options.drag !== 'undefined'"
          v-model="options.drag"
          label="允许拖拽"
        />
      </a-form-item>

      <a-form-item
        v-if="
          typeof selectItem.rules !== 'undefined' && selectItem.rules.length > 0
        "
        label="校验"
      >
        <kCheckbox v-model="selectItem.rules[0].required" label="必填" />
        <KChangeOption v-model="selectItem.rules" type="rules" />
      </a-form-item>

      <!-- 表格选项 -->
      <a-form-item v-if="selectItem.type === 'table'" label="表格样式CSS">
        <a-input v-model="selectItem.options.customClass" />
      </a-form-item>
      <a-form-item v-if="selectItem.type === 'table'" label="属性">
        <kCheckbox v-model="selectItem.options.bordered" label="显示边框" />
        <kCheckbox v-model="selectItem.options.bright" label="鼠标经过点亮" />
        <kCheckbox v-model="selectItem.options.small" label="紧凑型" />
      </a-form-item>

      <a-form-item v-if="selectItem.type === 'table'" label="提示">
        <p style="line-height: 26px;">
          请点击右键增加行列，或者合并单元格
        </p>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 表单控件属性设置组件
 */
import KChangeOption from "../../KChangeOption/index.vue";
import kCheckbox from "../../KCheckbox/index.vue";
import { codemirror } from "vue-codemirror-lite";
export default {
  name: "formItemProperties",
  data() {
    return {
      options: {}
    };
  },
  watch: {
    selectItem(val) {
      this.options = val.options || {};
    }
  },
  components: {
    KChangeOption,
    kCheckbox,
    codemirror
  },
  props: {
    selectItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    setOropertiesCentent() {
      this.$refs.propertiesCentent.style.height =
        document.body.clientHeight - 160 + "px";
    }
  },
  mounted() {
    this.setOropertiesCentent();
    window.addEventListener("resize", this.setOropertiesCentent, true);
  },
  destroyed() {
    // 取消监听
    window.removeEventListener("resize", this.setOropertiesCentent, true);
  }
};
</script>
