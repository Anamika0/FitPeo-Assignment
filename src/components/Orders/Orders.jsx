import styles from "./Orders.module.scss";

const Orders = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Orders</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Customer</td>
            <td>Order No.</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className="hrLine">
            <td>
              <div className={styles.user}>
                <img
                  src="/JohnWick.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Wick
              </div>
            </td>
            <td>189765</td>
            <td>$120.10</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
          </tr>
          <tr className="hrLine">
            <td>
              <div className={styles.user}>
                <img
                  src="/NeoAnderson.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Neo Anderson
              </div>
            </td>
            <td>108236</td>
            <td>$34.24</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
          </tr>
          <tr className="hrLine">
            <td>
              <div className={styles.user}>
                <img
                  src="/MichaelCorleone.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Michael Corleone
              </div>
            </td>
            <td>103456</td>
            <td>$213.20</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  src="/TylerDurden.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Tyler Durden
              </div>
            </td>
            <td>136098</td>
            <td>$113.50</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
