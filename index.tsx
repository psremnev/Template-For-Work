import { createRoot } from 'react-dom/client'
import Application from 'components/Application'
import { Provider } from 'react-redux';
import ApplicationStore from 'store/application';
import './index.less';

const root = createRoot(document.querySelector('#root'))
root.render(
  <Provider store={ApplicationStore}>
    <Application />
  </Provider>
)
