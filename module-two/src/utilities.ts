
type Product={
    id: number;
    name: string;
    price: number;
    category: string;
    colour:string
}
type ProductSummary=Pick<Product,"name"|"price">
type ProductWithoutId=Omit<Product,"id"|"category">
type ProductWithColour=Required<Product>
const product:ProductWithColour={
    id:1,
    name:"Laptop",
    price:50000,
    category:"Electronics",
    colour:"Black"
}
type OptionProduct=Partial<Product>
const product2:OptionProduct={
    id:1,
    name:"Laptop",
    price:50000,
    colour:"Black"
}
type productReadOnly=Readonly<Product>
