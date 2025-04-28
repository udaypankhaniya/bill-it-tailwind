
import { Outlet } from 'react-router-dom';
import AppSidebar from './AppSidebar';

const ProtectedRoute = () => {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedRoute;
