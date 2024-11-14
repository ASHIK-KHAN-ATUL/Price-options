import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='mt-1 px-5  hover:bg-red-100 duration-500 rounded-lg'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};


Link.propTypes = {
    route : PropTypes.object
}

export default Link;