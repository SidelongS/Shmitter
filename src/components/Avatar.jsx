import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(ShmitterContext);

    const handleClick = () => {
        if (size !== 'large') return;
        const newUrl = prompt('Enter new avatar URL:');
        if (newUrl) {
            setUser({...user, avatar: newUrl});
        }
    }

    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={handleClick}
            style={size === 'large' ? {cursor: 'pointer'} : {}}
        />
    )
}

export default Avatar;