---
layout: 2016site
title: Codemania of years gone by
years: ['2012', '2013', '2014', '2015', '2016']
---

<div class="parallax__layer parallax__layer--base">
<div class="pure-g">

	{% for year in page.years %}
	<div class="pure-u-1">
		<a href="/{{year}}/index.html">
			<h1 class="center lunchBox huge">{{year}}</h1>
		</a>
	</div>
	{% endfor %}

</div>
</div>