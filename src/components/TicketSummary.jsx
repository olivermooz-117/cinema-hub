function TicketSummary(props) {
  return (
 <div>
    <h2>Ticket Summary</h2>

    <p>Name: {props.name}</p>


    <p>Email: {props.email}</p>


    <p>Tickets: {props.tickets}</p>






    </div>
  );
}

export default TicketSummary;