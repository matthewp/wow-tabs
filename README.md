# &lt;wow-tabs&gt;

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/matthewp/wow-tabs)

The last tabs you'll ever need. &lt;wow-tabs&gt; makes it easy to define ...

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="./wowtabs.html">
    <style>
      wow-tabs {
        width: 400px;
        margin-bottom: 200px;
      }

      wow-panel {
        font-size: 115%;
        margin-top: 20px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<wow-tabs position="top">
  <wow-panel title="First">Some text</wow-panel>
  <wow-panel title="Second">More text</wow-panel>
</wow-tabs>
```

## API

### &lt;wow-tabs&gt;

The wow-tabs element creates tabs with nested `<wow-panel>`, with each panel accounting for 1 tab. When a tab is selected its associated panel is displayed.

#### position

The **position** attribute controls where the tabs are positioned next to the panel content. Possible values are:

* **left** positions the tabs to the left of the content.
* **top** positions the tabs above the content.
* **bottom** positions the tabs below the content.
* **right** positions the tabs to the right of the content.

```html
<wow-tabs position="right">
  <wow-panel title="One">The is the first panel</wow-panel>
  <wow-panel title="Two">This is the second panel</wow-panel>
</wow-tabs>
```

### &lt;wow-panel&gt;

A **wow-panel** is a section of content that will be displayed when its associated tab is selected. Any HTML can be contained within a wow-panel.

#### title

The **title** attribute specifies the title of the tab.

```html
<wow-panel title="First">...</wow-panel>
```

![Image of wow-tabs](https://cloud.githubusercontent.com/assets/361671/22232244/428cc004-e1b6-11e6-960e-4745bf75ccc8.png)

## License

BSD 2 Clause
