import {  LayoutDashboard } from "lucide-react"
import { RiShoppingBasketFill, RiVerifiedBadgeFill } from "react-icons/ri";

export const registerFormControl = [

    {
        name: 'userName',
        label: 'User Name',
        placeholder: 'Enter your username',
        componentType: 'input',
        type: 'text',
       
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your Email',
        componentType: 'input',
        type: 'email'
    },
    {
        name: 'password',
        label: 'passwod',
        placeholder: 'Enter your password',
        componentType: 'input',
        type: 'password'
    }
]

export const loginFormControl = [

    
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your Email',
        componentType: 'input',
        type: 'email'
    },
    {
        name: 'password',
        label: 'passwod',
        placeholder: 'Enter your password',
        componentType: 'input',
        type: 'password'
    }
]


export const addProductElement = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

  