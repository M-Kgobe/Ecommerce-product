import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faClose } from "@fortawesome/free-solid-svg-icons";
import style from "./scss/display.module.scss";
import images from "../imageData.json";

function Display({ displayRefActive, displayModal }) {
	const [displayPicActive, setDisplayPicActive] = useState(
		<img src={images[0].dispImg} alt={images[0].alt} />
	);
	const thumbElementsActive =
		images &&
		images.map((image, index) => (
			<li key={image.id}>
				<img src={image.thumbImg} alt={image.alt} />
			</li>
		));
	// useEffect(() => {
	// 	function outSideClick(e) {
	// 		if (!displayRefActive.current.contains(e.target)) {
	// 			console.log("clicked outsid of display");
	// 			if (displayModal) {
	// 				setDisplayModal(false)
	// 			}
				
	// 		}
	// 	}
	// 	document.addEventListener("click", outSideClick);

	// 	return () => {
	// 		document.removeEventListener("click", outSideClick);
	// 	};
	// }, [displayRefActive]);
	return (
		<>
			<section className={style.activeDisplay} ref={displayRefActive}>
				<div className={style.mainDispActive}>
					<a href="#!" className={style.left}>
						<FontAwesomeIcon icon={faAngleLeft}  />
					</a>
					{displayPicActive }
					<a href="#!" className={style.right}>
						<FontAwesomeIcon icon={faAngleRight} />
					</a>
					<a href="#!" className={style.close}>
						<FontAwesomeIcon icon={faClose} />
					</a>
				</div>
				<ul className={style.imgThumbsActive}>{thumbElementsActive}</ul>
			</section>
		</>
	);
}

export default Display;
