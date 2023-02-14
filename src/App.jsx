import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"

import { MainLayout } from './layouts'

import { Home } from './components'
import { Helmet } from "react-helmet"

function App() {
  const dispatch = useDispatch()
  const { defaultTab, availableTabs } = useSelector(state => state.tabManager)
  const theme = useSelector(state => state.theme)
  const [metaThemeColor, setMetaThemeColor] = useState(() => {
    return theme.selected === "dark" ? "#121212" : "#ffffff"
  })

  useEffect(() => {
    setMetaThemeColor((prev) => {
      return theme.selected === "dark" ? "#121212" : "#ffffff"
    })
  }, [theme.selected])
  
  return (
    <div className="bg-gray-50 dark:bg-black">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={metaThemeColor} />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home tab={defaultTab} />} />
            {
              availableTabs?.map((tab, index) => (
                <Route key={`${tab}${index}`} path={"/"+tab} element={<Home tab={tab} />} />
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App
