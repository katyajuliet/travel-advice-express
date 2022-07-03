async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="review-title"]').value;
  const review_url = document.querySelector('input[name="review-url"]').value;
  const review_file = document.querySelector('input[name="review-file"]').value;
  const review_cat = document.querySelector('select[name="review_cat"]').value;

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

document.querySelector(".new-review-form").addEventListener("submit", newFormHandler);
  
