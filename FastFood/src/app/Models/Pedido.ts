export class Pedido{
    name!: string;  // Nombre del cliente
    description!: string;  // Descripción del pedido
    number: number = Math.floor(Math.random() * 1000); // Numero de pedido random de 1 a 1000
    date!: Date; // Fecha de creación del pedido
}