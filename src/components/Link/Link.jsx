import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="px-5 py-0.5 hover:bg-blue-500">
            <a href={route.path}>{route.name}</a>
        </li>
    )
}

Link.propTypes  = {
     route: PropTypes.object
}

export default Link