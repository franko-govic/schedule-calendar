import React from "react";
import AuthentificationForm from "../components/AuthentificationForm";

function Authentification() {
  return (
    <div>
      <div className="border rounded  container mx-auto  mt-10 p-10 w-fit max-w-[50dvh] shadow-sm shadow-black flex justify-center items-center">
        <AuthentificationForm />
      </div>
    </div>
  );
}

export default Authentification;
