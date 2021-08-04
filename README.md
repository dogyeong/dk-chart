# dk-chart

> simple & lightweight financial chart package

## Creating candle chart

```javascript
import { DKChart } from 'dk-chart';

const chart = new DKChart(document.getElementById('container'));

chart.setCandles([
      {
        date: 'Sun Jun 27 2021 23:58:44 GMT+0900',
        open: 10,
        high: 20,
        low: 5,
        close: 15,
      },
      {
        date: 'Mon Jun 28 2021 23:58:44 GMT+0900',
        open: 15,
        high: 27,
        low: 10,
        close: 11,
      },
      {
        date: 'Tue Jun 29 2021 23:58:44 GMT+0900',
        open: 15,
        high: 27,
        low: 10,
        close: 11,
      },
      {
        date: 'Wed Jun 30 2021 23:58:44 GMT+0900',
        open: 15,
        high: 27,
        low: 10,
        close: 11,
      }
    ]);
```

