import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"

import { goTo } from "./store/features"

import { MainLayout } from './layouts'

import { Home } from './components'

function App() {
  const dispatch = useDispatch()
  const { defaultTab, availableTabs } = useSelector(state => state.tabManager)
  
  return (
    <div className="bg-gray-50 dark:bg-black">
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
