import React, { useState } from 'react';


function App() {
const [wish, setWish] = useState("Tu meri life ka hero hai 😎");


return (
<div className="card">
<h1>Best Friend 💙</h1>
<p>{wish}</p>
<button onClick={() => setWish("Teri dosti priceless hai 💎")}>
Change Wish
</button>
</div>
);
}