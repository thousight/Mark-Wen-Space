import React from 'react'

import BlueLogoTransparentBG from '../../img/logo/BlueLogoTransparentBG.png'

/**
* Loading screen when app starts
*/
const FullScreenLoading = ({ error }) => (
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
				<p className="fullscreen-loading-error-text">
						{
							error
								? 'Something went wrong when loading... \n' +
										'Please check your network connectivity and if you are using https instead of http.'
								: ''
						}
				</p>
		</div>
)

export default FullScreenLoading