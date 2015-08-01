---
layout: default
title: Codemania of years gone by
years: ['2012', '2013', '2014', '2015']
---


<div class="pure-g">

	{% for year in page.years %}
	<div class="pure-u-1-4">
		<a href="/{{year}}/index.html">
			<h1 class="center">{{year}}</h1>
		</a>
	</div>
	{% endfor %}

</div>