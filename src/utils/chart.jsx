'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { chartData } from "@/lib/chartdata";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  value: {
    label: "Temperature",
    color: "var(--chart-4)",
  }
};

export default function Chart() {
  return (
    <ChartContainer className="h-50 w-3/4 mx-auto" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid vertical={true} horizontal={false} />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => value}
        />
        <YAxis
          width={0}
          domain={["dataMin-10", "dataMax"]}
          type="number"
          tick={false}
          axisLine={false}
          tickLine={false}
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