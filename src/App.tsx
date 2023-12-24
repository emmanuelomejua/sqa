import React from 'react'
import './app.scss';
import { Navbar, Footer, Sidebar } from './comps';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login } from './pages';


const Layout = () => {
  return(
    <main className='app_main'>
      <section className='app_mainCont'>
        <Navbar/>
        <section className='app_cont'>
          <section>
            <Sidebar/>
          </section>
          <section>
            <Outlet/>
          </section>
        </section>
        <Footer/>
      </section>
    </main>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

function App() {
  return (
    <main className="app">
        <RouterProvider router={router}/>
    </main>
  );
}

export default App;
