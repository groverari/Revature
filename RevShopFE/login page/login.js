async function login() {
  const url = "http://localhost:8080/users";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application.json",
    },
  });
  const body = await res.json();
  console.log("RES: ");
  console.log(res);
  console.log("BODY");
  console.log(body);

  //   fetch(url)
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((body) => {
  //       console.log(body);
  //     });
}
