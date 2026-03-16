import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Overview from '../pages/Overview'
import POS from '../pages/POS'
import Products from '../pages/Products'
import Invoices from '../pages/Invoices'
import Customers from '../pages/Customers'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'

export const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'pos', element: <POS /> },
      { path: 'products', element: <Products /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'customers', element: <Customers /> },
      { path: 'reports', element: <Reports /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
])
