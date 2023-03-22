import { UserRoles } from "@prisma/client";

export class CreateUserDto {
    email: string;
    password: string;
    roles: UserRoles;
}
