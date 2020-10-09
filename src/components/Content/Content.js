import React from "react"
import PropTypes from "prop-types";
import Cell from '../Cell/Cell';
import styled from "styled-components";

const Style = styled.main`
	background: rgb(255, 45, 116);
	color: rgb(255, 255, 255);
	border-radius: 13px;
	text-transform: uppercase;
`;

export const content = ({ children }) => {
  return (
		<Cell
			area="content"
			component={Style}
			center
			middle
		>
			{children}
		</Cell>
  );
};
content.propTypes = {
  children: PropTypes.string,
};

export default content;
