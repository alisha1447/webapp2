<script>
    const goToSlut = async () => {
        await sendSvar();
        window.location.href = '/slut';
    };

    const sendSvar = async () => {
        const opgaveId = prompt("Indtast opgaveId:");
        if (!opgaveId) return;
        await fetch("/api/opgave1", {
            method: "POST",
            body: JSON.stringify({ opgaveId, svarliste })
        });
    };

    let count = 0;
    let liste = ["spørgsmål 1", "spørgsmål2"];
    let questions = [
        { title: "_ _ _ _ _ _ Er det modsatte af dårlig", answers: ["God", "Glad"] },
        { title: "7 + _ = 11", answers: ["5", "7", "4", "2"] },
        { title: "7 + _ = 14", answers: ["5", "7", "4", "2"] }
    ];

    $: question = questions[count];

    let svarliste = [];
</script>


<div class="container" style="margin: 20px auto; padding: 20px; border: 1px solid #ccc; max-width: 500px;">
    <button style="margin-bottom: 10px;" on:click={() => count--}>Tilbage</button>
    <div style="margin-bottom: 20px;">
        <h3>{question.title}</h3>
        <div>
            {#each question.answers as answer}
                <button on:click={() => {
                    svarliste = [...svarliste, { id: count, answer: answer }];
                    count++;
                }}>{answer}</button>
            {/each}
        </div>
    </div>
    <div>
        <button style="margin-right: 10px;" on:click={() => count++}>Frem</button>
        <button style="background-color: #00BFFF; color: white; padding: 10px 20px; border: none; border-radius: 5px;" on:click={goToSlut}>Gem dine svar</button>
    </div>
    <div style="margin-top: 20px;">
        <h4>Dine svar:</h4>
        {JSON.stringify(svarliste)}
    </div>
</div>
