import './Application.less'
import { useSelectorService, THEME, BACKGROUND } from 'store/slice/service'
import { useMemo } from 'react'
import HeaderRight from 'components/HeaderRight/HeaderRight'

export default function() {
  const application = useSelectorService((state) => state.service)
  const background = useMemo(() => {
    return application.theme === THEME.LIGHT ? BACKGROUND.Light : BACKGROUND.Dark
  }, [application])
  
  return (
    <div className='application' style={{ background }}>
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
