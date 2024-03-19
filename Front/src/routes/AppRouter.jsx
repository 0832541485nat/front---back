import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import AdminMenu from '../admin/AdminMenu'
import Bk from '../layout/Bk'
import Product from '../layout/Product'
import Chrt from  '../layout/Chrt'
import Order from '../layout/Order'
import Payment from '../layout/Payment'
import ThankYouPage from '../layout/ThankYouPage'
import Basket from '../layout/basket'
import Succeed from '../layout/succeed'
import Product1 from '../admin/Product1'
import Graph from '../admin/graph'
import Home from '../admin/Home'




const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />}
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <> <Bk/> <UserHome/> </> },
      { path: '/new', element: <p>New Todo Form</p>},
      { path: '/bk', element: <Bk/> },
      { path: '/product', element: <Product/> },
      { path: '/chrt', element: <Chrt/> },
      { path: '/Order', element: <Order/> },
      { path: '/Payment', element: <Payment/> },
      { path: '/ThankYouPage', element: <ThankYouPage/> },
      { path:'/Basket', element: <Basket/> },
      { path:'/Succeed', element: <Succeed/>}
      
     

    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <div className='flex flex-row px-4 py-6 gap-x-4'>
      <AdminMenu/>
      <Outlet />
    </div>,
    children: [
      { index: true, element: <AdminMenu /> },
      { path: '/AdminMenu', element: <AdminMenu to='/UserHome'/> },
      { path: '/Product1', element: <Product1  /> },
      { path: '/Graph', element: <Graph/>},
      { path: '/Home', element: <Home/>},
      // { path: '/AdminAnime', element: <AdminAnime to='/' /> },
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.role === 'ADMIN' ? adminRouter : user ?  userRouter : guestRouter;
  return (
    <RouterProvider router={finalRouter} />
  )
}
