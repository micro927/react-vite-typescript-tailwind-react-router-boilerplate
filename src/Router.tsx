import { Route, Routes } from 'react-router-dom';
import { MAIN_ROUTE } from '@/constants/route';
import Welcome from '@/components/Welcome';

function Router() {
  return (
    <Routes>
      <Route path={MAIN_ROUTE.WELCOME} index element={<Welcome />} />
    </Routes>
  );
}

export default Router;
