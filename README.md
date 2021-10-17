# React tab basic
## Installation
Get the latest version by NPM:
```bash
$ npm install react-tab-basic
```
Get the latest version by yarn:
```bash
$ yarn add react-tab-basic
```

## Usage
### Components
Import `Tabs` and `Tab` components:
```javascript
import { Tabs, Tab } from 'react-tab-basic';
```
And render them like this:
```javascript
<Tabs defaultActiveKey="tab1">
  <Tab activeKey="tab1" title="Tab 1">
    <Component />
  </Tab>
  <Tab activeKey="tab2" title="Tab 2">
    <Component />
  </Tab>
</Tabs>
```
## License
React tab basic are released under the MIT license.
© kpwzto