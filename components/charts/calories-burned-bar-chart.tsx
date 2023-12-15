"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface WorkoutData {
  workoutType: string;
  averageCaloriesBurned: number;
}

interface HorizontalBarChartProps {
  data: WorkoutData[];
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove(); // Clear svg content before adding new elements

      const margin = { top: 0, right: 100, bottom: 0, left: 150 };
      const width = 800 - margin.left - margin.right;
      const height = 280 - margin.top - margin.bottom;

      // Create a root element
      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Set the scales
      const y = d3
        .scaleBand()
        .rangeRound([0, height])
        .padding(0.1)
        .domain(data.map((d) => d.workoutType));

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.averageCaloriesBurned) ?? 0])
        .range([0, width]);

      // Colors
      const color = d3.scaleOrdinal(d3.schemeCategory10);

      // Add the bars
      g.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", (d, i) => color(i.toString()))
        .attr("y", (d) => y(d.workoutType)!)
        .attr("height", y.bandwidth())
        .attr("x", 0)
        .attr("width", 0) // start with 0 width
        .transition() // apply a transition
        .duration(1000) // duration of the transition
        .attr("width", (d) => x(d.averageCaloriesBurned));

      // Add the Y Axis
      g.append("g").call(d3.axisLeft(y));

      // Add the X Axis
      g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      g.selectAll(".label")
        .data(data)
        .enter()
        .append("text")
        .attr("width", 0) // start with 0 width
        .transition() // apply a transition
        .duration(1000) // duration of the transition
        .attr("class", "label")
        .attr("y", (d) => y(d.workoutType)! + y.bandwidth() / 2)
        .attr("x", (d) => x(d.averageCaloriesBurned) + 3)
        .attr("dy", ".35em")
        .text((d) => d.averageCaloriesBurned);
    }
  }, [data]); // Only re-run the effect if new data comes in

  return <svg ref={d3Container} width={800} height={500} />;
};

export default HorizontalBarChart;
