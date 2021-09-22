const xhr = XMLHttpRequest();

xhr.open("get", URL, true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && [200.304].includes(xhr.status)) {
    console.log(xhr.responseText);
  } else {
  }
};
xhr.send();
