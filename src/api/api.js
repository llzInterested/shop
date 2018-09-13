/**
 * Created by DELL on 2018/9/13.
 */
const methods = {
  //切换class
  toggleClass (dom, className) {
    if (dom.classList.contains(className)) {
      dom.classList.remove(className);
    } else {
      dom.classList.add(className);
    }
  },
//  添加class
  addClass(dom,className){
    dom.classList.add(className);
  },
//  删除class
  removeClass(dom,className){
    dom.classList.remove(className);
  }
}
export default methods;