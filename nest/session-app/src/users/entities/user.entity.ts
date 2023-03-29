import { User, UserRoles } from '@prisma/client';

export class UserEnt implements User {
    id: number;
    email: string;
    password: string;
    roles: UserRoles;
}
