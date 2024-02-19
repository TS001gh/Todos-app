/* eslint-disable no-useless-escape */
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Register_FORM } from '../data';
import { IErrorResponse, IFormInputRegister } from '../interfaces';
import InputErrorMessage from '../components/errors/InputErrorMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../validation';
import axiosInstance from '../config/axios.config';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const duration = 1500;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputRegister>({
    resolver: yupResolver(registerSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<IFormInputRegister> = async (data) => {
    // console.log(data);

    // any request will throw over these steps each time
    /**
     * 1- Pending - Loading
     */
    setIsLoading(true);

    try {
      // * 2- Fulfilled => SUCCESS => (OPTIONAL)
      const { status } = await axiosInstance.post('/auth/local/register', data);

      if (status === 200) {
        toast.success(
          'You wil navigate to the login page after 2 seconds to login',
          {
            duration: duration,
            position: 'top-center',
            style: {
              background: 'rgb(187 247 208)',
              color: 'dark',
              width: 'fit-content',
            },
          }
        ); //
        setTimeout(() => {
          navigate('/login');
        }, duration + 500);
      }
    } catch (error) {
      // * 3- Rejected => FIELD => (OPTIONAL)

      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`${errorObj.response?.data?.error?.message}`, {
        duration: duration,
        position: 'top-center',
        style: {
          background: 'rgb(255 228 230)',
          // border: '2px solid rgb(255 228 230 / 0.6)',
          color: 'dark',
          width: 'fit-content',
        },
      }); //
    } finally {
      setIsLoading(false);
    }
  };

  // ** Renders
  const renderRegisterForm = Register_FORM.map(
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
        Register to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {renderRegisterForm}
        <Button fullWidth isLoading={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </Button>
      </form>
      <span className="block mt-2">
        Have an account ?
        <NavLink to={'/login'} className="text-indigo-500 mt-4">
          {' '}
          Login
        </NavLink>
      </span>
    </div>
  );
};

export default RegisterPage;

/*

*/
