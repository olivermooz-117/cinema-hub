function TicketSummary(props) {
  return (
 <div className="summary-box">
    <h2>Ticket Summary</h2>

    <p>Name: {props.name}</p>


    <p>Email: {props.email}</p>


    <p>Tickets: {props.tickets}</p>


<p>Total Price: Ksh {props.totalPrice}</p>



    </div>
  );
}

export default TicketSummary;