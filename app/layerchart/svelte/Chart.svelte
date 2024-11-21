<script>
  import { BarChart } from "layerchart";

  export let data = [];

  const xKey = "value";
  const yKey = "year";

  data.forEach((d) => {
    d[xKey] = +d[xKey];
  });
</script>

<div class="chart-container">
  <BarChart
    {data}
    orientation="horizontal"
    x={xKey}
    y={yKey}
    bandPadding={0.05}
    props={{
      xAxis: { tweened: { duration: 200 } },
      yAxis: { format: "none" },
      bars: { tweened: { duration: 200 } },
    }}
  />
</div>

<style>
  .chart-container {
    height: 250px;
  }
</style>
