import Navber from '../Shared/Navber/Navber';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <Navber />
        <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;