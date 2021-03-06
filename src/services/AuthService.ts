import base64 from 'react-native-base64';
import qs from 'qs';
import api from './api';

interface ILoginDTO {
  email: string;
  password: string;
}

interface ISignupDTO {
  cpf: string;
  nome: string;
  senha: string;
  email: string;
}

const authHeader = `Basic ${base64.encode('app-mobile:mobile')}`;
class AuthService {
  static signIn(data: ILoginDTO): Promise<any> {
    return api({
      method: 'post',
      url: '/oauth/token',
      data: qs.stringify({
        username: data.email,
        password: data.password,
        grant_type: 'password',
      }),
      headers: {
        Authorization: authHeader,
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
  }

  static signUp(data: ISignupDTO): Promise<any> {
    return api.post('/criar/participantes', data);
  }

  static signUpProducer(data: ISignupDTO): Promise<any> {
    return api.post('/criar/produtores', data);
  }

  static getNewToken(token: string): Promise<any> {
    return api({
      method: 'post',
      url: '/oauth/token',

      data: qs.stringify({
        refresh_token: token,
        grant_type: 'refresh_token',
      }),
      headers: {
        Authorization: authHeader,
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
  }
}

export default AuthService;
