---
layout: page
title: Featured Shops
---

{% for shop in site.shops %}
  * [{{ shop.name }}]({{ shop.link }}) {% if shop.bitcoin %}<img src="/assets/images/btc.png" width="21px"/>{% endif %}{% if shop.lightning %}⚡{% endif %}
{% endfor %}

Want to add yourself?
[Create a PR](https://github.com/opsecswag/opsecswag.github.io)!
