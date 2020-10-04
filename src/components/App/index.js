import React from 'react';

function App() {
  return (
    <div>
      <nav className="flex items-center px-4 w-full">
        <h1 className="text-xl mr-5">AquaNet</h1>
        <input type="text" placeholder="Search here..." className="bg-gray-200 px-4 py-2 box-border border border-gray-200 my-2 rounded-full outline-none focus:bg-white focus:border-gray-300 transition-all duration-200" />
      </nav>
    </div>
  );
}

export default App;
