import { EntityRepository, Repository } from "typeorm";
import { Users } from "./users.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, username, password, role } = authCredentialsDto;
    
    try {

      const user = new Users();

      user.email = email;

      user.username = username;

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      user.password = await this.hashPassword(password, salt);
      user.role = role;
    
      await user.save()
    } catch (error) {
        if(error.code === 'ER_DUP_ENTRY') {//duplicate email
          throw new ConflictException('email or username already exists.');
        } else {
          throw new InternalServerErrorException();
        }
      }
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    const user = await this.findOne({ username });

    if(user && user.comparePassword(password)) {
      return user.username;
    } else {
      return null;
    }

  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }

}