import PropTypes from "prop-types";
import "./TransactionHistory.css";

const TransactionHistory = (transactions) => {
  const { items } = transactions;
  return (
    <table className="Transaction-history">
      <thead className="Trans-thead">
        <tr className="Head-tr">
          <th className="Trans-head-item">Type</th>
          <th className="Trans-head-item">Amount</th>
          <th className="Trans-head-item">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className="Trans-body-type">{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default TransactionHistory;
