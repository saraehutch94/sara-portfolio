import Meta from './Meta'

function Layout(props) {
    return (
        <>
        <Meta />
            {props.children}
        </>
    )
}

export default Layout