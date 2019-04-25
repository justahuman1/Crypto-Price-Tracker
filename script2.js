<!DOCTYPE html>
<html style="height: 100%;">
<head>
	<meta charset="utf-8">
	<title>Crypto</title>
	<script src="jquery-1.10.1.min.js"></script>
	<script src="highstock.js"></script>
	<script src="theme.js"></script>
	<style>
		body {
			font-family: Noto Sans, Segoe UI, Helvetica, sans-serif;
			font-size: 92%;
			margin: 0;
			padding: 0;
			height: calc(100% - 70px);
			text-align: center;
		}
		body, #about-inner {
			background: #1E1F21;
		}
		body, .buttons > a, .help-button {
			color: #D6D6D6;
		}
		:focus {
			outline: 0;
		}
		a {
			color: #3885E2;
		}
		p {
			margin-top: 0.7em;
			margin-bottom: 0.7em;
		}
		#loading, .error {
			top: 150px;
			width: 100%;
			position: absolute;
		}
		.error {
			color: red;
		}
		#loading {
			display: none;
		}
		#ChartContainer {
			height: 100%;
		}
		.top {
			margin-top: 8px;
		}
		#relation-selection {
			margin-left: 18px;
		}
		.top2 {
			margin-top: 8px;
		}
		.buttons {
			display: inline-block;
		}
		.buttons > a, .help-button {
			display: inline-block;
			padding-top: 4px;
			padding-bottom: 3px;
			padding-left: 4px;
			padding-right: 4px;
			margin-left: 7px;
			margin-right: 3px;
			border: 1px solid transparent;
			border-radius: 4px;
			transition: all ease-out 0.2s;
			text-decoration: none;
			min-width: 25px;
		}
		.buttons > a:hover {
			border-color: #D6D6D6;
		}
		.buttons > a.active {
			color: #DDDF0D;
			border-color: #DDDF0D;
		}
		#average-button.active {
			color: #5494D3;
			border-color: #5494D3;
		}
		.help-button {
			margin-left: 35px;
		}
		#average-button {
			margin-left: 10px;
		}
		#about {
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			display: none;
			background: rgba(22,22,22,0.75);
		}
		#about-inner {
			margin-top: 200px;
			display: inline-block;
			border: 1px solid #D6D6D6;
			border-radius: 4px;
			padding: 25px;
			padding-top: 17px;
			padding-bottom: 17px;
			text-align: left;
			line-height: 130%;
			box-shadow: 0px 0px 20px #0C0C0C;
		}
		#about-inner > h1 {
			text-align: center;
			font-size: 1.7em;
			margin: 15px;
			margin-bottom: 25px;
		}
		#active {
			background-color: red;
		}
	</style>
</head>
<body>
	</div>
	<div class="top">
		<div id="chart-selection" class="buttons">Chart: </div>
		<div id="relation-selection" class="buttons">Compared to: </div>
		<!-- <a href="#" onclick="showHelp(event); return false" class="help-button">?</a> -->
	</div>
	<div class="top2">
		<div id="ranges" class="buttons">Range: </div>
		<div class="buttons">
			<a href="#" id="average-button">Average</a>
		</div>
	</div>
	<div id="loading">
		Loading ...
	</div>
	<div id="ChartContainer"></div>
	<div id="about">
		<!-- <div id="about-inner" onclick="showHelp(event);">
			<h1>Cryptocurrency Price Chart</h1>
			<p>Original URL: <a href="https://trustable-code.github.io/cryptocurrency-price-chart/">https://trustable-code.github.io/cryptocurrency-price-chart/</a></p>
			<p>Data provider: <a href="https://poloniex.com" target="_blank">https://poloniex.com</a>, <a href="https://coinmarketcap.com" target="_blank">https://coinmarketcap.com</a></p>
			<p>Chart library: <a href="https://www.highcharts.com" target="_blank">https://www.highcharts.com</a></p>
		</div> -->
</body>
<script type="text/javascript" src='script2.js'></script>
</html>
