---
layout: subpage
title: lab1
type: lab-subpage
permalink: /C++lab/lab1/
source: ["inf.c","find.c","error.c","stu.c","info.c"]
---
<script  type="text/javascript">
</script>
<table>
{% for c in page.source %}
<tr>
	<th>
		<a href="{{c}}">
		{{c}}
		</a>	
	</th>
</tr>
<tr>
	<th>

<div class="highlight">
<pre id="{{c}}" ></pre>
</div>
	</th>
	</tr>

{% endfor %}
</table>
<script type="text/javascript">

function ajax(url, box) {
var request =  new XMLHttpRequest();
request.open("GET", url, true);
request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

request.onreadystatechange = function() {
var done = 4, ok = 200;
if (request.readyState == done && request.status == ok) {
  if (request.responseText) {
	box.innerHTML = request.responseText.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/(?:\r\t|\r|\t)/g, '&nbsp;');
        }
      }
    };
    request.send();
}

function getfiles() 
{
	{%for c in page.source%}
        var box =  document.getElementById("{{c}}");	
	if (box !== null)
	ajax("{{c}}", box);
	else
	alert("box found empty");
	{%endfor%}
}

document.addEventListener('DOMContentLoaded', getfiles, false);
</script>
