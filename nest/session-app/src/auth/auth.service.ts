import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
    ) { }

    async login(user: any, session: Record<string, any>) {
        session.user = user;
        return { message: 'Login successful' };
    }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            return null;
        }
        const isValidPassword = await this.validatePassword(password, user.password);
        if (!isValidPassword) {
            return null;
        }
        return user;
    }

    async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}
