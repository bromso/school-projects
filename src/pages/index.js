import React from "react"
import styled from "styled-components";

const Grid = styled.div`
	font-family: segoe-ui_normal,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif;
	display: grid;
	grid-template-areas:
		"header header header"
		"nav main aside"
		"footer footer footer";
	grid-template-rows: 80px 1fr 50px;
	grid-template-columns: 15% 1fr 18%;
	grid-gap: 5px;
	height: 100vh;
	margin: 10px;
`;

const Header = styled.header`
	background: #707070;
	grid-area: header;
`;

const Nav = styled.nav`
	background: #C9BFBF;
	grid-area: nav;
`;

const Main = styled.main`
	background: #ABABAB;
	grid-area: main;
`;

const Aside = styled.aside`
	background: #C9C9C9;
	grid-area: aside;
`;

const Footer = styled.footer`
	background: #707070;
	grid-area: footer;
`;

export default function Home() {
  return <>
		<Grid>
			<Header>Header</Header>
			<Nav>Nav</Nav>
			<Main>Main</Main>
			<Aside>Aside</Aside>
			<Footer>Footer</Footer>
		</Grid>
	</>
}
