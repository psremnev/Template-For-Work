import { createRoot } from 'react-dom/client'
import Base from './components/Base'
import './index.less';

const root = createRoot(document.querySelector('#root'))
root.render(<Base />)
