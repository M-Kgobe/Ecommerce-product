import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./scss/main.module.scss";
import images from "../imageData.json";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function Main({count,minus,plus,onClickToCart}) {
	const price = 250;
	const discount = 0.5;
	const saleAmount = price * discount;
	const [displayPic, setDisplayPic] = useState(
		<img src={images[0].dispImg} alt={images[0].alt} />
	);
	const thumbElements = images.map((image, index) => (
		<li key={image.id} onClick={changeDisplay}>
			<img src={image.thumbImg} alt={image.alt} />
		</li>
	));

	function changeDisplay(e) {
		const url = e.target.src.replace("-thumbnail", "");
		setDisplayPic(<img src={url} alt={e.target.alt} />);
	}

	return (
		<>
			<main>
				<section className={style.imgDisplay}>
					<div className={style.mainDisp}>{displayPic}</div>
					<ul className={style.imgThumbs}>{thumbElements}</ul>
				</section>
				<section className={style.hero}>
					<div className={style.heroInfo}>
						<h3>Sneaker Company</h3>
						<h1>Fall Limited Edition Sneakers</h1>
						<p>
							These low-profile sneakers are your perfect casual wear companion.
							Featuring a durable rubber outer sole, they’ll withstand
							everything the weather can offer.
						</p>
					</div>
					<div className={style.priceCartInfo}>
						<h2 className={style.prices}>
							{`$${saleAmount}.00`}{" "}
							<span className={style.discount}>{`${discount * 100}%`}</span>{" "}
							<span className={style.price}>{`$${price}.00`}</span>
						</h2>
						<div className={style.cartItems}>
							<div className={style.adjustBtn}>
								<button onClick={minus}>
									<FontAwesomeIcon icon={faMinus} />
								</button>
								<p>{count}</p>
								<button onClick={plus}>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
							<button className={style.addToCart} onClick={onClickToCart}>
								<FontAwesomeIcon icon={faCartPlus} /> Add to Cart
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default Main;
