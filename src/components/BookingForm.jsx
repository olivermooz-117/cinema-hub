import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);

  return (
    <div>
      <h1>Book Movie Tickets</h1>
       <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="number" min="1" />
      <button>Book Ticket</button>
    </form>
    </div>
  );
}

export default BookingForm;
