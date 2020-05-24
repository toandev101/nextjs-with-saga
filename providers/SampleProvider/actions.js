import {
    HELLO,
  } from './constants';
  
  export function sayHello(payload = {}) {
    return {type: HELLO, payload};
  }
