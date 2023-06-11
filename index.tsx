import { createRoot } from 'react-dom/client'
import Element from './components/Element'
import './index.less';

const Demo = () => {
  return <Element />
}

const root = createRoot(document.querySelector('#root'))
root.render(<Demo />)
