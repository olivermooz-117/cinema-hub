import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);
  return (
    <div>
      <h1>Book Movie Tickets</h1>
    </div>
  );
}

export default BookingForm;
