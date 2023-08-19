import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PlanCard from "../plan-card/PlanCard";
import { AppContext } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const {
    logout,
    user,
    fetchAllSubscriptions,
    transactions
  } = useContext(AppContext);
  const navigator = useNavigate();

  useEffect(() => {
    fetchAllSubscriptions();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("rememberedUser");
    navigator("/");
  };

  const renderTransactionList = () => {
    if (transactions) {
      return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          {transactions.map((item) => (
            <PlanCard
              subId={item.subscriptionId}
              key={item._id}
              period={item.planDetails.period}
              type={item.active ? "active" : null}
              plan={item.planDetails.plan}
              amount={
                item.planDetails.period === "month"
                  ? item.planDetails.planInfo["Monthly-Price"]
                  : item.planDetails.planInfo["Yearly-Price"]
              }
              data={item}
            />
          ))}
        </div>
      );
    } else {
      return (
        <h2 style={{ textAlign: "center", color: "white", marginTop: "40px" }}>
          Please Wait, We are Fetching Data....
        </h2>
      );
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Welcome {user && user.name}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleLogout}
          className="btn"
          style={{
            backgroundColor: "white",
            color: "#1e4c91",
            width: "inherit",
            margin: "11px"
          }}
        >
          Log Out
        </button>
        <Link
          to="/plans"
          className="btn"
          style={{
            backgroundColor: "white",
            color: "#1e4c92",
            width: "inherit"
          }}
        >
          Browse Plans
        </Link>
      </div>

      <div style={{ marginTop: 22 }}>
        {renderTransactionList()}
      </div>
    </div>
  );
}

