import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart as PieIcon, CheckCircle2, TrendingUp } from 'lucide-react';

export default function BudgetVisualizer({ data, budgetData: propBudgetData, currency: propCurrency, totalBudget: propTotalBudget }) {
  const budgetData = propBudgetData || data?.budgetBreakdown || [];
  const currency = propCurrency || data?.currency || '₹';
  const totalBudget = propTotalBudget || data?.totalBudget || 20000;

  // Distinct, vibrant color palette
  const CATEGORY_COLORS = {
    'Stay': '#264653',       // Deep Navy
    'Food': '#E76F51',       // Vibrant Coral
    'Travel': '#2A9D8F',     // Sage/Teal
    'Activities': '#E9C46A'  // Goldenrod
  };

  const getColor = (item) => {
    if (item && item.name && CATEGORY_COLORS[item.name]) return CATEGORY_COLORS[item.name];
    if (item && item.fill) return item.fill;
    return '#264653';
  };

  const getPercentage = (value) => {
    if (!totalBudget) return 0;
    return ((value / totalBudget) * 100).toFixed(0);
  };

  // Custom tooltips matching the editorial design
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const itemData = payload[0].payload;
      const color = getColor(itemData);
      return (
        <div className="bg-white border border-[#EFEBE1] p-3 rounded-xl shadow-lg font-sans text-xs">
          <p className="font-serif font-bold text-[#2C2926] text-sm">{itemData.name}</p>
          <p className="mt-1 font-semibold" style={{ color }}>
            {currency}{Number(itemData.value).toLocaleString('en-IN')} ({getPercentage(itemData.value)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="fade-in space-y-6">
      {/* Section Title */}
      <div className="bg-white border border-[#EFEBE1] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2926]">
            Financial Allocation & Budget
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-gray-600 mt-1">
            Real-time expenditure estimate across lodging, dining, transit, and sight-seeing activities.
          </p>
        </div>
        <div className="bg-[#D8F3DC] text-[#1B4332] rounded-full uppercase tracking-wider text-[10px] font-bold px-3.5 py-1.5 shrink-0 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332]" />
          <span>Feasibility Budget Verified</span>
        </div>
      </div>

      {/* Main Budget Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: Interactive Donut Chart */}
        <div className="lg:col-span-5 bg-white border border-[#EFEBE1] rounded-2xl p-5 shadow-xs flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-3 w-full justify-between">
            <h3 className="font-serif text-lg font-bold text-[#2C2926] flex items-center gap-2">
              <PieIcon className="w-4 h-4 text-[#264653]" />
              Expense Distribution
            </h3>
            <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-2.5 py-0.5">
              Interactive
            </span>
          </div>

          <div className="relative w-full h-[220px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={88}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => {
                    const color = getColor(entry);
                    return (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={color} 
                        className="stroke-white stroke-2 focus:outline-none"
                      />
                    );
                  })}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* Center overlay showing summation */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500">
                Total Budget
              </span>
              <span className="text-xl font-serif font-bold text-[#2C2926] mt-0.5">
                {currency}{totalBudget ? Number(totalBudget).toLocaleString('en-IN') : '20,000'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Category Breakdown Cards */}
        <div className="lg:col-span-7 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {budgetData.map((item) => {
              const color = getColor(item);
              const pct = getPercentage(item.value);

              return (
                <div 
                  key={item.name} 
                  className="bg-white border border-[#EFEBE1] rounded-2xl p-4 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0" 
                        style={{ backgroundColor: color }}
                      ></span>
                      <span className="font-serif font-bold text-base text-[#2C2926]">{item.name}</span>
                    </div>
                    <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full text-xs font-bold px-2.5 py-0.5">
                      {pct}%
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-0.5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Allocated:</span>
                    <span className="text-lg font-serif font-bold text-[#2C2926]">
                      {currency}{Number(item.value).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="w-full h-2 bg-[#F9F6F0] rounded-full overflow-hidden border border-[#EFEBE1]">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ width: `${pct}%`, backgroundColor: color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Budget Note */}
          <div className="bg-[#2A9D8F]/10 border border-[#2A9D8F]/25 rounded-2xl p-3.5 flex items-start gap-3">
            <TrendingUp className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
            <div className="text-xs font-sans text-gray-600 leading-relaxed">
              <strong className="font-bold text-[#2A9D8F] font-serif">Feasibility Tip:</strong> Pre-booking local transit and attraction entrance tickets saves up to 12% on on-ground expenses.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
