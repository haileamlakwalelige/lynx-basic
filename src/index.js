import { root } from '@lynx-js/react'

import { App } from './App.jsx'
import { MemoryRouter, Route, Routes } from 'react-router'
import Home from './screens/Home.jsx'
import Product from './screens/Product.jsx'
import 'tailwindcss/utilities.css';

root.render(
  <MemoryRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/home' element={<Home />} />
    <Route path='/product' element={<Product />} />
    </Routes>
  </MemoryRouter>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
