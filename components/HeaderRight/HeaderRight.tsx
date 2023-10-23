import './HeaderRight.less'
import { useSelectorService } from 'store/slice/service'
import { useDispatch } from 'react-redux'
import { changeLang, changeTheme, THEME, LANG } from 'store/slice/service'

export default function () {
  const application = useSelectorService((state) => state.service)
  const dispatch = useDispatch()

  return (
    <section className='headerRight'>
      <button
        onClick={() =>
          dispatch(
            changeLang(application.lang === LANG.RU ? LANG.ENG : LANG.RU)
          )
        }
      >
        {application.lang}
      </button>
      <button
        onClick={() =>
          dispatch(
            changeTheme(
              application.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          )
        }
      >
        {application.theme}
      </button>
    </section>
  )
}
