export default function ErrorScreen({ message }) {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white text-xl">
      Error : {message}
    </div>
  );
}
