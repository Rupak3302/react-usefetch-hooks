import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import ErrorScreen from "./ErrorScreen";

export default function PhotoGrid() {

  const { data, loading, error } =
    useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <Loader />;
  if (error) return <ErrorScreen message={error} />;

  return (
    <div className="p-6 bg-black text-white min-h-screen">

      <h1 className="text-center text-3xl font-bold mb-6">
        <span className="px-3 py-1 rounded">
          Photos
        </span>
      </h1>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-1
      ">
        {data.slice(1, 29).map((item)=>(
          <div
            key={item.id}
            className="border border-white text-center p-6 pb-12"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full size-75 object-contain px-8 pb-2"
            />
            <p className="text-sm">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


