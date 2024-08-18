import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required')
});

const ForgotPasswordPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log("Form is valid", { data });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('LandingPagebackgroundblur.png')] bg-no-repeat bg-cover bg-fixed backdrop-blur-3xl">
            <div className="flex items-center justify-center min-h-screen lg:w-2/5">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="email"
                                {...register('email')}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm"
                            />
                            {errors?.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <button type="submit" className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-600">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
