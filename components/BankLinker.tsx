import React from 'react';

const BankLinker  = () => {

  
  const clientId = process.env.CLIENT_ID; // Replace with your actual client ID
  const redirectUri = 'http://localhost:3000/callback'; // Example redirect URI
  const scope = 'accounts transactions'; // Example scopes
  
  
  
  // Construct the authUrl with correct variable substitution and encoding
  const AUTH_URL = `https://auth.truelayer.com/?response_type=code&client_id=dilo-33305e&scope=info%20accounts%20balance%20cards%20transactions%20direct_debits%20standing_orders%20offline_access&redirect_uri=https://console.truelayer.com/redirect-page&providers=uk-ob-all%20uk-oauth-all`; 
  
  
  const handleRedirect = () => {
    window.location.href = AUTH_URL;
  };

  return (
    <div>
      <button onClick={handleRedirect} className='form-btn p-2'>Connect banks</button>
    </div>
  );
};

export default BankLinker;