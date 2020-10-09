import React from "react"
import PropTypes from "prop-types";
import Cell from '../Cell/Cell';
import styled from "styled-components";

const Style = styled.header`
	background: rgb(75, 217, 215);
	color: rgb(255, 255, 255);
	grid-area: header;
	border-radius: 13px;
	text-transform: uppercase;
`;

export const Header = ({ children }) => {
  return (
		<Cell
			area="header"
			component={Style}
			center
			middle
		>
			{children}
		</Cell>
  );
};
Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
