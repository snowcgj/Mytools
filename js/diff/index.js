



const oldTree = {
    tag: 'div',
    props: { id: 'app' },
    children: [
      { tag: 'h1', props: {}, children: ['Hello'] },
      { tag: 'p', props: {}, children: ['This is a paragraph.'] }
    ]
  };
  
const newTree = {
    tag: 'div',
    props: { id: 'app', class: 'container' }, // 新增 class
    children: [
        { tag: 'h1', props: {}, children: ['Hello World!'] }, // 文本变化
        { tag: 'p', props: {}, children: ['This is a paragraph.'] }
    ]
};
  
import {diff } from './utill.js'

const patch = diff(oldTree, newTree);

console.log(JSON.stringify(patch, null, 2));
  