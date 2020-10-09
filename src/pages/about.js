import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import graphimage from "../images/build-cases.png";

const Image = styled.img`
	max-height: 100%;
	width: 100%;
`;

export default function Home() {
  return <>
		<Layout
			header="About"
			menu={
				<Link to="/">
					Startpage
				</Link>
			}
			content="Content"
			ads="Ads"
			footer="Footer"
			children={
				<Image src={graphimage} alt="Graphs"/>
			}
		/>
	</>
}
