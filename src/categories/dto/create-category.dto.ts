import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Title is required' }) // Ensures title is provided
  @IsString({ message: 'Title must be a string' }) // Ensures title is a string
  title: string;
}
