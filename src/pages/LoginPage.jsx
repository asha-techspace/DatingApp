import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        // Email/Mobile validation
        if (!formData.email.trim()) {
            newErrors.email = "Email or mobile is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email) && !/^\d{10}$/.test(formData.email)) {
            newErrors.email = "Enter a valid email or 10-digit mobile number.";
        }

        // Password validation
        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            console.log("Form is valid", formData);
        } else {
            console.log("Form has errors", errors);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('LandingPagebackgroundblur.png')] bg-no-repeat bg-cover bg-fixed backdrop-blur-3xl">
            <div className="flex items-center justify-center min-h-screen lg:w-2/5">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email/Mobile</label>
                            <input
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <button type="submit" className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-600">Log In</button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-sm text-black hover:underline">Forgot password?</Link>
                    </div>
                    <div className="mt-2 text-center">
                        <Link  className="text-sm text-black hover:underline" to="/sign_up">Don't have an account? Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
