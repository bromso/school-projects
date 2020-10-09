import React from "react"
import PropTypes from "prop-types";
import Cell from '../Cell/Cell';
import styled from "styled-components";

const Style = styled.nav`
	background: rgb(255, 174, 0);
	color: rgb(255, 255, 255);
	border-radius: 13px;
	text-transform: uppercase;
`;

export const menu = ({ children }) => {
  return (
		<Cell
			area="menu"
			component={Style}
			center
			middle
		>
			{children}
		</Cell>
  );
};
menu.propTypes = {
  children: PropTypes.string,
};

export default menu;
