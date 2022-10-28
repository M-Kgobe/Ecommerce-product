import React, { useRef, useEffect } from "react";
import style from "./scss/header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCartShopping,
	faClose,
} from "@fortawesome/free-solid-svg-icons";

function Header({ itemsIncart, checkOutItems }) {
	const cartRef = useRef();
	const trolley = useRef();
	const linksRef = useRef();
	useEffect(() => {
		function outSideClick(e) {
			if (
				!cartRef.current.contains(e.target) &&
				!trolley.current.contains(e.target)
			) {
				if (cartRef.current.classList.contains(`${style.activeCart}`)) {
					cartRef.current.classList.remove(`${style.activeCart}`);
				}
			}
		}
		document.addEventListener("click", outSideClick);

		return () => {
			document.removeEventListener("click", outSideClick);
		};
	}, [cartRef]);

	function toggleCart() {
		cartRef.current.classList.toggle(`${style.activeCart}`);
	}
	function closeHam() {
		return (linksRef.current.style.scale = 0);
	}
	function openHam() {
		return (linksRef.current.style.scale = 1);
	}
	return (
		<>
			<header>
				<div className="logo">
					<a href="#!" className={`${style.hamburger}  ${style.tablet}`}>
						<FontAwesomeIcon icon={faBars} onClick={openHam} />
					</a>
					<img src="./images/logo.svg" alt="Sneakers" />
				</div>
				<nav className="navBar">
					<ul className={style.navLinks} ref={linksRef}>
						<a
							href="#!"
							className={`${style.hamburgerClose} ${style.tablet}`}
							onClick={closeHam}
						>
							<FontAwesomeIcon icon={faClose} />
						</a>
						<li>
							<a href="#!">collections</a>
						</li>
						<li>
							<a href="#!">men</a>
						</li>
						<li>
							<a href="#!">women</a>
						</li>
						<li>
							<a href="#!">about</a>
						</li>
						<li>
							<a href="#!">contact</a>
						</li>
					</ul>
					<ul className={style.user}>
						<li>
							<a href="#!" onClick={toggleCart} ref={trolley}>
								<FontAwesomeIcon icon={faCartShopping} />
							</a>
							<sup>{itemsIncart}</sup>{" "}
						</li>
						<li>
							<img src="images/image-avatar.png" alt="Avatar" />
						</li>
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
