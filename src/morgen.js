import React, { Component } from "react";

class Handler {
  constructor() {
    this._observers = [];
  }
  set(obj, prop, value, receiver) {
    value = observe(value);
    const r = Reflect.set(obj, prop, value, receiver);
    this._observers.map(observer => observer(obj, prop, value, receiver));
    return r;
  }
  observe(observer) {
    this._observers.push(observer);
  }
}

export function watch(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      const keys = Object.keys(this.props);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (this.props[key]._handler) {
          this.props[key]._handler.observe(() => this.forceUpdate());
        }
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export function observe(obj) {
  if (obj.constructor === Object || obj.constructor === Array) {
    let t = obj.constructor();
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      t[key] = observe(obj[key]);
    }

    const handler = new Handler();
    const proxy = new Proxy(t, handler);
    proxy._handler = handler;
    return proxy;
  } else {
    return obj;
  }
}
