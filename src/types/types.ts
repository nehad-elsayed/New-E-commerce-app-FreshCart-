

  export interface UserInfo {
    email: string;
    password: string;
  }
 
  export interface LoginResponse {
    message: string;
    token: string;
    user: {
      name: string;
      email: string;
      role: string;
    };
  }
  
  export interface ApiError {
    message: string;
  }