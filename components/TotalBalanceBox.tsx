"use client";

import React from "react";
import { formatAmount } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

interface Account {
  id: string;
  balance: number;
}

interface Transaction {
  id: string;
  amount: number;
}

interface TotalBalanceBoxProps {
  accounts?: Account[];
  transactions?: Transaction[];
  totalBanks: number;
  totalBalance: number;
}

const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
  accounts = [],
  transactions = [],
  totalBanks,
  totalBalance,
}) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* Doughnut Chart (placeholder) */}
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank accounts: {totalBanks}</h2>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">Total Balance</p>

          <p className="total-balance-amount flex-center gap-2">
            <AnimatedCounter end={totalBalance} formattingFn={formatAmount} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
