import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmplyeeCreateInput) {
    return this.databaseService.emplyee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role)
      return this.databaseService.emplyee.findMany({
        where: {
          role,
        },
      });
    return this.databaseService.emplyee.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.emplyee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmplyeeUpdateInput) {
    return this.databaseService.emplyee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.emplyee.delete({
      where: {
        id,
      },
    });
  }
}