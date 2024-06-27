import SHOP_DATA from '../../shop-data.json'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products.context'
import ProducCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'

const Shop = () =>{
    const { products } = useContext(ProductsContext)
    return (
        <div className='product-container'>
            {SHOP_DATA.map((product)=>(
            <ProducCard key={product.id} product={product} />
         
            ))}
        </div>
    )
}

export default Shop