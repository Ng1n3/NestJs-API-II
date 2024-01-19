import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Eazi Olayinka',
      role: 'ENGINEER',
      email: 'eazi@gmail.com',
    },
    {
      id: 2,
      name: 'Thomas Jacob',
      role: 'ENGINEER',
      email: 'Thomas@gmail.com',
    },
    {
      id: 3,
      name: 'Ella Kingston',
      role: 'INTERN',
      email: 'Ella@gmail.com',
    },
    {
      id: 4,
      name: 'Stella Craig',
      role: 'ADMIN',
      email: 'stella@gmail.com',
    },
    {
      id: 5,
      name: 'Lozano Kruyff',
      role: 'ENGINEER',
      email: 'lozano@gmail.com',
    },
    {
      id: 6,
      name: 'Martin Odegard',
      role: 'ADMIN',
      email: 'martin@gmail.com',
    },
    {
      id: 7,
      name: 'Mudryk Benson',
      role: 'ENGINEER',
      email: 'mudryk@gmail.com',
    },
    {
      id: 8,
      name: 'Eric Dier',
      role: 'ADMIN',
      email: 'eric@gmail.com',
    },
    {
      id: 9,
      name: 'Erica Hampton',
      role: 'INTERN',
      email: 'erica@gmail.com',
    },
    {
      id: 10,
      name: 'Malik Abdulateef',
      role: 'INTERN',
      email: 'malik@gmail.com',
    },
    {
      id: 11,
      name: 'Joshua Benedict',
      role: 'ADMIN',
      email: 'joshua@gmail.com',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const rolesArray =  this.users.filter((user) => user.role === role);
      if(rolesArray.length === 0) throw new NotFoundException('User Role not Found')
      return rolesArray
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
