import PropTypes from 'prop-types';
import React from 'react';
import stylePropTypes from '../../styles/stylePropTypes';

const propTypes = {
    /** A reference forwarded to the inner View */
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(React.Component)}),
    ]),

    /* A function to execute when form is submitted with ENTER */
    onSubmit: PropTypes.func.isRequired,

    /** Children to wrap with FormSubmit. */
    children: PropTypes.node.isRequired,

    /** Container styles */
    style: stylePropTypes,
};

const defaultProps = {
    innerRef: undefined,
    style: [],
};

export {propTypes, defaultProps};
