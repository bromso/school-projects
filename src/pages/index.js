import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import uiimage from "../images/build-addons.png";

const Image = styled.img`
	max-height: 100%;
	width: 100%;
`;

export default function Home() {
  return <>
		<Layout
			header="Starpage"
			menu={
				<Link to="/about">
					About
				</Link>
			}
			content="Content"
			ads="Ads"
			footer="Footer"
			children={
				<Image src={uiimage} alt="UI Components"/>
			}
		/>
	</>
}
