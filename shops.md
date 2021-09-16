---
layout: page
title: Featured Shops
---

{% for shop in site.shops %}
  * [{{ shop.name }}]({{ shop.link }}) {% if shop.bitcoin %}<img src="/assets/images/btc.png" width="21px"/>{% endif %}{% if shop.lightning %}⚡{% endif %}
{% endfor %}

Support your local bitcoin developer at
[bitcoindevlist.com](https://bitcoindevlist.com/)
or
[opensats.org](https://opensats.org).

---

Want to add yourself?
[Create a PR](https://github.com/opsecswag/opsecswag.github.io)!
