import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

const MenuItem = ( {
	title, imageUrl, size, history, linkUrl, match,
} ) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events,  jsx-a11y/no-static-element-interactions
	<div
		className={ `${ size } menu-item` }
		onClick={ () => history.push( `${ match.url }${ linkUrl }` ) }
	>
		<div
			className="background-image"
			style={ {
				backgroundImage: `url(${ imageUrl })`,
			} }
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter( MenuItem );
