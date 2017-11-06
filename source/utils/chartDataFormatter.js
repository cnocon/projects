import RandomColor from 'just.randomcolor';

export function a2c(a){
  const formattedData = {
    type:"bubble",
    data: {
      labels: ["Country"],
      datasets: []
    },
    options: {
      title: {
        display: true,
        text: "Homicide rate (per 100,000 people)"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Homicides per 100,000"
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "HDI (2015)"
          }
        }]
      }
    }
  }

  a.forEach(function(set) {
		let color = new RandomColor().toRGBA().toCSS();
		const thing = {label: set.Country, data: [{x: set['x'], y: set['y'], r: set['r']}], backgroundColor: color};

		formattedData.data.datasets.push(thing);
	});

	return formattedData;
}
