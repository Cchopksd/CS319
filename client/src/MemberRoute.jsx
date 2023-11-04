import { Navigate, Link } from 'react-router-dom';
import { getUser } from './services/authorize';

const MemberRoute = ({Component}) => {
    return getUser() ? <Component /> : <Navigate to="/login" />
}

export default MemberRoute;