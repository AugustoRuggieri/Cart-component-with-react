import { HiShoppingCart } from 'react-icons/hi';
import { useGlobalContext } from '../context/context';
import './navbar.css';

export default function MyNavbar() {

    const {itemCounter} = useGlobalContext();

    return (

        <nav>
            <div className='nav-cart'>
                <p>Total items: </p>
                <span><HiShoppingCart className='icon nav-icon' /></span>
                <span>{itemCounter > 0 && itemCounter}</span>
            </div>
        </nav>
    )
}