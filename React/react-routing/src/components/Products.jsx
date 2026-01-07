import { Link, Outlet } from "react-router-dom"

export const Products = ({productName}) => {
    if(productName === 'Product 5'){
        throw new Error('Product is not availabe');
        
    }

    return(
        <>
            <input type="search" placeholder="Search items" />
            <nav className="product-nav">
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </>
    )
}