async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="review-title"]').value;
  const review_text = document.querySelector('input[name="review-text"]').value;
  const review_file = document.querySelector('input[name="review-file"]').value;
  const review_cat = document.getElementById("review_cat").value;

  const response = await fetch(`/api/reviews`, {
    method: "POST",
    body: JSON.stringify({
      review_file,
      title,
      review_text,
      review_cat,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-review-form")
  .addEventListener("submit", newFormHandler);
