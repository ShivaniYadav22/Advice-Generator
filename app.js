const api = "https://api.adviceslip.com/advice";

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    $("span").html(data.slip.id);
    $("h2 span").html(data.slip.advice);
  });

  $(".full-dice").on('click', () => {
    // setTimeout(()=> {
    //   location.reload();
    // }, 2000);
    location.reload();
  })
