import { Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { PublicMethod } from '../meta/public.js';

export function Login(): MethodDecorator {
  return (...args) => {
    ApiOperation({ summary: 'Login with credentials' });
    Post('login')(...args);
    PublicMethod()(...args);
  };
}

export function Logout(): MethodDecorator {
  return (...args) => {
    Post('login')(...args);
    ApiBearerAuth()(...args);
  };
}

export function LoginWithOtp(): MethodDecorator {
  return (...args) => {
    ApiOperation({ summary: 'Logint with one time password' });
    Post('otp')(...args);
    ApiBearerAuth()(...args);
  };
}

export function ForgotPassword(): MethodDecorator {
  return (...args) => {
    ApiOperation({ summary: 'Send forgot password request with username' });
    Post('forgot-password')(...args);
    PublicMethod()(...args);
  };
}

export function ResetPassword(): MethodDecorator {
  return (...args) => {
    ApiOperation({ summary: 'Send a resest password request' });
    Post('reset-password')(...args);
    ApiBearerAuth()(...args);
  };
}

export function Signup(): MethodDecorator {
  return (...args) => {
    ApiOperation({ summary: 'Send a new subscription request' });
    Post('signup')(...args);
    PublicMethod()(...args);
  };
}
