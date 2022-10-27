import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft,faAngleRight,faClose} from "@fortawesome/free-solid-svg-icons";
import style from "./scss/display.module.scss";
import images from "../imageData.json";

function Display({ displayRefActive, displayModal, closeDisplay }) {
	const thumbRefActive =useRef()
	const [displayPicActive, setDisplayPicActive] = useState(
		<img src={images[0].dispImg} alt={images[0].alt} />
	);
	const thumbElementsActive =
		images &&
		images.map((image, index) => (
			<li key={image.id} ref={thumbRefActive} onClick={changeDisplay}>
				<img src={image.thumbImg} alt={image.alt} />
			</li>
		));
	function changeDisplay(e) {
		const url = e.target.src.replace("-thumbnail", "");
		setDisplayPicActive(<img src={url} alt={e.target.alt} />);
		console.log(thumbRefActive);
		console.log(images.length);
	}
	function next() {
		var imgNum = parseInt(displayPicActive.props.src.slice(-5, -4));
		var url;
		if (imgNum >= images.length) {
			url = displayPicActive.props.src.replace(`-${imgNum}`, `-${1}`);
		} else {
			url = displayPicActive.props.src.replace(
				`-${imgNum}`,
				`-${imgNum+1}`
			);
		}
		setDisplayPicActive(<img src={url} alt={displayPicActive.props.alt} />);
		console.log(displayPicActive)
		console.log(url)

	}
		function prev() {
			var imgNum = parseInt(displayPicActive.props.src.slice(-5, -4));
			var url;
			if (imgNum <= 1 ) {
				url = displayPicActive.props.src.replace(
					`-${imgNum}`,
					`-${images.length}`
				);
			} else {
				url = displayPicActive.props.src.replace(
					`-${imgNum}`,
					`-${imgNum - 1}`
				);
			}
			setDisplayPicActive(<img src={url} alt={displayPicActive.props.alt} />);
			console.log(displayPicActive);
			console.log(url);
		}
	
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
					<a href="#!" className={style.left} onClick={prev}>
						<FontAwesomeIcon icon={faAngleLeft} />
					</a>
					{displayPicActive}
					<a href="#!" className={style.right} onClick={next}>
						<FontAwesomeIcon icon={faAngleRight} />
					</a>
					<a href="#!" className={style.close} onClick={closeDisplay}>
						<FontAwesomeIcon icon={faClose} />
					</a>
				</div>
				<ul className={style.imgThumbsActive}>{thumbElementsActive}</ul>
			</section>
		</>
	);
}

export default Display;
