import React from 'react'
import './app.scss';
import { Navbar, Sidebar } from './comps';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Signin, Signup } from './pages';
import { Availability, CSAT, CodeChurn, CrashRate, DefectDensity, MTBF, MTTR, MTTD, CodeCoverage } from './pages/others';


const Layout = () => {
  return(
    <section className='app'>
    <Navbar/>
    <section  className='app_cont'>
      <section className='app__sidebar'>
      <Sidebar/>
      </section>
      <section className='app_container'>
      <Outlet/>
      </section>
    </section>
  </section>
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
      },
      {
        path: '/availability',
        element: <Availability/>
      },
      {
        path: '/csat',
        element: <CSAT/>
      },
      {
        path: '/crashrate',
        element: <CrashRate/>
      },
      {
        path: '/codechurn',
        element: <CodeChurn/>
      },
      {
        path: '/ddensity',
        element: <DefectDensity/>
      },
      {
        path: '/mttd',
        element: <MTTD/>
      },
      {
        path: '/ccoverage',
        element: <CodeCoverage/>
      },
      {
        path: '/mtbf',
        element: <MTBF/>
      },
      {
        path: '/mttr',
        element: <MTTR/>
      },
    ]
  },
  {
    path: '/login',
    element: <Signin/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
])

function App() {
  return (
    <main className="app">
        <RouterProvider router={router}/>
    </main>
  );
}

export default App;
