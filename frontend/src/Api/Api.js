import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})


// Register function
export async function register(data) {
    console.log('Signup data:', data);
    
    try {
        const response = await api.post('/api/register', data);
        console.log('Register response:', response);
        
        return {
            status: response.status,
            ...response.data
        };
    } catch (error) {
        console.log('Register error:', error);
        
        // Axios error handling
        if (error.response) {
            // Backend se error aaya
            return {
                status: error.response.status,
                ...error.response.data
            };
        } else {
            // Network error
            throw error;
        }
    }
}

// Email verification function
export async function verifyEmail(data) {
    console.log('Verifying email:', data);
    
    try {
        const response = await api.post('/api/verify-email', data);
        console.log('Verify email response:', response);
        
        return {
            status: response.status,
            ...response.data
        };
    } catch (error) {
        console.log('Verify email error:', error);
        
        if (error.response) {
            return {
                status: error.response.status,
                ...error.response.data
            };
        } else {
            throw error;
        }
    }
}

// Login function
export async function login(data) {
    console.log('Login data:', data);

    try {
        const response = await api.post('/api/login', data);
        console.log('Login response:', response);
        
        // Axios automatically handles response, no need for response.ok check
        return {
            status: response.status,
            ...response.data
        };
        
    } catch (error) {
        console.log('Login error:', error);
        
        // Axios mein error.response se backend error milta hai
        if (error.response) {
            // Backend se error message
            return {
                status: error.response.status,
                ...error.response.data
            };
        } else {
            // Network ya other error
            throw error;
        }
    }
}