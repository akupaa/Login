import React from "react";
import Button from "./components/Elements/Button";
import InputForm from "./components/Elements/Input/";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs border-rounded">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="fonst-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form action="">
          <InputForm
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />

          <InputForm
            label="Password"
            type="password"
            placeholder="password"
            name="password"
          />

          <Button variant="bg-blue-600 w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
