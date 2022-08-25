import { Outlet } from 'react-router-dom';
import { Container } from 'frame/Layout/Container.styled';
import { AppBar } from 'frame/AppBar/AppBar';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
export default Layout;
