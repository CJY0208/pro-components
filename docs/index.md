---
hero:
  title: ProComponents
  desc: 管理系统场景集成组件库
  actions:
    - text: 开始
      link: /pro-table
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 插件式
    desc: 各功能可插件式集成
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 配置式
    desc: 常见功能配置化
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 内置常用场景
    desc: 如表格的增删改查，以及常见数据格式如时间的渲染等
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

# ProComponents

[![size](https://img.shields.io/bundlephobia/minzip/@cjy0208/pro-components@latest.svg)](https://bundlephobia.com/result?p=@cjy0208/pro-components@latest) <span> </span> [![dm](https://img.shields.io/npm/dm/@cjy0208/pro-components.svg)](https://github.com/CJY0208/@cjy0208/pro-components) <span> </span> ![](https://visitor-badge.glitch.me/badge?page_id=cjy0208.pro-components.site)

管理系统场景集成组件库

## 安装

```bash
pnpm add @cjy0208/pro-components
# 或者
yarn add @cjy0208/pro-components
# 或者
npm install @cjy0208/pro-components --save
```

```jsx
/**
 * style: { display: 'none' }
 */
import React, { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import ParticlesBg from 'particles-bg'
import { run, sample, isAndroid, isIOS, debounce, throttle } from '@cjy0208/tools'

const getAnimationConfig = () => {
  const isMobile = isAndroid() || isIOS()
  const type = sample(
    [
      // 'color',
      isMobile ? undefined : 'cobweb',
      'polygon',
      'square',
      'fountain',
      'ball',
      'custom',
    ].filter(Boolean),
  )

  const config =
    type === 'custom'
      ? {
          num: [4, 7],
          rps: 0.1,
          radius: [5, 40],
          life: [1.5, 3],
          v: [2, 3],
          tha: [-40, 40],
          alpha: [0.6, 0],
          scale: [0.1, 0.4],
          position: 'all',
          color: ['random', '#ff0000'],
          cross: 'dead',
          // emitter: "follow",
          random: 15,
        }
      : undefined

  return {
    type,
    config,
  }
}

function Portal({ children, className, to: appendTo = document.body }) {
  const container = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    if (className) {
      container.className = className
    }
  }, [className])

  useEffect(() => {
    run(appendTo, 'appendChild', container)

    return () => {
      run(appendTo, 'removeChild', container)
    }
  }, [])

  return createPortal(children, container)
}

function useContainer(selector) {
  const [container, setContainer] = useState(null)

  useEffect(() => {
    const query = throttle(() => {
      const node = document.querySelector(selector)

      if (!node) {
        query()
        return
      }

      setContainer(node)
    }, 100)
    query()
  }, [selector])

  return container
}

// https://github.com/lindelof/particles-bg
function Background() {
  const [config, setConfig] = useState(getAnimationConfig)
  const [waiting, setWaiting] = useState(true)
  const [renderKey, setRenderKey] = useState(Math.random)
  const container = useContainer('.__dumi-default-layout-hero')
  const ready = !container || !waiting

  useEffect(() => {
    const resizeHandler = debounce(() => {
      setRenderKey(Math.random)
      setConfig(getAnimationConfig)
    }, 300)
    setTimeout(() => setWaiting(false), 300)
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <>
      <style>{`
        .__dumi-default-layout-hero {
          position: relative;
        }
        .__dumi-default-layout-hero>* {
          position: relative;
          z-index: 2;
        }
        .particles-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          border-bottom: 1px solid #f8f8f8;
        }
    `}</style>
      {!ready ? null : (
        <Portal className="particles-background" to={container}>
          <ParticlesBg key={renderKey} bg {...config} />
        </Portal>
      )}
    </>
  )
}

export default Background
```
