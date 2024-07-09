const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const BASE64_ENCODED_CREDENTIALS = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  const REDIRECT_URI = 'http://localhost:3000/callback';

  try {
    const response = await axios.post('https://api.truelayer.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      },
      headers: {
        Authorization: `Bearer ${BASE64_ENCODED_CREDENTIALS}`,
      },
    });

    // Store the access token securely
    const accessToken = response.data.access_token;

    // Redirect the user to your application or perform actions with the access token
    res.redirect('/success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Authentication failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
