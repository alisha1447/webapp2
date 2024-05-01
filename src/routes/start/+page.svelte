<script>
const goToOpg1 = async () => {
		window.location.href = '/opgave1';
	};

    import logo from '../logo2.png';
	
</script>

<style>
	
	.logo-img {
		width: 850px; 
		height: auto; 
		margin-top: 10px;
		margin-left: 30px; 
	}

    h1 {
		color: #FFFFFFF;
		margin-top: 20px; 
		margin-bottom: 20px; 
		font-weight: bold; 
		margin-left: 20px; 
	}

	h2 {
		color: grey;
		margin-top: 20px; 
		margin-bottom: 20px; 
		margin-left: 40px; 
	}

	button {
		margin-top: 10px; 
		margin-left: 638px; 
	}
</style>

<div class="container">
	<div>
        <h1>Velkommen tilbage Nikolai!</h1>
		<h2 style="color: Grey;">
            ·  Dagens Udfordring er klar til dig :)
        </h2>
	</div>
    <img alt="Niveau" src={logo} class="logo-img"/>
    <button on:click={goToOpg1}>Start</button>
</div>