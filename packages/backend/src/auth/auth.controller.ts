import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor( private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body()authCredentialsDto: AuthCredentialsDto) {

    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.singIn(authCredentialsDto);
  }

  @Get('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    return { user: req.user }
  }
}
