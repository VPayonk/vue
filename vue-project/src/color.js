export default {
  bind(el, bindings, vnode) {
    // el.style.color = 'bindings';
    const arg = bindings.arg;
    el.style[arg] = bindings.value;



  }
}