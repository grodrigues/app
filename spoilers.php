<!DOCTYPE HTML>
<html>
	<head>
		<title>Spoiler Hunter</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" media="screen">
		<link rel="stylesheet" type="text/css" href="css/estilo.css" media="screen">
	</head>

	<body>

		<?php $menuativo = basename($_SERVER['SCRIPT_NAME']); ?>
		<?php 
		include 'topo.php'
		?>

		<div class="container">
			<div class="row" id="msgs">
			    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 spoilers" id="bloco">
			    	 
				    <table cellpadding="5" class="table table-striped table-responsive" id="msgs-table">
				        <thead>
				            <tr class="text">
				                <th title="Nome">Nome</th>
				                <th title="Mensagem: Spoiler">Mensagem</th>
				                <th title="Data & Hora">Data/Hora</th>
				                <th title="Latitude">Lat</th>
				                <th title="Longitude">Lng</th>
				            </tr>
				            <tr class="text">
				                <td>&nbsp;</td>
				                <td>&nbsp;</td>
				                <td>&nbsp;</td>
				                <td>&nbsp;</td>
				                <td>&nbsp;</td>
				            </tr>
				        </thead>
				    </table>
			    </div>
			</div> 
		</div> <br><br>

		<div class="container">
			<div class="row" id="msgs">
			    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="bloco">
				    <nav>
					  <ul class="pagination pagination-sm">
					    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
					    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
					    ...
					  </ul>
					</nav>
			    </div>
			</div> 
		</div>
		

		<!--
		<footer>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 rodape">
				<p>Todos os direitos reservados. spoilerhunter.com</p>
			</div>
		</footer> -->
		
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
		
	</body>
</html>