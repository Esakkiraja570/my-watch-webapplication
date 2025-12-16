
import img1 from "./a9ff3b_14fdf403ceef4f678368fdc3ee455fdf.webp";
import img2 from "./a9ff3b_7dce82cc188848a09707966954bd73eb.webp";
import img3 from "./a9ff3b_0f02303a39f04aaab88bb418b8a62cbd.webp";
import img4 from "./a9ff3b_4f89ba04c5d6495c9699ede2a992e276.webp";
import "./Cards.css"

  const Cards = () => {
  const products = [
    { id: 1,imgages:img1 ,name: "Black jet", price: "$10" },
    { id: 2,imgages:img2, name: "Xtreme sport", price: "$20" },
    { id: 3,imgages:img3, name: "Gen z", price: "$30" },
    { id: 4,imgages:img4, name: "Apollo", price: "$50" },
  ];

  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.imgages}/>
          <h4 id="content">{product.name}</h4>
          <p id="content">{product.price}</p>
          <button className="view-btn" style={{color:'red',backgroundColor:'white',border:'1px solid'}}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
