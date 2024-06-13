// components/Login.js
import { useState } from 'react';
import { connectWallet } from '../utils/argentx';

const Login = ({ onLogin }) => {
    const [account, setAccount] = useState(null);

    const handleLogin = async () => {
        const result = await connectWallet();
        if (result) {
            setAccount(result.account);
            onLogin(result.account);
        } else {
            alert('Failed to connect to ArgentX');
        }
    };

    return (
        <div>
            {account ? (
                <div>
                    <p>Connected as: {account.address}</p>
                </div>
            ) : (
                <button onClick={handleLogin}>Connect with ArgentX</button>
            )}
        </div>
    );
};

export default Login;