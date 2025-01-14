import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthService from '@/utils/AuthService';

const LoginComp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (AuthService.login(username, password)) {
            router.push('/admin/dashboard'); // Redirect to protected route on success
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form className='flex justify-center items-center h-screen' onSubmit={handleLogin}>
            <div className=' rounded-2xl shadow space-y-6 flex flex-col justify-center items-center md:w-[30vw] w-[80vw] md:h-[50vh] h-[40vh]'>
                <div className='space-y-2 md:w-[24vw] w-[74vw]'>
                    <div>Username</div>
                    <div><Input 
                        type="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                    /></div>
                </div>

                <div className='space-y-2 md:w-[24vw] w-[74vw]'>
                    <div>Password</div>
                    <div><Input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                    /></div>
                </div>

                <div className='pt-4'>
                <Button className='md:w-[24vw] w-[74vw]' type="submit">Login</Button></div>
            </div>
        </form>
    );
};

export default LoginComp;
