---
title: My first page
layout: base.njk
---


yo wassup fam

## Blog posts\

<ul>
{% for post in collections.posts %}
 <li><span>{{ post.data.date }}</span> &raquo; <a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

