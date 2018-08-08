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
				<h5 className="fullscreen-loading-error-text">
						{
							error
								? 'Something went wrong when loading... Please check your network connectivity and ' +
										'if you are using https instead of http.'
								: ''
						}
				</h5>
		</div>
)

export default FullScreenLoading