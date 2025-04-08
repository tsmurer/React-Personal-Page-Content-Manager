// components/Layout.js
import Navigation from '../navigation/navigation';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;