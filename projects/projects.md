---
layout: page
type: page
title: Projects
permalink: /Projects/
---
This page will contains list of all open source projects done by Pulchowk Students and present in FossPulchowk github organization.

## Ubuntu repo

Foss Pulchowk has an debain repository. If your are using ubuntu or any other debain based distribution you can add our repository to the source list and installed the foss pulchowk projects.

### Adding the repo

{% highlight bash %}
echo deb http://fosspulchowk.github.io/deb-packages ./ | /etc/apt/sources.list

sudo apt-get update
{% endhighlight %}

<table>
  <h2>Projects</h2>
  
    {% for pages in site.pages %}
    {% if pages.type == "project-subpage" %}
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
  <tr>
    <td>
    {{ pages.excerp }}
    </td>
  </tr>
  {% endif %}
    {% endfor %}
</table>


