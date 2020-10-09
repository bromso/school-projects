import React from "react"
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";
import Ads from "../Ads/Ads";
import Footer from "../Footer/Footer";

export const layout = ({ children, header, menu, content, ads, footer }) => {
  return (
		<Grid>
			<Header>
				<p>
					{header}
				</p>
			</Header>
			<Menu>
				<p>
					{menu}
				</p>
			</Menu>
			<Content>
				<p>
					{content}
				</p>
				{children}
			</Content>
			<Ads>
				<p>
					{ads}
				</p>
			</Ads>
			<Footer>
				<p>
					{footer}
				</p>
			</Footer>
		</Grid>
  );
};
layout.propTypes = {
	children: PropTypes.string,
  header: PropTypes.string,
	menu: PropTypes.string,
	content: PropTypes.string,
	ads: PropTypes.string,
	footer: PropTypes.string,
};

export default layout;
