import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  isSellable: boolean;
}

const ListProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/?filter=price&order=ASC");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId: string) => {
    try {
      await api.delete(`/${productId}`);
      setProducts(products.filter(product => product.name !== productId));
      alert("Produto deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar produto", error);
      alert("Erro ao deletar produto.");
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Lista de Produtos</h1>
            <p className="text-gray-600 text-sm">
              Uma lista com os produtos disponíveis
            </p>
          </div>

          <button
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
            onClick={() => navigate("/add")}
          >
            Adicionar Produto
          </button>
        </div>

        <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Nome</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Valor</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 transition-all duration-200"
              >
                <td className="px-6 py-4 text-gray-800">{product.name}</td>
                <td className="px-6 py-4 text-gray-800">
                  R$ {product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="ml-4 text-red-600 hover:text-red-800 font-medium"
                    onClick={() => handleDelete(product.name)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProducts;
