<!DOCTYPE html>
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	<meta content="utf-8" http-equiv="encoding">
	<title>Lokali aplinka(JS)</title>
	<script type="text/javascript" src="JScripts/jquery.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="JScripts/control.js"></script>
	<style type="text/css">
		body {
			background-color: #ffebcc;
			font-family: Arial;
			text-align: center;
			padding: 0;
			margin: 0;
		}

		.header {
			
			text-align: center;
			background-color: #ffc266;
			padding: 25px 0 25px 0;
			
		}

		.footer {
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			padding: 1rem;
			background-color: #ffe0b3;
			text-align: center;
			font-size: 9px;
			color: #332200;
		}

		.sidebar {
			position: absolute;
			top:0; bottom: 0; left: 0;
			padding-right: 50px;
			padding-top: 140px;
			color: #141f1f;
			background-color: #ffc266;
			font-weight: bold;
			text-align: left;
		}

		.sidebar ul li {
			margin-bottom: 20px;
		}

		.sidebar a:visited {
			color: #283e3e;
		}

		.sidebar a:hover {
			color: #466d6d;
		}

		.content {
			padding: 0;
		}

		div.content div.left-block, div.right-block {
			display: inline-block;
			width: 49%;
			margin: 0;
		}

		div.bottom-block {
			display: inline-block;
		}

		div.bottom-block thead tr td{
			font-weight: bold;
			border-top: 2px solid #ffc266;
			border-bottom: 2px solid #ffc266;
		}

		.table-page-footer {
			padding-top: 40px;
		}

	</style>
</head>
<body>
<div class="container">
	<div class="sidebar">
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">News</a></li>
			<li><a href="#">Plans</a></li>
			<li><a href="#">Archive</a></li>
			<li><a href="#">About</a></li>
		</ul>
	</div>
	<div class="header">
		<h1>Menu</h1>
	</div>
	<div class="content">
		<div class="left-block">
		    <div id="output-div"></div>
		</div>
		<div class="right-block" title="news">
			<p>A bit of content.</p>
		    <p id="second-paragraph">This content will be dynamic in 2017.</p>
		    <p title="Database information">Information should be gathered from a database.</p>
		    <p>A bit of content.</p>
		    <p title="Dynamic content">This content will be dynamic in 2017.</p>
		    <p>Information should be gathered from a database.</p>
		    <p>A bit of content.</p>
		    <p>This content will be dynamic in 2017.</p>
		    <p>Information should be gathered from a database.</p>
		</div>
	</div>
	<div class="bottom-block">
		<table>
			<thead>
				<tr>
					<td>Name</td>
					<td>Surname</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Sam</td>
					<td>Growberg</td>
				</tr>
				<tr>
					<td>Anne</td>
					<td>Glowbell</td>
				</tr>
				<tr>
					<td>Triss</td>
					<td>McRee</td>
				</tr>
				<tr>
					<td>Cercy</td>
					<td>Bandwuf</td>
				</tr>
				<tr>
					<td>Ben</td>
					<td>Luquis</td>
				</tr>
				<tr>
					<td><input type="text" name="Name"></td>
					<td><input type="text" name="Surname"></td>
				</tr>
				<tr>
					<td><strong>Real Information<input type="radio" name="information-validity"></strong></td>
					<td><strong>Fictional Information<input type="radio" name="information-validity"></strong></td>
				</tr>
				<tr>
					<td colspan="2" class="table-page-footer">
						Page: 
						<select class="pages">
							<option value="1" selected="true">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
						out of <span class="max-pages">1</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="footer">
		<h1>Please change indexREAL.php files name to index.php if you want to use the catalog.</h1>
	</div>
</div>
</body>
</html>