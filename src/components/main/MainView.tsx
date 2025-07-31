function MainView() {
 
    return (
      <main className="p-6 space-y-6">
      <header className="bg-blue-100 p-4 rounded shadow flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-800">Header</h1>
      </header>

      <section className="bg-white p-4 rounded shadow flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">Products</h2>
        <p className="text-center">List of products goes here...</p>
      </section>

      <section className="bg-white p-4 rounded shadow flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">Details</h2>
        <p className="text-center">More information...</p>
      </section>
    </main>
    )
  }
  
  export default MainView