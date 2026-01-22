import './App.css';
import Login from './component/auth/login/login';
import Logout from './component/auth/logout/logout';
import Dashboard from './component/admin/home/dashboard';
import Layout from './component/admin/layout/layout';
import WarehouseMgmt from './component/admin/layout/warehouse/warehouse-mgmt';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forgotpassword from './component/auth/forgot-password/forgotpassword';
import Sendotp from './component/auth/send-otp/sendOTP';
import Updatepassword from './component/auth/update-password/updatepassword';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Userbuyermgmt from './component/admin/layout/user-buyer-mgmt/user-buyer-mgmt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgotPassword' element={<Forgotpassword />} />
        <Route path='/updatePassword' element={<Updatepassword />} />
        <Route path='/sendOtp' element={<Sendotp />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/admin' element={<Dashboard />} >
          <Route path='/admin/dashboard' element={<Layout />}></Route>
          <Route path='/admin/warehouse-mgmt' element={<WarehouseMgmt />}></Route>
          <Route path='/admin/user-buyer-mgmt' element={<Userbuyermgmt />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
