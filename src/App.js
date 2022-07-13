import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="flex flex-col items-center p-16">
        <div>
        <h1 className="font-sans text-white text-3xl py-2">Welcome To My</h1>
        </div>
        <div>
        <h1 className="font-sans text-white text-5xl font-bold">CODING NEWSLETTER</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-2 text-gray-500 bg-pink-800 text-xl font-semibold rounded-xl ">
          100,243 Members
        </div>
      </div>
      <div className="flex justify-center p-6 m-2 ">
    
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-xl text-gray-100">
          <a href="/">Subscribe to my newsletter</a>
        </button>
    
      </div>
      <div>
        {/* footer */}
      </div>
    </div>
  );
}

export default App;
