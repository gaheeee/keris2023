import { Link } from 'react-router-dom';

export default function ModelButton({ to, children }) {
    return (
        <Link className="model-space" to={to}>
            <div className="model-img"></div>
            <p>{children}</p>
        </Link>
    );
}