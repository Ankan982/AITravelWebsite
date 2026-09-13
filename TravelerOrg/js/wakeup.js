
async function wakeUpContactMS() {
    try {
        let response = await fetch("https://travelcontactms.onrender.com/contact/V1/callContactMS");
        if (response.status == 200) {
            const textContent = await response.text(); // Consume the body as text
            console.log(textContent);
        }


    } catch (error) {
        console.log("Error:", error);
    }
}

wakeUpContactMS();
