import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/headerBox";

export default function RootHome() {
  const loggedInUser = {firstName: 'Scarlet'};

  return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome,"
              user={loggedInUser?.firstName || "Guest"}
              subtext="Access your dashboard and manage your account and transactions"
            />
            <TotalBalanceBox 
            accounts={[]}
            transactions={[]}
            totalBanks={1}
            totalBalance={200000}
            />
          </header>
        </div>
      </section>
  );
}
