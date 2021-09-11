---
layout: page
title: Featured Shops
---

{% for shop in site.shops %}
  * [{{ shop.name }}]({{ shop.link }})
{% endfor %}

Want to add yourself?
[Create a PR](https://github.com/opsecswag/opsecswag.github.io)!
