export function exportData(data, fileName = "data.json") {
  // 导出文本数据
  let content = "data:text/csv;charset=utf-8,";
  content += data;
  var encodedUri = encodeURI(content);
  var actions = document.createElement("a");
  actions.setAttribute("href", encodedUri);
  actions.setAttribute("download", fileName);
  actions.click();
}
