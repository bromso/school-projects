import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";

const Component = ({ component: As, ...rest }) => <As {...rest} />;
Component.propTypes = {
	component: PropTypes.elementType,
};
Component.defaultProps = {
	component: 'div',
};

const styledComponent = styled(Component);

export default styledComponent;
