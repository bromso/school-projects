import styledComponent from '../../utils/styledComponent';

const Grid = styledComponent`
	display: grid;
	grid-template-areas:
		"header header header"
		"menu content ads"
		"footer footer footer";
	grid-template-rows: 80px 1fr 50px;
	grid-template-columns: 15% 1fr 18%;
	grid-gap: 15px;
	height: 98vh;

	@media(max-width: 768px) {
		display: grid;
		grid-template-areas:
			"header header header"
			"menu menu menu"
			"content content ads"
			"footer footer footer";
		grid-template-rows: 80px 80px 1fr;
		grid-template-columns: 15% 1fr 33%;
		grid-gap: 5px;
		height: 98vh;
	};
`;

export default Grid;
