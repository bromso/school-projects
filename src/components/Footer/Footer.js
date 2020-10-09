import React from "react"
import PropTypes from "prop-types";
import Cell from '../Cell/Cell';
import styled from "styled-components";

const Style = styled.footer`
	background: rgb(30, 167, 253);
	color: rgb(255, 255, 255);
	grid-area: footer;
	border-radius: 13px;
	text-transform: uppercase;
`;

export const footer = ({ children }) => {
  return (
		<Cell
			area="footer"
			component={Style}
			center
			middle
		>
			{children}
		</Cell>
  );
};
footer.propTypes = {
  children: PropTypes.string,
};

export default footer;
