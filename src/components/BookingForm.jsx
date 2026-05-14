import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);

  return (
    <div>
      <h1>Book Movie Tickets</h1>

   <form>
     <input 
       type="text" 
       value={name}
       onChange={(e) => setName(e.target.value)}
       placeholder="Name"
       />


      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        />


      <input 
         type="number" 
         value={tickets}
         onChange={(e) => setTickets(Number(e.target.value))}
         min="1" 
         />

       <button>Book Ticket</button>
 </form>
    </div>
  );
}

export default BookingForm;
