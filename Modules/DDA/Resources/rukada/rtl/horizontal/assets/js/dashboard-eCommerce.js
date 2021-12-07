$(function () {
	"use strict";
	// chart 1
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'line',
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
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
	var chart = new ApexCharts(document.querySelector("#chart1"), options);
	chart.render();
	// chart 2
	var options = {
		series: [{
			name: 'Customers',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'line',
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
				color: '#ffc107',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#ffc107"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
			curve: 'smooth'
		},
		colors: ["#ffc107"],
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
			name: 'Store Visitores',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'line',
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
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
			name: 'Total Sales',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
			name: 'Customers',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}, {
			name: 'Store Visitores',
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
		}],
		chart: {
			foreColor: '#9ba7b2',
			type: 'bar',
			height: 300,
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		colors: ["#0dcaf0", '#0d6efd', '#e5e7e8'],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands"
				}
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart4"), options);
	chart.render();
	// chart 5
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 45,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart5"), options);
	chart.render();
	// chart 6
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 45,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart6"), options);
	chart.render();
	// chart 7
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 45,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart7"), options);
	chart.render();
	// chart 8
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 45,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart8"), options);
	chart.render();
	// chart 9
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 45,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart9"), options);
	chart.render();
	// chart 10
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 45,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart10"), options);
	chart.render();
	// chart 11
	var options = {
		series: [{
			name: 'Revenue',
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 45,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart11"), options);
	chart.render();
	// chart 11
	var options = {
		series: [{
			name: 'Revenue',
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 100,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart12"), options);
	chart.render();
	// chart 13
	var options = {
		series: [{
			name: 'Pageviews',
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 100,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
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
	var chart = new ApexCharts(document.querySelector("#chart13"), options);
	chart.render();
	// chart 14
	var options = {
		series: [{
			name: 'New Sessions',
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: 'area',
			height: 100,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#0dcaf0',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#0dcaf0"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			curve: 'smooth'
		},
		colors: ["#0dcaf0"],
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
	var chart = new ApexCharts(document.querySelector("#chart14"), options);
	chart.render();
	// chart 15
	var options = {
		series: [25, 65, 10, 14],
		chart: {
			height: 240,
			type: 'donut',
		},
		legend: {
			position: 'bottom',
			show: false,
		},
		plotOptions: {
			pie: {
				// customScale: 0.8,
				donut: {
					size: '80%'
				}
			}
		},
		colors: ["#17a00e", "#0d6efd", "#f41127", '#ffc107'],
		dataLabels: {
			enabled: false
		},
		labels: ['Kids', 'Men', 'Women', 'Furniture'],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart15"), options);
	chart.render();
	// chart 16
	var options = {
		chart: {
			height: 180,
			type: 'radialBar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			radialBar: {
				//startAngle: -135,
				//endAngle: 225,
				hollow: {
					margin: 0,
					size: '78%',
					background: '#ceffca',
					image: undefined,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: 'front',
					dropShadow: {
						enabled: false,
						top: 3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
						opacity: 0.65
					}
				},
				track: {
					// background: '#f8f9fa',
					//strokeWidth: '67%',
					margin: 0, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: -3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
						opacity: 0.65
					}
				},
				dataLabels: {
					showOn: 'always',
					name: {
						offsetY: -8,
						show: true,
						color: '#6c757d',
						fontSize: '15px'
					},
					value: {
						formatter: function (val) {
							return val + "%";
						},
						color: '#000',
						fontSize: '25px',
						show: true,
						offsetY: 10,
					}
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				type: 'horizontal',
				shadeIntensity: 0.5,
				gradientToColors: ['#17a00e'],
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#17a00e"],
		series: [68],
		stroke: {
			lineCap: 'round',
			width: '5',
			//dashArray: 4
		},
		labels: ['Completed'],
	}
	var chart = new ApexCharts(document.querySelector("#chart16"), options);
	chart.render();
	// chart 17
	var options = {
		chart: {
			height: 180,
			type: 'radialBar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			radialBar: {
				//startAngle: -135,
				//endAngle: 225,
				hollow: {
					margin: 0,
					size: '78%',
					background: '#ffd6da',
					image: undefined,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: 'front',
					dropShadow: {
						enabled: false,
						top: 3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
						opacity: 0.65
					}
				},
				track: {
					// background: '#f8f9fa',
					//strokeWidth: '67%',
					margin: 0, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: -3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
						opacity: 0.65
					}
				},
				dataLabels: {
					showOn: 'always',
					name: {
						offsetY: -8,
						show: true,
						color: '#6c757d',
						fontSize: '15px'
					},
					value: {
						formatter: function (val) {
							return val + "%";
						},
						color: '#000',
						fontSize: '25px',
						show: true,
						offsetY: 10,
					}
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				type: 'horizontal',
				shadeIntensity: 0.5,
				gradientToColors: ['#f41127'],
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#f41127"],
		series: [60],
		stroke: {
			lineCap: 'round',
			//dashArray: 4
		},
		labels: ['Cancelled'],
	}
	var chart = new ApexCharts(document.querySelector("#chart17"), options);
	chart.render();
	// chart 18
	var options = {
		chart: {
			height: 180,
			type: 'radialBar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			radialBar: {
				//startAngle: -135,
				//endAngle: 225,
				hollow: {
					margin: 0,
					size: '78%',
					background: '#ffedb9',
					image: undefined,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: 'front',
					dropShadow: {
						enabled: false,
						top: 3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
						opacity: 0.65
					}
				},
				track: {
					// background: '#f8f9fa',
					// strokeWidth: '67%',
					margin: 0, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: -3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
						opacity: 0.65
					}
				},
				dataLabels: {
					showOn: 'always',
					name: {
						offsetY: -8,
						show: true,
						color: '#6c757d',
						fontSize: '15px'
					},
					value: {
						formatter: function (val) {
							return val + "%";
						},
						color: '#000',
						fontSize: '25px',
						show: true,
						offsetY: 10,
					}
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				type: 'horizontal',
				shadeIntensity: 0.5,
				gradientToColors: ['#ffc107'],
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#ffc107"],
		series: [45],
		stroke: {
			lineCap: 'round',
			//dashArray: 4
		},
		labels: ['In Progress'],
	}
	var chart = new ApexCharts(document.querySelector("#chart18"), options);
	chart.render();
	// chart 19
	var options = {
		series: [{
			name: 'Orders',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			foreColor: '#9ba7b2',
			type: 'bar',
			height: 270,
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
				enabled: false
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
				columnWidth: '30%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
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
				show: true
			},
			y: {
				formatter: function (val) {
					return " " + val + " "
				}
			},
			marker: {
				show: false
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart19"), options);
	chart.render();
	// chart7
	var options = {
		series: [87],
		chart: {
			//foreColor: '#9a9797',
			height: 310,
			type: 'radialBar',
			offsetY: -10
		},
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				hollow: {
					margin: 0,
					size: '70%',
					background: 'transparent',
				},
				track: {
					strokeWidth: '100%',
					dropShadow: {
						enabled: false,
						top: -3,
						left: 0,
						blur: 4,
						//color: 'rgba(209, 58, 223, 0.65)',
						opacity: 0.12
					}
				},
				dataLabels: {
					name: {
						fontSize: '16px',
						color: '#212529',
						offsetY: 5
					},
					value: {
						offsetY: 20,
						fontSize: '30px',
						color: '#212529',
						formatter: function (val) {
							return val + "%";
						}
					}
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				shadeIntensity: 0.15,
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 65, 91]
			},
		},
		colors: ["#17a00e"],
		stroke: {
			dashArray: 4
		},
		labels: ['Total Sales'],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 300,
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart20"), options);
	chart.render();
	// chart 21
	var options = {
		series: [{
			name: 'Visitors',
			data: [427, 613, 801, 457, 605, 414, 671, 360, 540]
		}],
		chart: {
			foreColor: '#6c757d',
			type: 'bar',
			height: 390,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
				top: 3,
				left: 10,
				blur: 3,
				opacity: 0.10,
				color: '#0d6efd',
			},
			sparkline: {
				enabled: false
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: '70%',
				}
			},
			bar: {
				horizontal: false,
				columnWidth: '35%',
				endingShape: 'rounded'
			},
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
			curve: 'smooth'
		},
		colors: ["#0d6efd"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		},
		fill: {
			opacity: 1
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart21"), options);
	chart.render();
});