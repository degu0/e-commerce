import { useFormik } from 'formik';
import * as yup from 'yup';

import Image from '../../../image/Image_login.png';
import Google from '../../../image/Google_Icon.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/service/auth_context/AuthContext';

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

export function SignUp() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });
                console.log(values);

                alert('Signup successful!');
                const loginSucess = await login(values.username, values.password);
                if (loginSucess) {
                    navigate('/');
                }
            } catch (error) {
                console.error('Signup failed', error);
                alert('Signup failed!');
            }
        },
    });


    return (
        <div className="w-full h-[110vh] sm:h-screen flex font-custom">
            <div className="w-[60%] bg-blue-login justify-center items-end hidden sm:flex">
                <img src={Image} className="h-full" alt="Login illustration" />
            </div>
            <div className="sm:w-3/5 w-full flex flex-col justify-center items-center">
                <form onSubmit={formik.handleSubmit} className="w-full max-w-lg p-4">
                    <div className="flex flex-col items-start mb-8">
                        <h1 className="text-black font-bold md:text-4xl text-3xl mb-2">Create an account</h1>
                        <h3 className="text-black text-xl">Enter your details below</h3>
                    </div>
                    <div className="flex flex-col items-center w-full gap-6">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full border-b-2 focus:outline-none focus:ring-0 border-gray-200 p-2"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500">{formik.errors.username}</div>
                        ) : null}

                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="w-full border-b-2 focus:outline-none focus:ring-0 border-gray-200 p-2"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500">{formik.errors.email}</div>
                        ) : null}

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full border-b-2 focus:outline-none focus:ring-0 border-gray-200 p-2"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="w-full flex flex-col items-center mt-8">
                        <button
                            type="submit"
                            className="bg-red-custom w-full h-14 border-none rounded text-white text-normal mb-4"
                        >
                            Create Account
                        </button>
                        <button
                            type="button"
                            className="bg-white w-full h-14 border-2 border-black rounded text-black flex items-center justify-center gap-2 mb-4"
                        >
                            <img src={Google} alt="Google Login" className='w-10' />
                            Sign Up with Google
                        </button>
                        <p className="text-gray-500 mt-2">
                            Already have an account? <a href="/login" className="text-gray-500 underline">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
