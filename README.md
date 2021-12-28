# dk-chart

> simple & lightweight financial chart package

**[Demo](https://codesandbox.io/s/dry-sun-4wsql?file=/index.html)**

## Get Started

### unpkg

```html
<html>
  <body>
    <div id="container" style="width:800px;"></div>
    <script src="https://unpkg.com/dk-chart@1.2.1/dist/index.js"></script>
    <script>
      const { DKChart } = dkChart;
      const chart = new DKChart(document.getElementById('container'));
      
      // your data
      const CandleData = [
        {
          date: 1631631524000,
          open: 29.158473787179815,
          high: 30.52073739103113,
          low: 25.101186463245156,
          close: 27.118606078849332,
        },
        ...
      ]

      // draw chart
      chart.setData(CandleData);
    </script>
  </body>
</html>
```

