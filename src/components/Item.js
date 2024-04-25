import React ,{useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart] = useState(false)

  const handleButtonClick = () => {
    setInCart(prevInCart => !prevInCart)
  }
  return (
    <li className= {inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleButtonClick}className="add">
      {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
