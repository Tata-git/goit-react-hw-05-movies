import { Outlet } from 'react-router-dom'
import { Container } from 'frame/Layout/Container.styled'
import { AppBar } from 'frame/AppBar/AppBar'

export const Layout = () => {
    return (
        <Container>
            <AppBar />
            <Outlet />
        </Container>
    )
}