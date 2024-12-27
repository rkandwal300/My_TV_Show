import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShowDetailPage from './Pages/ShowDetails.Page';
import ShowListPage from './Pages/ShowsList.Page';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ShowListPage />,
    },
    {
      path: '/show/:show_id',
      element: <ShowDetailPage />,
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
