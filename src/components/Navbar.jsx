import '../components/Navbar.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from "react";

const Navbar = () => {

   
    const [categoryApi, setCategoryApi] = useState([]);
    
      useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setCategoryApi(data);
              });           
      }, [])

      const handleChange = () => {
        console.log('funciona')
      }

  return (
    <header>
        <nav>
            
            <img src={logo} alt='logo imagen' className='logoImage'/>
            <div className='divSelect'>
                <p>Promotions</p> 
                <label htmlFor="category">Categories</label>          
                <select defaultValue='All Categories' name='category' onChange={handleChange} className="SelectCategory"> 
                    {categoryApi.map((category) => 
                    <option value={category} key={category} disabled>{category}</option> )}
                </select>
            </div>
            <div className='registerDiv'>
                <p>Sign Up</p>
                <p>My account</p>
 
                <p className="cart-count">Cart : 0</p>

                
            </div>
        </nav>
    </header>
  )
}

export default Navbar