import { Controller, Post, UseGuards, Request, Get, Redirect, Render, Body, UnauthorizedException, Req, Res, Session } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private usersService: UsersService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() loginDto: LoginDto, @Req() req) {
        // the authenticated user is stored in req.user thanks to LocalAuthGuard
        const user = req.user;
        req.session.user = user;

        return { message: 'Login success', email: loginDto.email };
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Session() session) {
        session.destroy();
        return 'User successfully logged out';
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto, @Req() req) {
        const user = await this.usersService.create(createUserDto);
        req.session.user = user;
        return { message: 'Registration success', email: createUserDto.email };
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.session.user;
    }
}
