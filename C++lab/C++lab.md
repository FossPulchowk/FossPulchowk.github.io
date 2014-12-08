---
layout: page
type: page
title: C++ lab
permalink: /C++lab/
---
This is C++ lab source code of Pulchowk Engineering Campus, IOE, Nepal.

<table>
  <h2>Lab</h2>
  
    {% for pages in site.pages %}
    {% if pages.type == "lab-subpage" %}
  <tr>
    <td>
      <a href="{{ pages.url }}">
	{% if pages.title %}
	{{ pages.title}}
	{% else %}
	{{ pages.url }}
	{% endif %}
      </a>
    </td>
  </tr>
  {% endif %}
    {% endfor %}
</table>

