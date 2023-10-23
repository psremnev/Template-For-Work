import './Application.less'
import { useSelectorService } from 'store/slice/service'
import HeaderRight from 'components/HeaderRight/HeaderRight'

export default function() {
  const application = useSelectorService((state) => state.service)
  
  return (
    <div className={`application theme-${application.theme}`}>
      <header>
        <h1>Application Name</h1>
        <HeaderRight />
      </header>
      <main>
        <h1>Main</h1>
      </main>
    </div>
  )
}
