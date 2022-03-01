import { useNavigate } from 'react-router-dom'

export const Login = () => {
    
}
export const LogOut = () => {
    const navigate = useNavigate();
    localStorage.clear();
    navigate("/");
    window.location.reload();
}