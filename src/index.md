---
title: Home
layout: base.njk
---
Hello, welcome to my site  

## Posts\

<ul>
{% for post in collections.posts %}
 <li><span>{{ page.date }}</span> &raquo; <a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

