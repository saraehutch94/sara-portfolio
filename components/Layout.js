import Meta from './Meta'
import Nav from './Nav'

function Layout(props) {
    return (
        <>
        <Meta />
        <Nav />
            {props.children}
        </>
    )
}

export default Layout