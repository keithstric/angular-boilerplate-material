/**
 * Http request methods
 */
export enum ApiMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH'
}

/**
 * Not sure if this is really a good idea. There could be a lot of endpoints and this
 * doesn't take into account endpoint patterns ('/api/something/:id')
 *
 * But, it could be just high level endpoints I guess.
 */
export enum ApiEndpoints {
	LOGIN = '/api/auth/login',
	REGISTER = '/api/auth/register',
	LOGOUT = '/api/auth/logout',
	FORGOT = '/api/auth/forgot',
	CHANGE_PW = '/api/auth/changepw'
}
