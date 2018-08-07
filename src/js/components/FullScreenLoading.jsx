import React from 'react'

import BlueLogoTransparentBG from '../../img/logo/BlueLogoTransparentBG.png'

/**
* Loading screen when app starts
*/
const FullScreenLoading = () => (
		<div className="fullscreen-loading">
				<img
						className="fullscreen-loading-logo"
						alt="MW logo"
						src={BlueLogoTransparentBG}/>
				<div className="fullscreen-loading-logo-animation"/>
				<h4 className="fullscreen-loading-text">Loading, please wait
						<span>.</span>
						<span>.</span>
						<span>.</span>
				</h4>
		</div>
)

export default FullScreenLoading
