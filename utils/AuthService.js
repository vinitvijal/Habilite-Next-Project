class AuthService {
    login(username, password) {
        const user = { username: 'admin', password: 'admin' };

        if (username === user.username && password === user.password) {
            const token = btoa(JSON.stringify({ username }));
            localStorage.setItem('token', token);
            return true; 
        }
        return false; 
    }

    logout() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }
}

export default new AuthService();
