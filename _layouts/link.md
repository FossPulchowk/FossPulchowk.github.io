---
layout: page
type: lab-subpage
---
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
      {%capture filePath %}{{c}}{%endcapture%}
      {%highlight c linenos%}
      {% include_relative {{ filePath }}%}
      {%endhighlight %}
      {% endfor %}
    </th>
</table>

