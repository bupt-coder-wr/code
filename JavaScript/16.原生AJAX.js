var xhr = new XMLHttpRequest();
xhr.open('get', 'aa.php', true);
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = xhr.responseText;
    return data;
  }
}
