export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="mb-4 text-6xl --color-main-text">404</h1>
      <p className="mb-8 text-2xl">Page Not Found</p>
      <p className="mb-8">La ruta NO EXISTE</p>
      <button className="px-4 py-2 text-white rounded bg-[--color-link-text]">Volver</button>
    </main>
  );
}
