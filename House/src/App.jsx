function App() {
  return (
    <>
      <nav className="flex justify-around ml-6 mr-6 mt-3 bg-teal-200 h-12">
        <div className=" text-center">
          <p>Logo</p>
        </div>
        <div className="flex list-none font-sans">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className="">
          <button className=" border-2 border-slate-300 outline-1 outline-green-300 rounded bg-gray-200 m-3 text-lg ">Register</button>
          <button className="outline outline-offset-2 outline-2 ...">Button B</button>
        </div>
      </nav>
    </>
  );
}

export default App;
