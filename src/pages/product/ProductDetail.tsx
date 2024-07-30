import { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Size } from "../../components/forms/size/Size";
import { LuTruck } from "react-icons/lu";
import { GrReturn } from "react-icons/gr";
import { Carrosel } from "../../components/service/carrosel/Carrosel";
import { CustomNumberInput } from "../../components/forms/input/CustomNumberInput";
import { TitleCategory } from "../../components/service/title_category/TitleCategory";
import { useAuth } from "../../components/service/auth_context/AuthContext";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantityTotal: number;
  review: number;
  stock: boolean;
  description: string;
  image: string;
  favorite: boolean;
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [number, setNumber] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with id ${id}`);
        }
        const data: Product = await response.json();

        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const toggleFavorite = () => {
    if (product) {
      const updatedProduct = {
        ...product,
        favorite: !product.favorite,
      };
      setProduct(updatedProduct);
      updateProductFavoriteOnServer(product.id, !product.favorite);
    }
  };

  const updateProductFavoriteOnServer = (productId: number, newFavoriteStatus: boolean) => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorite: newFavoriteStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product favorite status updated:', data);
      })
      .catch((error) => {
        console.error('Error updating product favorite status:', error);
      });
  };

  const handleBuyNow = async () => {
    if (!product || number <= 0) {
      alert("Please select a valid quantity.");
      return;
    }

    const purchase = {
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      quantity: number,
      price: product.price,
      date: new Date().toISOString()
    };

    try {
      const response = await fetch(`http://localhost:3000/purchases`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(purchase)
      });

      if (!response.ok) {
        throw new Error("Failed to create purchase");
      }

      alert("Purchase successful!");
      navigate('/cart');
    } catch (error) {
      console.error("Error creating purchase:", error);
      alert("Error creating purchase");
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <div className="h-[15vh] flex items-center ml-24">
        <p className="text-gray-500 tracking-widest">
          Account / <label className="text-black">{product.name}</label>
        </p>
      </div>
      <div className="h-full max-w-6xl m-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="w-5/6 h-full flex justify-center items-center">
            <div className="bg-gray-100 border-none rounded w-3/4 h-full flex justify-center items-center">
              <img src={product.image} alt={product.name} className="xl:w-1/2 " />
            </div>
          </div>
          <div className="flex flex-col md:max-w-2xl xl:max-w-7xl md:m-auto gap-6">
            <h2 className="font-bold text-3xl">{product.name}</h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <p className="text-gray-400">({product.review} reviews)</p>
              |
              {product.stock && product.quantityTotal > 0 ? (
                <p className="text-green-500">In Stock</p>
              ) : (
                <p className="text-red-custom">Out of Stock</p>
              )}
            </div>
            <h2 className="font-semibold text-2xl">
              R$ {product.price.toFixed(2)}
            </h2>
            <p>{product.description}</p>
            <hr />
            {product.category === "Clothing" ? (
              <div className="flex items-center gap-2">
                <p>Size:</p>
                <Size label="XS" />
                <Size label="S" />
                <Size label="M" />
                <Size label="L" />
                <Size label="XL" />
              </div>
            ) : ('')}
            <div className="flex gap-6">
              <CustomNumberInput
                value={number}
                onChange={setNumber}
                min={0}
                max={product.quantityTotal}
                step={1}
              />
              <button
                onClick={handleBuyNow}
                className={`border-none rounded text-white bg-red-custom w-5/12  ${product.quantityTotal === 0 || !user ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Buy Now
              </button>
              <button
                onClick={toggleFavorite}
                className={` ${product.quantityTotal === 0 || !user ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaRegHeart
                  className={`h-6 w-6 hover:text-red-custom  ${product.favorite ? "text-red-custom" : "text-black"}`}
                />
              </button>
            </div>
        <div className="border-2 rounded">
          <div className="flex justify-start items-center p-3">
            <LuTruck className="text-2xl mx-5" />
            <div>
              <h4 className="font-semibold text-md">Free Delivery</h4>
              <p className="text-sm font-semibold underline">
                Enter you postal code for Delivery Availability
              </p>
            </div>
          </div>
          <hr />
          <div className="flex justify-start items-center p-3">
            <GrReturn className="text-2xl mx-5" />
            <div>
              <h4 className="font-semibold">Return Delivery</h4>
              <p className="text-sm font-semibold">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
        <div className="h-[80vh] mt-16">
          <TitleCategory name={"Today's"} />
          <Carrosel />
        </div>
      </div>
    </div>
  );
}
