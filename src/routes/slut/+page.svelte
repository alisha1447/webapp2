<script>
    import { onMount } from 'svelte';

    const goToLogin = async () => {
        window.location.href = '/landing';
    };

    import logo from '/Users/aa/Desktop/logo3.png';

    let latestAnswers = [];

    onMount(async () => {
        const response = await fetch("/api/opgave1");
        if (response.ok) {
            latestAnswers = await response.json();
            latestAnswers.reverse(); // Reversing the order of answers
        }
    });
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        text-align: center;
    }

    .logo-img {
        width: 600px;
        height: auto;
        margin-bottom: 30px;
    }

    .answer {
        margin-top: 10px;
    }

    button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #00BFFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

</style>

<div class="container">
    <div>
        <img alt="Logo" src={logo} class="logo-img" />
    </div>
    <div>
        <h2>Dine seneste svar:</h2>
        {#each latestAnswers as answer, index}
            <p class="answer">Svar {index + 1}: {answer.answer}</p>
        {/each}
    </div>
    <button on:click={goToLogin}>Slut</button>
</div>


