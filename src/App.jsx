import './index.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload.jsx";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";
import { RedirectToSignIn, useAuth } from "@clerk/react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return children;
};


const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
         <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
       <Route
  path="/upload"
  element={
    <ProtectedRoute>
      <Upload />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-files"
  element={
    <ProtectedRoute>
      <MyFiles />
    </ProtectedRoute>
  }
/>

<Route
  path="/subscriptions"
  element={
    <ProtectedRoute>
      <Subscription />
    </ProtectedRoute>
  }
/>

<Route
  path="/transactions"
  element={
    <ProtectedRoute>
      <Transactions />
    </ProtectedRoute>
  }
/>
                            <Route path="/*" element={<RedirectToSignIn />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App;