<script>
  // import { Chart, Svg, Axis, Bars } from "layerchart";
  import { BarChart } from "layerchart";
  import { scaleBand } from "d3-scale";

  export let data = [];

  const xKey = "value";
  const yKey = "year";

  data.forEach((d) => {
    d[xKey] = +d[xKey];
  });
</script>

<div class="chart-container">
  <!-- <Chart
    {data}
    x={xKey}
    y={yKey}
    yScale={scaleBand().paddingInner(0.05)}
    xDomain={[0, null]}
    padding={{ bottom: 20, left: 35 }}
  >
    <Svg>
      <Axis placement="bottom" />
      <Axis placement="left" />
      <Bars />
    </Svg>
  </Chart> -->

  <BarChart {data} x={xKey} y={yKey} groupPadding={0.05} />
</div>

<style>
  .chart-container {
    height: 250px;
  }
</style>
