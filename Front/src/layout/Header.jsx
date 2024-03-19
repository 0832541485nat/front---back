import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: <b style={{ color: 'black' }}>Login</b> },
  { to: '/register', text: <b style={{ color: 'black' }}>Sign Up</b> },
  // Add more menu items if needed
];




const userNav = [
  // { to : '/', text: 'Home' },
  // { to : '/movie', text: 'Movie' },
  // { to : '/Chrt', text: 'Chrt' },
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
<div className="navbar bg-green-600 border-b-2 border-solid border-gray-200">
  <div className="flex-1">
  <a className="btn btn-ghost text-xl bg-gradient-to-br from-yellow-400 to-red-500">Cool shoe shop      {/* {user?.id ? user.username : ''} */}
    </a>
  </div>
  <div className="">
    <Link to={user?.id? "/" : "/"} className="btn btn-ghost text-sm">
      Home
    </Link>
  </div>
  <div className="">
    <Link to={user?.id? "/Product" : "/"} className="btn btn-ghost text-sm">
      Product
    </Link>
  </div>
      {/* <div className="flex-1">
        <Link to={user?.id? "/Order" : "/"} className="btn btn-ghost text-sm">
        Order
        </Link>
      </div> */}
      <div class="relative overflow-x-auto ">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-600"/>
        <div>
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          
          { user?.id && (
            <li className='btn btn-ghost text-sm'>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#050505" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> */}

            <Link to='#' onClick={hdlLogout} style={{ color: 'black' }}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
    </div>
  );
}