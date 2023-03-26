import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './serializers/session.serializer';

@Module({
    imports: [forwardRef(() => UsersModule), PassportModule],
    providers: [AuthService, LocalStrategy, PrismaService, SessionSerializer],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule { }
