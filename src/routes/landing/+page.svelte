<script>
	const goToStart = async () => {
		window.location.href = '/login';
	};

	import logo from '/Users/aa/Desktop/lektion4/logo1.png';

</script>

<style>
	
	.logo-img {
		width: 500px; 
		height: auto; 
		margin-top: 100px;
		margin-left: 20px; 
	}

	h2 {
		color: #00BFFF;
		margin-top: 20px; 
		margin-bottom: 20px; 
		font-weight: bold; 
		margin-left: 20px; 
	}

	button {
		margin-top: 0px; 
		margin-left: 20px; 
	}
</style>

<div class="container">
	<img alt="The project logo" src={logo} class="logo-img"/>
	<div>
		<h2>
			Din dedikerede følgesvend på vejen mod genoptræning og styrke efter apopleksi
		</h2>
		<button on:click={goToStart}>Tryk her for at starte</button>
	</div>
</div>

