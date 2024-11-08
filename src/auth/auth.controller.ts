import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post('login')
  login() {
    return this.authservice.login();
  }

  @Post('signup')
  signup() {
    return this.authservice.signup();
  }
}
