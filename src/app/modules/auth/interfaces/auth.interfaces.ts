export interface AuthenticationData {
  email: string;
  password: string;
}

export interface RegistrationData extends AuthenticationData {
  first_name: string;
  last_name: string;
  verify_password: string;
}
