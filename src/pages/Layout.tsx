import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <div className="container max-w-2xl lg:max-w-full lg:w-4/5">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default RootLayout;
