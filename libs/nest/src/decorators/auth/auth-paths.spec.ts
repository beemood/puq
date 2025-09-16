import { authPaths } from './auth-paths.js';
describe('authPaths', () => {
  it('should have valid auth paths', async () => {
    expect(authPaths.forgotPassword).toEqual('auth/forgot-password');
    expect(authPaths.loginWithCredentials).toEqual('auth/login-with-credentials');
    expect(authPaths.loginWithOtp).toEqual('auth/login-with-otp');
    expect(authPaths.logoutFromAllSessions).toEqual('auth/logout-from-all-sessions');
    expect(authPaths.logoutFromCurrentSession).toEqual('auth/logout-from-current-session');
    expect(authPaths.resetPassword).toEqual('auth/reset-password');
    expect(authPaths.subscribe).toEqual('auth/subscribe');
  });
});
