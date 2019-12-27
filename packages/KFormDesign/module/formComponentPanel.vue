<template>
  <div class="form-panel">
    <p class="hint-text" v-show="data.list.length === 0">从左侧拖拽添加控件</p>
    <a-form
      class="a-form-box k-form-build"
      :form="form"
      :layout="data.config.layout"
      :hideRequiredMark="data.config.hideRequiredMark"
      :style="{
        width: data.config.width,
        marginTop: data.config.marginTop,
        marginRight: data.config.marginRight,
        marginBottom: data.config.marginBottom,
        marginLeft: data.config.marginLeft
      }"
    >
      <draggable
        tag="div"
        class="draggable-box"
        v-bind="{
          group: 'form-draggable',
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move'
        }"
        v-model="data.list"
        @add="handleAdd"
      >
        <transition-group tag="div" name="list" class="list-main">
          <layoutItem
            v-for="record in data.list"
            :key="record.key"
            :record="record"
            :config="data.config"
            :selectItem.sync="selectItem"
            @handleSelectItem="handleSelectItem"
            @handleCopy="handleCopy"
            @handleDetele="handleDetele"
            @handleColAdd="handleColAdd"
            @handleShowRightMenu="handleShowRightMenu"
          />
        </transition-group>
      </draggable>
    </a-form>
    <!-- 右键菜单 start -->
    <div
      v-show="showRightMenu"
      :style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
      class="right-menu"
    >
      <ul>
        <li @click="handleDownMerge"><a-icon type="caret-down" />向下合并</li>
        <li @click="handleRightMerge"><a-icon type="caret-right" />向右合并</li>
        <li @click="handleAddCol">
          <a-icon type="border-horizontal" />增加一列
        </li>
        <li @click="handleAddRow"><a-icon type="border-verticle" />增加一行</li>
      </ul>
    </div>
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import draggable from "vuedraggable";
import layoutItem from "./layoutItem";
import "codemirror/mode/javascript/javascript";
export default {
  name: "KCenter",
  data() {
    return {
      form: this.$form.createForm(this),
      rightMenuSelectValue: {},
      showRightMenu: false,
      menuTop: 0,
      menuLeft: 0,
      trIndex: 0,
      tdIndex: 0
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    draggable,
    layoutItem
  },
  methods: {
    handleAdd(evt) {
      const newIndex = evt.newIndex;
      // // 生成key值
      // const key = this.data.list[newIndex].type + "_" + new Date().getTime();
      // this.$set(this.data.list, newIndex, {
      //   ...this.data.list[newIndex],
      //   key,
      //   model: key
      // });
      // if (
      //   [
      //     "button",
      //     "divider",
      //     "card",
      //     "grid",
      //     "table",
      //     "alert",
      //     "text"
      //   ].includes(this.data.list[newIndex].type)
      // ) {
      //   // 删除不需要的model属性
      //   delete this.data.list[newIndex].model;
      // }
      // if (typeof this.data.list[newIndex].options !== "undefined") {
      //   // 深拷贝options

      // }
      // if (typeof this.data.list[newIndex].rules !== "undefined") {
      //   // 深拷贝rules
      //   const rulesStr = JSON.stringify(this.data.list[newIndex].rules);
      //   this.data.list[newIndex].rules = JSON.parse(rulesStr);
      // }
      // if (typeof this.data.list[newIndex].list !== "undefined") {
      //   // 深拷贝list
      //   const listStr = JSON.stringify(this.data.list[newIndex].list);
      //   this.data.list[newIndex].list = JSON.parse(listStr);
      // }

      // if (typeof this.data.list[newIndex].columns !== "undefined") {
      //   // 深拷贝columns
      //   const columnsStr = JSON.stringify(this.data.list[newIndex].columns);
      //   this.data.list[newIndex].columns = JSON.parse(columnsStr);
      // }
      // if (this.data.list[newIndex].type === "table") {
      //   // 深拷贝trs
      //   const trsStr = JSON.stringify(this.data.list[newIndex].trs);
      //   this.data.list[newIndex].trs = JSON.parse(trsStr);
      // }
      const listString = JSON.stringify(this.data.list);
      this.data.list = JSON.parse(listString);
      this.$emit("handleSetSelectItem", this.data.list[newIndex]);
    },
    handleColAdd(evt, columns, isCopy = false) {
      // 重置或者生成key值
      const newIndex = evt.newIndex;
      const key = columns[newIndex].type + "_" + new Date().getTime();
      if (columns[newIndex].key === "" || isCopy) {
        this.$set(columns, newIndex, {
          ...columns[newIndex],
          key,
          model: key
        });
        if (
          [
            "button",
            "divider",
            "card",
            "grid",
            "table",
            "alert",
            "text"
          ].includes(columns[newIndex].type)
        ) {
          // 删除不需要的model属性
          delete columns[newIndex].model;
        }
        if (typeof columns[newIndex].options !== "undefined") {
          // 深拷贝options
          const optionsStr = JSON.stringify(columns[newIndex].options);
          columns[newIndex].options = JSON.parse(optionsStr);
        }
        if (typeof columns[newIndex].rules !== "undefined") {
          // 深拷贝rules
          const rulesStr = JSON.stringify(columns[newIndex].rules);
          columns[newIndex].rules = JSON.parse(rulesStr);
        }
        if (typeof columns[newIndex].list !== "undefined") {
          // 深拷贝list
          columns[newIndex].list = [];
        }
        if (typeof columns[newIndex].columns !== "undefined") {
          // 深拷贝columns
          const columnsStr = JSON.stringify(columns[newIndex].columns);
          columns[newIndex].columns = JSON.parse(columnsStr);
          // 复制时，清空数据
          columns[newIndex].columns.forEach(item => {
            item.list = [];
          });
        }
        if (columns[newIndex].type === "table") {
          // 深拷贝trs
          const trsStr = JSON.stringify(columns[newIndex].trs);
          columns[newIndex].trs = JSON.parse(trsStr);
          // 复制时，清空数据
          columns[newIndex].trs.forEach(item => {
            item.tds.forEach(val => {
              val.list = [];
            });
          });
        }
      }
      this.$emit("handleSetSelectItem", columns[newIndex]);
    },
    handleSelectItem(record) {
      // 修改选择Item
      this.$emit("handleSetSelectItem", record);
    },
    handleCopy() {
      // 复制已选择
      const traverse = array => {
        array.forEach((element, index) => {
          if (element.key === this.selectItem.key) {
            array.splice(index + 1, 0, element);
            // 复制完成，重置key值
            const evt = {
              newIndex: index + 1
            };
            this.handleColAdd(evt, array, true);
            return;
          }
          if (element.type === "grid") {
            // 栅格布局
            element.columns.forEach(item => {
              traverse(item.list);
            });
          }
          if (element.type === "card") {
            // 卡片布局
            traverse(element.list);
          }
          if (element.type === "table") {
            // 表格布局
            element.trs.forEach(item => {
              item.tds.forEach(val => {
                traverse(val.list);
              });
            });
          }
        });
      };
      traverse(this.data.list);
    },
    handleDetele() {
      // 删除已选择
      const traverse = array => {
        array = array.filter((element, index) => {
          if (element.type === "grid") {
            // 栅格布局
            element.columns.forEach(item => {
              item.list = traverse(item.list);
            });
          }
          if (element.type === "card") {
            // 卡片布局
            element.list = traverse(element.list);
          }
          if (element.type === "table") {
            // 表格布局
            element.trs.forEach(item => {
              item.tds.forEach(val => {
                val.list = traverse(val.list);
              });
            });
          }
          if (element.key !== this.selectItem.key) {
            return true;
          } else {
            if (array.length === 1) {
              this.handleSelectItem({ key: "" });
            } else if (array.length - 1 > index) {
              this.handleSelectItem(array[index + 1]);
            } else {
              this.handleSelectItem(array[index - 1]);
            }
            return false;
          }
        });
        return array;
      };
      this.data.list = traverse(this.data.list);
    },
    handleDownMerge() {
      // 向下合并
      if (
        this.rightMenuSelectValue.trs.length -
          this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
            .rowspan <=
        this.trIndex
      ) {
        this.$message.error("当前是最后一行，无法向下合并");
        return false;
      }

      // 计算rowspan超过自身的td
      let rows = 0;
      this.rightMenuSelectValue.trs[this.trIndex].tds.forEach(
        (element, index) => {
          if (index >= this.tdIndex) {
            return false;
          }
          if (
            element.rowspan >
            this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
              .rowspan
          ) {
            rows += 1;
          }
        }
      );
      if (
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
          .colspan !==
        this.rightMenuSelectValue.trs[this.trIndex + 1].tds[this.tdIndex - rows]
          .colspan
      ) {
        this.$message.error("当前表格无法向下合并");
        return false;
      }

      this.rightMenuSelectValue.trs[this.trIndex].tds[
        this.tdIndex
      ].rowspan += 1;
      this.rightMenuSelectValue.trs[
        this.trIndex + 1
      ].tds = this.rightMenuSelectValue.trs[this.trIndex + 1].tds.filter(
        (item, index) => index !== this.tdIndex - rows
      );

      // }
    },
    handleRightMerge() {
      // 向右合并
      const sumCols = this.rightMenuSelectValue.trs[this.trIndex].tds
        .map(item => item.colspan)
        .reduce(function(partial, value) {
          return partial + value;
        });
      if (
        sumCols -
          this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
            .colspan <=
        this.tdIndex
      ) {
        this.$message.error("当前是最后一列，无法向右合并");
        return false;
      }
      if (
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
          .rowspan !==
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex + 1]
          .rowspan
      ) {
        this.$message.error("当前表格无法向右合并");
        return false;
      }

      this.rightMenuSelectValue.trs[this.trIndex].tds[
        this.tdIndex
      ].colspan += this.rightMenuSelectValue.trs[this.trIndex].tds[
        this.tdIndex + 1
      ].colspan;

      this.rightMenuSelectValue.trs[
        this.trIndex
      ].tds = this.rightMenuSelectValue.trs[this.trIndex].tds.filter(
        (item, index) => {
          return index !== this.tdIndex + 1;
        }
      );
      // }
    },
    handleAddCol() {
      // 增加列
      this.rightMenuSelectValue.trs.forEach(item => {
        item.tds.splice(this.tdIndex + 1, 0, {
          colspan: 1,
          rowspan: 1,
          list: []
        });
      });
    },
    handleAddRow() {
      // 增加行
      // 获取总col值
      const sumCols = this.rightMenuSelectValue.trs[0].tds
        .map(item => item.colspan)
        .reduce(function(partial, value) {
          return partial + value;
        });
      const rowJson = { tds: [] };
      for (let i = 0; i < sumCols; i++) {
        rowJson.tds.push({
          colspan: 1,
          rowspan: 1,
          list: []
        });
      }
      this.rightMenuSelectValue.trs.splice(this.trIndex + 1, 0, rowJson);
    },
    handleShowRightMenu(e, val, trIndex, tdIndex) {
      // 显示右键菜单
      e.stopPropagation();
      // this.fileItem = item
      // 显示
      this.showRightMenu = true;

      // 定位
      this.menuTop = e.clientY;
      this.menuLeft = e.clientX;
      // this.rightMenuType = type
      // this.rightId = id
      this.activeArr = [val];
      this.rightMenuSelectValue = val;
      this.trIndex = trIndex;
      this.tdIndex = tdIndex;
      return false;
    },
    handleRemoveRightMenu() {
      // 取消右键菜单
      this.showRightMenu = false;
    }
  },
  mounted() {
    // 监听取消右键菜单
    document.addEventListener("click", this.handleRemoveRightMenu, true);
    document.addEventListener("contextmenu", this.handleRemoveRightMenu, true);
  },
  destroyed() {
    // 取消监听
    document.removeEventListener("click", this.handleRemoveRightMenu, true);
    document.removeEventListener(
      "contextmenu",
      this.handleRemoveRightMenu,
      true
    );
  }
};
</script>
