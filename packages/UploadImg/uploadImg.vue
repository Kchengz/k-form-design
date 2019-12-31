<template>
  <div
    :style="{ width: record.options.width }"
    class="upload-img-box-9136076486841527"
  >
    <a-upload
      :name="record.model"
      :multiple="record.options.multiple"
      :listType="record.options.listType"
      :disabled="record.options.disabled"
      :data="optionsData"
      :fileList="fileList"
      :action="record.options.action"
      accept="image/gif, image/jpeg, image/png"
      @change="handleChange"
      @preview="handlePreview"
      :remove="remove"
      :beforeUpload="beforeUpload"
    >
      <a-button
        v-if="
          record.options.listType !== 'picture-card' &&
            fileList.length < record.options.limit
        "
        :disabled="record.options.disabled"
      >
        <a-icon type="upload" /> {{ record.options.placeholder }}
      </a-button>
      <div
        v-if="
          record.options.listType === 'picture-card' &&
            fileList.length < record.options.limit
        "
        :disabled="record.options.disabled"
      >
        <a-icon type="plus" />
        <div class="ant-upload-text">{{ record.options.placeholder }}</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImageUrl" />
    </a-modal>
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-12-31
 * description 上传图片组件
 */
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value"],
  data() {
    return {
      fileList: [],
      previewVisible: false,
      previewImageUrl: ""
    };
  },
  watch: {
    value(val) {
      this.fileList = val;
    }
  },
  computed: {
    optionsData() {
      try {
        return JSON.parse(this.record.options.data);
      } catch {
        return {};
      }
    }
  },
  methods: {
    handleSelectChange() {
      setTimeout(() => {
        const arr = this.fileList.map(item => {
          if (typeof item.response !== "undefined") {
            const res = item.response;
            return {
              // type: "img",
              name: item.name,
              status: item.status,
              uid: item.uid,
              url: res.data.url || ""
            };
          } else {
            return {
              // type: "img",
              name: item.name,
              status: item.status,
              uid: item.uid,
              url: item.url || ""
            };
          }
        });

        this.$emit("change", arr);
        this.$emit("input", arr);
      }, 10);
    },
    handlePreview(file) {
      // 预览图片
      this.previewImageUrl = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleCancel() {
      // 取消操作
      this.previewVisible = false;
    },
    remove() {
      this.handleSelectChange();
    },
    beforeUpload(e, files) {
      if (files.length + this.fileList.length > this.record.options.limit) {
        this.$message.warning(`最大上传数量为${this.record.options.limit}`);
        files.splice(this.record.options.limit - this.fileList.length);
      }
    },
    handleChange(info) {
      // 上传数据改变时
      this.fileList = info.fileList;
      if (info.file.status === "done") {
        const res = info.file.response;
        if (res.code === 0) {
          this.handleSelectChange();
        } else {
          this.fileList.pop();
          this.$message.error(`图片上传失败`);
        }
      } else if (info.file.status === "error") {
        this.$message.error(`图片上传失败`);
      }
    }
  }
};
</script>
<style lang="less">
.upload-img-box-9136076486841527 {
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
}
</style>
