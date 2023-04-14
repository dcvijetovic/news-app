import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: ':category', element: <CategoryPage /> },
      ],
    },
  ]);
}
