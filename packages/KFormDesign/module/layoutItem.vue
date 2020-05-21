<template>
  <div
    :class="{
      'layout-width': ['grid', 'table', 'card', 'divider', 'html'].includes(
        record.type
      )
    }"
  >
    <!-- 动态表格设计模块 start -->
    <template v-if="record.type === 'batch'">
      <div
        class="batch-box"
        :class="{ active: record.key === selectItem.key }"
        @click.stop="handleSelectItem(record)"
      >
        <div class="batch-label">动态表格</div>
        <draggable
          tag="div"
          class="draggable-box"
          v-bind="{
            group: insertAllowed ? 'form-draggable' : '',
            ghostClass: 'moving',
            animation: 180,
            handle: '.drag-move'
          }"
          v-model="record.list"
          @start="$emit('dragStart', $event, record.list)"
          @add="$emit('handleColAdd', $event, record.list)"
        >
          <transition-group tag="div" name="list" class="list-main">
            <formNode
              v-for="item in record.list"
              :key="item.key"
              class="drag-move"
              :selectItem.sync="selectItem"
              :record="item"
              :hideModel="hideModel"
              :config="config"
              @handleSelectItem="handleSelectItem"
              @handleColAdd="handleColAdd"
              @handleCopy="$emit('handleCopy')"
              @handleShowRightMenu="handleShowRightMenu"
              @handleDetele="$emit('handleDetele')"
            />
          </transition-group>
        </draggable>
        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div>
      </div>
    </template>
    <!-- 动态表格设计模块 end -->
    <!-- 栅格布局 start -->
    <template v-else-if="record.type === 'grid'">
      <div
        class="grid-box"
        :class="{ active: record.key === selectItem.key }"
        @click.stop="handleSelectItem(record)"
      >
        <a-row class="grid-row" :gutter="record.options.gutter">
          <a-col
            class="grid-col"
            v-for="(colItem, idnex) in record.columns"
            :key="idnex"
            :span="colItem.span || 0"
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
              v-model="colItem.list"
              @start="$emit('dragStart', $event, colItem.list)"
              @add="$emit('handleColAdd', $event, colItem.list)"
            >
              <transition-group tag="div" name="list" class="list-main">
                <layoutItem
                  class="drag-move"
                  v-for="item in colItem.list"
                  :key="item.key"
                  :selectItem.sync="selectItem"
                  :startType="startType"
                  :insertAllowedType="insertAllowedType"
                  :record="item"
                  :hideModel="hideModel"
                  :config="config"
                  @handleSelectItem="handleSelectItem"
                  @handleColAdd="handleColAdd"
                  @handleCopy="$emit('handleCopy')"
                  @handleShowRightMenu="handleShowRightMenu"
                  @handleDetele="$emit('handleDetele')"
                />
              </transition-group>
            </draggable>
          </a-col>
        </a-row>

        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div>
      </div>
    </template>
    <!-- 栅格布局 end -->
    <!-- 卡片布局 start -->
    <template v-else-if="record.type === 'card'">
      <div
        class="grid-box"
        :class="{ active: record.key === selectItem.key }"
        @click.stop="handleSelectItem(record)"
      >
        <a-card class="grid-row" :title="record.label">
          <div class="grid-col">
            <draggable
              tag="div"
              class="draggable-box"
              v-bind="{
                group: 'form-draggable',
                ghostClass: 'moving',
                animation: 180,
                handle: '.drag-move'
              }"
              v-model="record.list"
              @start="$emit('dragStart', $event, record.list)"
              @add="$emit('handleColAdd', $event, record.list)"
            >
              <transition-group tag="div" name="list" class="list-main">
                <layoutItem
                  class="drag-move"
                  v-for="item in record.list"
                  :key="item.key"
                  :selectItem.sync="selectItem"
                  :startType="startType"
                  :insertAllowedType="insertAllowedType"
                  :record="item"
                  :hideModel="hideModel"
                  :config="config"
                  @handleSelectItem="handleSelectItem"
                  @handleColAdd="handleColAdd"
                  @handleCopy="$emit('handleCopy')"
                  @handleShowRightMenu="handleShowRightMenu"
                  @handleDetele="$emit('handleDetele')"
                />
              </transition-group>
            </draggable>
          </div>
        </a-card>

        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div>
      </div>
    </template>
    <!-- 卡片布局 end -->
    <!-- 表格布局 start -->
    <template v-else-if="record.type === 'table'">
      <div
        class="table-box"
        :class="{ active: record.key === selectItem.key }"
        @click.stop="handleSelectItem(record)"
      >
        <table
          class="table-layout kk-table-9136076486841527"
          :class="{
            bright: record.options.bright,
            small: record.options.small,
            bordered: record.options.bordered
          }"
          :style="record.options.customStyle"
        >
          <tr v-for="(trItem, trIndex) in record.trs" :key="trIndex">
            <td
              class="table-td"
              v-for="(tdItem, tdIndex) in trItem.tds"
              :key="tdIndex"
              :colspan="tdItem.colspan"
              :rowspan="tdItem.rowspan"
              @contextmenu.prevent="
                $emit('handleShowRightMenu', $event, record, trIndex, tdIndex)
              "
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
                v-model="tdItem.list"
                @start="$emit('dragStart', $event, tdItem.list)"
                @add="$emit('handleColAdd', $event, tdItem.list)"
              >
                <transition-group tag="div" name="list" class="list-main">
                  <layoutItem
                    class="drag-move"
                    v-for="item in tdItem.list"
                    :key="item.key"
                    :selectItem.sync="selectItem"
                    :startType="startType"
                    :insertAllowedType="insertAllowedType"
                    :record="item"
                    :hideModel="hideModel"
                    :config="config"
                    @handleSelectItem="handleSelectItem"
                    @handleColAdd="handleColAdd"
                    @handleCopy="$emit('handleCopy')"
                    @handleShowRightMenu="handleShowRightMenu"
                    @handleDetele="$emit('handleDetele')"
                  />
                </transition-group>
              </draggable>
            </td>
          </tr>
        </table>

        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div>
      </div>
    </template>
    <!-- 表格布局 end -->
    <template v-else>
      <formNode
        :key="record.key"
        :selectItem.sync="selectItem"
        :record="record"
        :config="config"
        :hideModel="hideModel"
        @handleSelectItem="handleSelectItem"
        @handleCopy="$emit('handleCopy')"
        @handleDetele="$emit('handleDetele')"
        @handleShowRightMenu="$emit('handleShowRightMenu')"
      />
    </template>
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 使用递归组件调用自己，生成布局结构及表单
 */
import draggable from "vuedraggable";
import formNode from "./formNode";
export default {
  name: "layoutItem",
  props: {
    record: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    },
    startType: {
      type: String,
      required: true
    },
    insertAllowedType: {
      type: Array,
      required: true
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    insertAllowed() {
      return this.insertAllowedType.includes(this.startType);
    }
  },
  components: {
    formNode,
    draggable
  },
  methods: {
    handleShowRightMenu(e, record, trIndex, tdIndex) {
      this.$emit("handleShowRightMenu", e, record, trIndex, tdIndex);
    },
    handleSelectItem(record) {
      this.$emit("handleSelectItem", record);
    },
    handleColAdd(e, list) {
      this.$emit("handleColAdd", e, list);
    }
  }
};
</script>
