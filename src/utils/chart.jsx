'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { chartData } from "@/lib/chartdata";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  value: {
    label: "Temperature",
    color: "var(--chart-1)",
  }
};

export default function Chart() {
  return (
    <ChartContainer className="h-50 mx-auto" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 10,
          right: 10,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={2}
          tickFormatter={(value) => value}
          padding={{
            left: 5,
            right: 5,
          }}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Area
          dataKey="value"
          type="linear"
          fill="var(--color-value)"
          fillOpacity={0.4}
          stroke="var(--color-value)"
        />
      </AreaChart>
    </ChartContainer>
  );
}