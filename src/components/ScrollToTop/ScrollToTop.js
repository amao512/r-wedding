import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollToTop = ({ children, location: { pathname }}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return children;
}

ScrollToTop.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    })
}

export default withRouter(ScrollToTop);