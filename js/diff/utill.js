// 1. 对比两棵树的变化，输出变化的补丁（patches）
export function diff(oldNode, newNode) {
    const patches = {}; // 记录补丁（变化）
  
    // 1. 标签不同，直接替换整个节点
    if (oldNode.tag !== newNode.tag) {
      patches.type = 'REPLACE';
      patches.newNode = newNode;
      return patches;
    }
  
    // 2. 对比属性（props）的变化
    const propsChanges = diffProps(oldNode.props, newNode.props);
    if (Object.keys(propsChanges).length > 0) {
      patches.props = propsChanges;
    }
  
    // 3. 对比子节点（递归对比）
    if (typeof oldNode.children === 'string' && typeof newNode.children === 'string') {
      if (oldNode.children !== newNode.children) {
        patches.type = 'TEXT';
        patches.text = newNode.children;
      }
    } else {
      const childrenChanges = diffChildren(oldNode.children, newNode.children);
      if (childrenChanges.length > 0) {
        patches.children = childrenChanges;
      }
    }
  
    return patches;
  }



/**  
    * 对比属性（diffProps）
    * 对比旧的 props 和新的 props，并返回需要更新的属性列表。
    *如果新属性值不同，则记录这个变化。
    * 如果旧属性存在而新属性被删除，需要删除该属性。
    * @param {object} oldProps - 原先DOM树
    * @param {object} newProps - 新的DOM树
    */
function diffProps(oldProps, newProps) {
    const patches = {};
  
    // 1. 找到新增和修改的属性
    for (let key in newProps) {
      if (oldProps[key] !== newProps[key]) {
        patches[key] = newProps[key]; // 新属性的值
      }
    }
  
    // 2. 找到被删除的属性
    for (let key in oldProps) {
      if (!(key in newProps)) {
        patches[key] = null; // 删除的属性用 null 表示
      }
    }
  
    return patches;
}
  

/**
     * 对比子节点（diffChildren）
    如果是文本节点，直接对比字符串是否相同。
    如果是嵌套的子树，对比每个子节点。
    列表的对比：如果有 key，使用 key 优化。
    无 key 的对比：直接使用位置对比。
 */
function diffChildren(oldChildren, newChildren) {
    const patches = [];
    const maxLen = Math.max(oldChildren.length(), newChildren.length());
  
    for (let i = 0; i < maxLen; i++) {
      const oldChild = oldChildren[i] || {}; // 可能不存在
      const newChild = newChildren[i] || {}; // 可能不存在
      const patch = diff(oldChild, newChild);
      patches.push(patch);
    }
  
    return patches;
  }
  