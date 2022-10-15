import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.scss";
import images from "./imageData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
	const ranNum = Math.ceil(Math.random() * images.length);
	const [count, setCount] = useState(0);
	const [itemsInCart, setItemsInCart] = useState(null);
	const [checkOutItems, setCheckOutItems] = useState(<p className="emptyCart">Your cart is empty</p>);

	function minus() {
		if (count <= 0) {
			return;
		} else {
			setCount((prevCount) => (prevCount -= 1));
		}
	}
	function plus() {
		setCount((prevCount) => (prevCount += 1));
	}
	function addToCart() {
		setItemsInCart(count);
		setCount(0);
		if (count === 0) {
			setItemsInCart(null);
		}
		setCheckOutItems(() => {
			if (count === 0) {
				return <p className="emptyCart">Mhhhh! don't you like the shoes?</p>;
			} else {
				return (
					<>
						<div className="checkOutInfo">
							<div className="cartThumb">
								<img src={images[ranNum-1].thumbImg} alt={images[ranNum-1].alt} />
							</div>
							<div className="adjCart">
								<p>
									Fall Limited Edition Sneakers $125.00 x {count}
									<span>{` $${125 * count}`}</span>
								</p>
								<a href="#!">
									<FontAwesomeIcon icon={faTrashAlt} />
								</a>
							</div>
						</div>
						<button className="checkOut">Checkout</button>
					</>
				);
			}
		});
	}

	return (
		<div className="App">
			<Header itemsIncart={itemsInCart} checkOutItems={checkOutItems} />
			<Main minus={minus} plus={plus} count={count} onClickToCart={addToCart} />
		</div>
	);
}

export default App;
