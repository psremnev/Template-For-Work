import { createRoot } from 'react-dom/client'
import Base from './components/Base'
import { Provider } from 'react-redux';
import ApplicationStore from './store/application';
import './index.less';

const root = createRoot(document.querySelector('#root'))
root.render(
  <Provider store={ApplicationStore}>
    <Base />
  </Provider>
)
