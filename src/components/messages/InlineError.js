import React from 'react';
import PropTypes from "proptypes"

const InlineError = ({ text }) => (
	<span style={{ color: "#e04544" }}>
		{text}
	</span>
);

InlineError.propTypes = {
	text: PropTypes.string.isRequired
};


export default InlineError;