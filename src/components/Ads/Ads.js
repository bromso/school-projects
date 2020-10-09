import React from "react"
import PropTypes from "prop-types";
import Cell from '../Cell/Cell';
import styled from "styled-components";

const Style = styled.aside`
	background: rgb(102, 191, 60);
	color: rgb(255, 255, 255);
	border-radius: 13px;
	text-transform: uppercase;
`;

export const ads = ({ children }) => {
  return (
		<Cell
			area="ads"
			component={Style}
			center
			middle
		>
			{children}
		</Cell>
  );
};
ads.propTypes = {
  children: PropTypes.string,
};

export default ads;
