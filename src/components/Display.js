import React from 'react'
import style from './scss/main.module.scss'

function Display({displayPic,thumbElements,viewDisplay}) {
  return (
		<>
			<section className={style.imgDisplay}>
				<div className={style.mainDisp} onClick={viewDisplay}>
					{displayPic}
				</div>
				<ul className={style.imgThumbs}>{thumbElements}</ul>
			</section>
		</>
	);
}

export default Display