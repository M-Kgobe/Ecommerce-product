import React, { useRef, useEffect} from "react";
import style from './scss/header.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Header({ itemsIncart, checkOutItems }) {
	const cartRef = useRef()
	const trolley = useRef()
	useEffect(() => {
		function outSideClick(e) {
			if (!cartRef.current.contains(e.target) && !trolley.current.contains(e.target)) {
				if (cartRef.current.classList.contains(`${style.activeCart}`)) {
					cartRef.current.classList.remove(`${style.activeCart}`);
				}
			}
		}
		document.addEventListener('click',outSideClick)
	
	  return () => {
		document.removeEventListener('click',outSideClick)
	  }
	}, [cartRef])
	
	function toggleCart() {
		cartRef.current.classList.toggle(`${style.activeCart}`)
	}
	return (
		<>
			<header>
				<div className="logo"><img src="./images/logo.svg" alt="Sneakers" /></div>
				<nav className="navBar">
					<ul className={style.navLinks}>
						<li><a href="#!">collections</a></li>
						<li><a href="#!">men</a></li>
						<li><a href="#!">women</a></li>
						<li><a href="#!">about</a></li>
						<li><a href="#!">contact</a></li>
					</ul>
					<ul className={style.user}>
						<li><a href="#!" onClick={toggleCart} ref={trolley}><FontAwesomeIcon icon={faCartShopping}/></a><sup>{itemsIncart}</sup> </li>
						<li><img src='images/image-avatar.png' alt="Avatar" /></li>
					</ul>
					<div className={style.cartInfo} ref={cartRef}>
						<h4>Cart</h4>
						<hr />
						<>{checkOutItems}</>
						
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;
