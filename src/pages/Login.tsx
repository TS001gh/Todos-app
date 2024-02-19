/* eslint-disable no-useless-escape */
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Login_FORM } from '../data';
import InputErrorMessage from '../components/errors/InputErrorMessage';
import { IErrorResponse, IFormInputLogin } from '../interfaces';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../config/axios.config';
import { AxiosError } from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../validation';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputLogin>({
    resolver: yupResolver(loginSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<IFormInputLogin> = async (data) => {
    // any request will throw over these steps each time
    /**
     * 1- Pending - Loading
     */
    setIsLoading(true);

    try {
      // * 2- Fulfilled => SUCCESS => (OPTIONAL)
      const { status, data: userData } = await axiosInstance.post(
        '/auth/local',
        data
      );

      if (status === 200) {
        toast.success('You wil navigate to the home page after 2 seconds', {
          duration: 1500,
          position: 'top-center',
          style: {
            background: 'rgb(187 247 208)',
            color: 'dark',
            width: 'fit-content',
          },
        }); //

        localStorage.setItem('loggedInUser', JSON.stringify(userData));

        setTimeout(() => {
          location.replace('/');
        }, 1000);
      }
    } catch (error) {
      // * 3- Rejected => FIELD => (OPTIONAL)

      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`${errorObj.response?.data?.error?.message}`, {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'rgb(255 228 230)',
          color: 'dark',
          width: 'fit-content',
        },
      }); //
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // ** Renders
  const renderLoginForm = Login_FORM.map(
    ({ name, placeholder, type, validation }, idx) => (
      <div key={idx} className="space-y-3">
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">
        Login to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {renderLoginForm}
        <Button fullWidth isLoading={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
      </form>
      <span className="block mt-2">
        No account ?
        <NavLink to={'/register'} className="text-indigo-500 mt-4">
          {' '}
          Register
        </NavLink>
      </span>
    </div>
  );
};

export default LoginPage;
