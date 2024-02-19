import { ILoginInput, IRegisterInput } from '../interfaces';
const storageKey = 'loggedInUser';
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

/* eslint-disable no-useless-escape */
export const Register_FORM: IRegisterInput[] = [
  {
    name: 'username',
    placeholder: 'Username',
    type: 'text',
    // validation: {
    //   required: 'user name is required',
    //   maxLength: {
    //     value: 20,
    //     message: 'Username cannot exceed 20 characters',
    //   },
    // },
  },
  {
    name: 'email',
    placeholder: 'Email address',
    type: 'email',
    // validation: {
    //   required: 'email is required',
    //   pattern: {
    //     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //     message: 'Invalid email format',
    //   },
    // },
  },
  {
    name: 'password',
    placeholder: 'Password address',
    type: 'password',
    // validation: {
    //   required: 'password is required',
    //   pattern: {
    //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+*-@#$%&]).+$/,
    //     message: 'Invalid password format',
    //   },
    // },
  },
];
export const Login_FORM: ILoginInput[] = [
  {
    name: 'identifier',
    placeholder: 'Email address',
    type: 'email',
    // validation: {
    //   required: 'email is required',
    //   pattern: {
    //     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //     message: 'Invalid email format',
    //   },
    // },
  },
  {
    name: 'password',
    placeholder: 'Password address',
    type: 'password',
    // validation: {
    //   required: 'password is required',
    //   pattern: {
    //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+*-@#$%&]).+$/,
    //     message: 'Invalid password format',
    //   },
    // },
  },
];

const NavElementsStyles = {
  class:
    'text-slate-400 duration-200 font-bold text-lg hover:text-slate-900 h-7 overflow-hidden',
  navLink: 'flex flex-col gap-3 group',
  isActive: 'text-slate-900 hide',
  isNotActive: 'opacity-100',
  spanClass: 'group-hover:-translate-y-10 transition-all duration-300',
};

export const NavLinksMain = [
  {
    id: 'home',
    path: '/',
    text: 'Home',
    ...NavElementsStyles,
  },
];

export const NavLinksAuth = !userData
  ? [
      {
        id: 'register',
        path: '/register',
        text: 'Register',
        ...NavElementsStyles,
      },
      {
        id: 'login',
        path: '/login',
        text: 'Login',
        ...NavElementsStyles,
      },
    ]
  : [
      {
        id: 'profile',
        path: '/profile',
        text: 'Profile',
        ...NavElementsStyles,
      },
    ];
