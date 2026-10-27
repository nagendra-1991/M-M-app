
document.getElementById("year").textContent =
  new Date().getFullYear();

const carSelect = document.getElementById("customer-car");
const formMessage = document.getElementById("form-message");

document.querySelectorAll(".enquire-btn").forEach((button) => {
  button.addEventListener("click", () => {
    carSelect.value = button.dataset.car;

    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });

    document.getElementById("customer-name").focus();
  });
});

document.getElementById("contact-form").addEventListener(
  "submit",
  async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Enquiry failed");
      }

      formMessage.textContent = result.message;
      form.reset();
    } catch (error) {
      formMessage.textContent =
        "Unable to submit enquiry. Please try again.";
    }
  }
);

