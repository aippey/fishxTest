# fishx-dsktop-base

fishx-dsktop-base

- 整体架子有自适应处理；

- 在global.less里，有提供全局样式类`main-layout-content`，`bg-white`，`full-height`；

- 如果需要修改页面外面的间距，请在global.less里修改`main-layout-content`的padding，默认为8px;

- 页面背景为透明或白色背景等都可以，默认页面背景为透明。如果需要白色背景，需要在页面外围增加2层背景为白色的div, 可使用全局样式类`bg-white`, 因为支持页面自适应。

