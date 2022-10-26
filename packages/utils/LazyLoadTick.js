/**
 * 组件懒加载钩子
 */
class LazyLoadTick {
  lazyLoadTypeSet = new Set();
  LoadedTypeSet = new Set();
  funArray = [];

  /**
   * 重置状态懒加载组件计算
   */
  reset() {
    // 清空集合
    this.lazyLoadTypeSet.clear();
    this.LoadedTypeSet.clear();
  }

  /**
   * 存储待执行函数
   * @param {*} fun
   */
  nextTick(fun) {
    this.funArray.push(fun);
    // 默认验证一次,组件可能提前加载完成了
    this.verifyLoaded();
  }
  /**
   * 记录懒加载组件数量
   */
  countlazyLoad(type) {
    this.lazyLoadTypeSet.add(type);
  }

  /**
   * 记录组件已加载数量
   */
  countLoaded(type) {
    this.LoadedTypeSet.add(type);
    this.verifyLoaded();
  }

  /**
   * 验证懒加载组件是否成功
   */
  verifyLoaded() {
    // 已加载数量与懒加载数量一致，说明已加载所有组件，执行钩子函数
    if (
      this.lazyLoadTypeSet.size &&
      this.LoadedTypeSet.size === this.lazyLoadTypeSet.size
    ) {
      this.runHook();
    }
  }
  /**
   * 懒加载完毕执行函数
   */
  runHook() {
    // 执行所有已添加的函数
    this.funArray.forEach(fun => {
      fun();
    });
    // 执行完毕清除函数
    this.funArray = [];
  }
}
export const lazyLoadTick = new LazyLoadTick();
