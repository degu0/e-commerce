import { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Size } from "../../components/forms/size/Size";
import { LuTruck } from "react-icons/lu";
import { GrReturn } from "react-icons/gr";
import { Category } from "../../components/service/category/Category";
import { Carrosel } from "../../components/service/carrosel/Carrosel";
import { CustomNumberInput } from "../../components/forms/input/CustomNumberInput";

interface Product {
  id: number;
  name: string;
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with id ${id}`);
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const toggleFavorite = () => {
    if (product) {
      const updatedProduct = {
        ...product,
        favorite: !product.favorite
      };
      setProduct(updatedProduct);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
      <div className="h-full max-w-7xl m-auto">
        <div className="flex justify-center items-center h-screen gap-10">
          <div className="w-5/6 h-4/6 flex justify-center items-center">
            <div className="bg-gray-100 border-none rounded w-3/4 h-full flex justify-center items-center">
              <img src={product.image} alt={product.name} className="w-1/2" />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-3/6">
            <h2 className="font-bold text-4xl ">{product.name}</h2>
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
              {product.stock ? (
                <p className="text-green-500">In Stock</p>
              ) : (
                <p className="text-red-custom">Falta</p>
              )}
            </div>
            <h2 className="font-semibold text-3xl">
              R$ {product.price.toFixed(2)}
            </h2>
            <p>{product.description}</p>
            <hr />
            <div className="flex items-center gap-2">
              <p>Size:</p>
              <Size label="XS" />
              <Size label="S" />
              <Size label="M" />
              <Size label="L" />
              <Size label="XL" />
            </div>
            <div className="flex gap-2">
              <CustomNumberInput
                value={number}
                onChange={setNumber}
                min={0}
                max={product.quantityTotal}
                step={1}
              />
              <button className="border-none rounded p-3 text-white bg-red-custom w-6/12">
                Buy Now
              </button>
              <button
                onClick={toggleFavorite}
                className="rounded-full w-12 border-2 border-black flex items-center justify-center hover:bg-red-custom hover:text-white hover:border-white hover:transition-colors hover:duration-600"
              >
                <FaRegHeart
                  className={`h-5 w-5 ${product.favorite ? "text-red-custom" : "text-black"
                    }`}
                />
              </button>
            </div>
            <div className="border-2 rounded">
              <div className="flex justify-start items-center p-3">
                <LuTruck className="text-3xl mx-5" />
                <div>
                  <h4 className="font-semibold text-md">Free Delivery</h4>
                  <p className="text-sm font-semibold underline">
                    Enter you postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex justify-start items-center p-3">
                <GrReturn className="text-3xl mx-5" />
                <div>
                  <h4 className="font-semibold text-md">Return Delivery</h4>
                  <p className="text-sm font-semibold">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80vh]">
          <Category name={"Today's"} />
          <Carrosel />
        </div>
      </div>
    </div>
  );
}
