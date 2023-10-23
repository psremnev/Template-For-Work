import './Base.less'
import { useSelectorService } from 'store/slice/service'
import { useDispatch } from 'react-redux'
import { changeLang, changeTheme } from 'store/slice/service'

export default function Base() {
  const application = useSelectorService((state) => state.service)
  const dispatch = useDispatch();

  return (
    <div
      className='base'
      style={{
        background: application.theme === 'light' ? 'white' : '#313131'
      }}
    >
      <button
        onClick={() =>
          dispatch(changeLang(application.lang === 'ru' ? 'eng' : 'ru'))
        }
      >
        {application.lang}
      </button>
      <button
        onClick={() =>
          dispatch(
            changeTheme(application.theme === 'light' ? 'dark' : 'light')
          )
        }
      >
        {application.theme}
      </button>
    </div>
  )
}
