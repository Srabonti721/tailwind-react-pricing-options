

const Link = ({route}) => {
   
    return (
        <nav>
                <li className='ml-10'><a href={route.path}>{route.name}</a></li>
        </nav>
    );
};

export default Link;