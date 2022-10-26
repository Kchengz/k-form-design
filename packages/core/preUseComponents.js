/**
 * 预加载组件文件。
 * 与useComponents文件功能一样，区别就是useComponents文件是懒加载组件的方式，这个文件是预加载的方式
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import { pluginManager } from "../utils/index";
import "./preUseAntd";
import KButton from "../components/KButton/index";
import KDivider from "../components/KDivider/index";
import KHtml from "../components/KHtml/index";
import KSlider from "../components/KSlider/index";
import KText from "../components/KText/index";
import KDatePicker from "../components/KDatePicker/index";
import KTimePicker from "../components/KTimePicker/index";
import UploadFile from "../components/UploadFile/index";
import UploadImg from "../components/UploadImg/index";
import KBatch from "../components/KBatch/index";
import KSelectInputList from "../components/KSelectInputList/index";
import KEditor from "../components/KEditor/index";

import { codemirror } from "vue-codemirror-lite";
import colorPicker from "vcolorpicker";

pluginManager.addComponent("button", KButton);
pluginManager.addComponent("divider", KDivider);
pluginManager.addComponent("html", KHtml);
pluginManager.addComponent("slider", KSlider);
pluginManager.addComponent("text", KText);
pluginManager.addComponent("date", KDatePicker);
pluginManager.addComponent("time", KTimePicker);
pluginManager.addComponent("uploadFile", UploadFile);
pluginManager.addComponent("uploadImg", UploadImg);
pluginManager.addComponent("batch", KBatch);
pluginManager.addComponent("selectInputList", KSelectInputList);
pluginManager.addComponent("editor", KEditor);
pluginManager.addComponent("colorPicker", colorPicker);
pluginManager.addComponent("codemirror", codemirror);
