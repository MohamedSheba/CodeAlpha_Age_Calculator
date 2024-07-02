function calcAge(){
  const date = new Date(document.getElementById("date").value);
  const now = new Date();
  const diff = now - date;
  
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  const month = ageDate.getUTCMonth();
  const day = ageDate.getUTCDate() - 1;

  document.getElementById("year").innerHTML = age;
  document.getElementById("month").innerHTML = month;
  document.getElementById("day").innerHTML = day;
}
