async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="review-title"]').value;
  const review_url = document.querySelector('input[name="review-url"]').value;
<<<<<<< HEAD
  const review_file =  document.querySelector('input[name="review-file"]').value;
  const review_cat =  document.getElementById('review_cat').value;


=======
  const review_file = document.querySelector('input[name="review-file"]').value;
  const review_cat = document.querySelector('select[name="review-cat"]').value;
>>>>>>> 57dd820fe1e5caa8f17989131194916eb5771535

  const response = await fetch(`/api/reviews`, {
    method: "POST",
    body: JSON.stringify({
      review_file,
      title,
      review_url,
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
