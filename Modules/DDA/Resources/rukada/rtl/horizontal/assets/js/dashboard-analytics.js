$(function () {
	"use strict";
	// chart 1
	var options = {
		series: [{
			name: 'Sessions',
			data: [14, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5]
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 310,
			type: 'area',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.10,
			}
		},
		stroke: {
			width: 5,
			curve: 'smooth'
		},
		xaxis: {
			type: 'datetime',
			categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000'],
		},
		title: {
			text: 'Sessions',
			align: 'left',
			style: {
				fontSize: "16px",
				color: '#666'
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				gradientToColors: ['#0d6efd'],
				shadeIntensity: 1,
				type: 'vertical',
				opacityFrom: 0.7,
				opacityTo: 0.2,
				stops: [0, 100, 100, 100]
			},
		},
		markers: {
			size: 5,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		dataLabels: {
			enabled: false
		},
		colors: ["#0d6efd"],
		yaxis: {
			title: {
				text: 'Sessions',
			},
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart1"), options);
	chart.render();
	// chart 2
	var options = {
		series: [{
			name: 'Total Users',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'bar',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#17a00e',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#17a00e"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 0,
			curve: 'smooth'
		},
		colors: ["#17a00e"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart2"), options);
	chart.render();
	// chart 3
	var options = {
		series: [{
			name: 'Page Views',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'bar',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#f41127',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#f41127"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 0,
			curve: 'smooth'
		},
		colors: ["#f41127"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart3"), options);
	chart.render();
	// chart 4
	var options = {
		series: [{
			name: 'Avg. Session Duration',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'bar',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#0d6efd',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 0,
			curve: 'smooth'
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart4"), options);
	chart.render();
	// chart 5
	var options = {
		series: [{
			name: 'Bounce Rate',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'bar',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#ffb207',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#ffb207"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 0,
			curve: 'smooth'
		},
		colors: ["#ffb207"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart5"), options);
	chart.render();
	// chart 6
	// Create the chart
	Highcharts.chart('chart6', {
		chart: {
			height: 350,
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Traffic Sources Status. January, 2020'
		},
		accessibility: {
			announceNewData: {
				enabled: true
			}
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: 'Total percent market share'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:.1f}%'
				}
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: "Traffic Sources",
			colorByPoint: true,
			data: [{
				name: "Organic Search",
				y: 62.74,
				drilldown: "Organic Search"
			}, {
				name: "Direct",
				y: 40.57,
				drilldown: "Direct"
			}, {
				name: "Referral",
				y: 25.23,
				drilldown: "Referral"
			}, {
				name: "Others",
				y: 10.58,
				drilldown: "Others"
			}]
		}],
		drilldown: {
			series: [{
				name: "Chrome",
				id: "Chrome",
				data: [
					["v65.0",
						0.1
					],
					["v64.0",
						1.3
					],
					["v63.0",
						53.02
					],
					["v62.0",
						1.4
					],
					["v61.0",
						0.88
					],
					["v60.0",
						0.56
					],
					["v59.0",
						0.45
					],
					["v58.0",
						0.49
					],
					["v57.0",
						0.32
					],
					["v56.0",
						0.29
					],
					["v55.0",
						0.79
					],
					["v54.0",
						0.18
					],
					["v51.0",
						0.13
					],
					["v49.0",
						2.16
					],
					["v48.0",
						0.13
					],
					["v47.0",
						0.11
					],
					["v43.0",
						0.17
					],
					["v29.0",
						0.26
					]
				]
			}, {
				name: "Firefox",
				id: "Firefox",
				data: [
					["v58.0",
						1.02
					],
					["v57.0",
						7.36
					],
					["v56.0",
						0.35
					],
					["v55.0",
						0.11
					],
					["v54.0",
						0.1
					],
					["v52.0",
						0.95
					],
					["v51.0",
						0.15
					],
					["v50.0",
						0.1
					],
					["v48.0",
						0.31
					],
					["v47.0",
						0.12
					]
				]
			}, {
				name: "Internet Explorer",
				id: "Internet Explorer",
				data: [
					["v11.0",
						6.2
					],
					["v10.0",
						0.29
					],
					["v9.0",
						0.27
					],
					["v8.0",
						0.47
					]
				]
			}, {
				name: "Safari",
				id: "Safari",
				data: [
					["v11.0",
						3.39
					],
					["v10.1",
						0.96
					],
					["v10.0",
						0.36
					],
					["v9.1",
						0.54
					],
					["v9.0",
						0.13
					],
					["v5.1",
						0.2
					]
				]
			}, {
				name: "Edge",
				id: "Edge",
				data: [
					["v16",
						2.6
					],
					["v15",
						0.92
					],
					["v14",
						0.4
					],
					["v13",
						0.1
					]
				]
			}, {
				name: "Opera",
				id: "Opera",
				data: [
					["v50.0",
						0.96
					],
					["v49.0",
						0.82
					],
					["v12.1",
						0.14
					]
				]
			}]
		}
	});
	// chart 7
	Highcharts.chart('chart7', {
		chart: {
			height: 350,
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Sessions Device'
		},
		subtitle: {
			text: 'Ratio of devices use by users'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				innerSize: 120,
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
				},
				showInLegend: true
			}
		},
		//colors: ['#ff9ad5', '#50b5ff', '#5a65dc'],
		series: [{
			name: 'Users',
			colorByPoint: true,
			data: [{
				name: 'Desktop',
				y: 56
			}, {
				name: 'Mobile',
				y: 30
			}, {
				name: 'Tablet',
				y: 14
			}]
		}],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					plotOptions: {
						pie: {
							innerSize: 140,
							dataLabels: {
								enabled: false
							}
						}
					},
				}
			}]
		}
	});
	// chart 8
	Highcharts.chart('chart8', {
		chart: {
			type: 'bar',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		exporting: {
			buttons: {
				contextButton: {
					enabled: false,
				}
			}
		},
		//colors: ['#7c6cfb', '#02c9ef', '#f7a103'],
		title: {
			text: 'Visitor by Gender'
		},
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Visitor by Genders',
				style: {
					display: 'none',
				}
			}
		},
		legend: {
			reversed: false
		},
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
		series: [{
			name: 'Male',
			data: [5, 3, 4, 7, 2]
		}, {
			name: 'Female',
			data: [2, 2, 3, 2, 1]
		}, {
			name: 'Others',
			data: [3, 4, 4, 2, 5]
		}]
	});
	// chart 9 
	var options = {
		series: [42, 47, 52, 58, 65],
		chart: {
			height: 340,
			type: 'polarArea'
		},
		labels: ['Chrome', 'Firefox', 'Edge', 'Opera', 'Safari'],
		fill: {
			opacity: 1
		},
		stroke: {
			width: 1,
			colors: undefined
		},
		colors: ["#17a00e", '#0dcaf0', '#f41127', '#ffc107', '#0d6efd'],
		yaxis: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false,
			position: 'bottom'
		},
		plotOptions: {
			polarArea: {
				rings: {
					strokeWidth: 0
				}
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart9"), options);
	chart.render();
	jQuery('#geographic-map').vectorMap({
		map: 'world_mill_en',
		backgroundColor: 'transparent',
		borderColor: '#818181',
		borderOpacity: 0.25,
		borderWidth: 1,
		zoomOnScroll: false,
		color: '#009efb',
		regionStyle: {
			initial: {
				fill: '#6c757d'
			}
		},
		markerStyle: {
			initial: {
				r: 9,
				'fill': '#fff',
				'fill-opacity': 1,
				'stroke': '#000',
				'stroke-width': 5,
				'stroke-opacity': 0.4
			},
		},
		enableZoom: true,
		hoverColor: '#009efb',
		markers: [{
			latLng: [21.00, 78.00],
			name: 'I Love My India'
		}],
		series: {
			regions: [{
				values: {
					IN: '#0d6efd',
					US: '#15b70a',
					RU: '#f41127',
					AU: '#ffb207'
				}
			}]
		},
		hoverOpacity: null,
		normalizeFunction: 'linear',
		scaleColors: ['#b6d6ff', '#005ace'],
		selectedColor: '#c9dfaf',
		selectedRegions: [],
		showTooltip: true,
		onRegionClick: function (element, code, region) {
			var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
			alert(message);
		}
	});
});