
const Card = ({productData, btnText}) => {

    const {id, product_name, product_description } = productData;
  return (
   
           <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:transform hover:scale-105 group">
           <div className="relative overflow-hidden rounded-lg mb-6">
               <img src="https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?_gl=1*1kfe18s*_ga*MTA3NDI0Mjk3OS4xNzY5MDYyMDYw*_ga_8JE65Q40S6*czE3NjkwNjIwNTkkbzEkZzAkdDE3NjkwNjIwNTkkajYwJGwwJGgw" alt="product" width={400} height={300} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           </div>
       
           <div className="mb-4">
               <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-black rounded-full mb-3">
               {id}
               </span>
               <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
               {product_name}
               </h2>
           </div>
       
           <p className="text-gray-400 text-sm leading-relaxed mb-6">
               {product_description}
           </p>
       
           <div className="flex items-center justify-between">
               <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg transition-colors duration-200">
               {btnText || "Text Me"}
               </button>
               <div className="flex items-center space-x-1 text-xs text-gray-500">
               
               <span>234 views</span>
               </div>
           </div>
           </div>
    
  );
}


export default Card;