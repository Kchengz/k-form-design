<template>
  <div>
    <template v-if="record.type === 'grid'">
      <div
        class="grid-box"
        :class="{ active: record.key === selectItem.key }"
        @click="handleSelectItem(record)"
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
              @add="$emit('handleColAdd', $event, colItem.list)"
            >
              <layoutItem
                v-for="item in colItem.list"
                :key="item.key"
                :selectItem.sync="selectItem"
                :record="item"
                :config="config"
                @handleSelectItem="handleSelectItem"
                @handleColAdd="handleColAdd"
                @handleCopy="$emit('handleCopy')"
                @handleShowRightMenu="handleShowRightMenu"
                @handleDetele="$emit('handleDetele')"
              />
            </draggable>
          </a-col>
        </a-row>
        <div class="drag-move" v-if="record.key === selectItem.key">
          <a-icon type="swap" />
        </div>
        <div
          class="copy"
          v-if="record.key === selectItem.key"
          @click="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          v-if="record.key === selectItem.key"
          @click="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div>
      </div>
    </template>
    <!-- 卡片布局 -->
    <template v-else-if="record.type === 'card'">
      <div
        class="grid-box"
        :class="{ active: record.key === selectItem.key }"
        @click="handleSelectItem(record)"
      >
        <a-card class="grid-row" :title="record.name">
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
              @add="$emit('handleColAdd', $event, record.list)"
            >
              <layoutItem
                v-for="item in record.list"
                :key="item.key"
                :selectItem.sync="selectItem"
                :record="item"
                :config="config"
                @handleSelectItem="handleSelectItem"
                @handleColAdd="handleColAdd"
                @handleCopy="$emit('handleCopy')"
                @handleShowRightMenu="handleShowRightMenu"
                @handleDetele="$emit('handleDetele')"
              />
              <!-- </transition-group> -->
            </draggable>
          </div>
        </a-card>
        <div class="drag-move" v-if="record.key === selectItem.key">
          <a-icon type="swap" />
        </div>
        <div
          class="copy"
          v-if="record.key === selectItem.key"
          @click="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          v-if="record.key === selectItem.key"
          @click="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div>
      </div>
    </template>
    <!-- 表格布局 -->
    <template v-else-if="record.type === 'table'">
      <div
        class="table-box"
        :class="{ active: record.key === selectItem.key }"
        @click="handleSelectItem(record)"
      >
        <table
          class="table-layout kk-table-9136076486841527"
          :class="{
            bright: record.options.bright,
            small: record.options.small,
            bordered: record.options.bordered
          }"
          :style="{
            width: record.options.width,
            marginTop: record.options.marginTop,
            marginRight: record.options.marginRight,
            marginBottom: record.options.marginBottom,
            marginLeft: record.options.marginLeft
          }"
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
                @add="$emit('handleColAdd', $event, tdItem.list)"
              >
                <layoutItem
                  v-for="item in tdItem.list"
                  :key="item.key"
                  :selectItem.sync="selectItem"
                  :record="item"
                  :config="config"
                  @handleSelectItem="handleSelectItem"
                  @handleColAdd="handleColAdd"
                  @handleCopy="$emit('handleCopy')"
                  @handleShowRightMenu="handleShowRightMenu"
                  @handleDetele="$emit('handleDetele')"
                />
              </draggable>
            </td>
          </tr>
        </table>

        <div class="drag-move" v-if="record.key === selectItem.key">
          <a-icon type="swap" />
        </div>
        <div
          class="copy"
          v-if="record.key === selectItem.key"
          @click="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          v-if="record.key === selectItem.key"
          @click="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div>
      </div>
    </template>
    <template v-else>
      <handleSelectItem
        :key="record.key"
        :selectItem.sync="selectItem"
        :record="record"
        :config="config"
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
 * athor kcz
 * date 2019-11-20
 */
import draggable from "vuedraggable";
import handleSelectItem from "./handleSelectItem";
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
    }
  },
  components: {
    handleSelectItem,
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
