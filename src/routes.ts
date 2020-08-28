import Login from '@/views/Login'
import Home from '@/views/Home'
import Note from '@/views/Note'
import Edit from '@/views/Edit'
import About from '@/views/About'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/edit',
    exact: true,
    component: Edit,
  },
  {
    path: '/note',
    exact: true,
    component: Note,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
