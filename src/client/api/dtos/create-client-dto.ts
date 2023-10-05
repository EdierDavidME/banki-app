import { IsEmail, Length, IsNotEmpty } from 'class-validator';

const msgNames = 'Los de datos entre 3 y 20 caracteres';
export class CreateClientDto {
  @IsNotEmpty({ message: 'El nombre del cliente es obligatorio' })
  @Length(3, 20, { message: msgNames })
  firstName: string;

  @IsNotEmpty({ message: 'Apellido obligatorio' })
  @Length(3, 20, { message: msgNames })
  lastName: string;

  @IsEmail({}, { message: 'Debe ser un correo' })
  @IsNotEmpty({ message: 'Correo obligatorio' })
  mail: string;

  @Length(13)
  phoneNumber: string;

  @IsNotEmpty()
  dni: string;
}
