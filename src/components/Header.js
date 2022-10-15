import React, { useState } from "react";
import style from './scss/header.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Header({ itemsIncart, checkOutItems}) {
	
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
						<li><a href="#!"><FontAwesomeIcon icon={faCartShopping}/></a><sup>{itemsIncart}</sup> </li>
						<li><img src="./images/image-avatar.png" alt="Avatar" /></li>
					</ul>
					<div className={style.cartInfo}>
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
