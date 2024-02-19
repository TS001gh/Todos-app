export interface IRegisterInput {
  name: keyof IFormInputRegister;
  placeholder: string;
  type: string;
  validation?: {
    required?: string;
    minLength?:
      | number
      | {
          value: number;
          message: string;
        };
    maxLength?:
      | number
      | {
          value: number;
          message: string;
        };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}
export interface ILoginInput {
  name: keyof IFormInputLogin;
  placeholder: string;
  type: string;
  validation?: {
    required?: string;
    minLength?:
      | number
      | {
          value: number;
          message: string;
        };
    maxLength?:
      | number
      | {
          value: number;
          message: string;
        };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

export interface IFormInputRegister {
  username: string;
  email: string;
  password: string;
}
export interface IFormInputLogin {
  identifier: string;
  password: string;
}

export interface IErrorResponse {
  error: {
    details?: {
      errors: {
        message: string;
      }[];
    };
    message: string;
  };
}
