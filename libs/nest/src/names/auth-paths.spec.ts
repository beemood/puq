import { AuthPaths } from './auth-paths.js';
describe('authPaths', () => {
  it('should have valid auth paths', async () => {
    expect(AuthPaths.forgotPassword).toEqual('auth/forgot-password');
    expect(AuthPaths.loginWithCredentials).toEqual('auth/login-with-credentials');
    expect(AuthPaths.loginWithOtp).toEqual('auth/login-with-otp');
    expect(AuthPaths.logoutFromAllSessions).toEqual('auth/logout-from-all-sessions');
    expect(AuthPaths.logoutFromCurrentSession).toEqual('auth/logout-from-current-session');
    expect(AuthPaths.resetPassword).toEqual('auth/reset-password');
    expect(AuthPaths.subscribe).toEqual('auth/subscribe');
  });
});
