<h1>WOW Alert: A jQuery plugin to override native alert() method</h1>
<p>Wow Alert is a simple jQuery plugin that turn default alerts in pretty nice dialog.</p>

<img src="http://f.cl.ly/items/1F2a0i1v0Y3n100P2s15/wow-alert.png">

<h4>How to use</h4>
<ul>
<li>Just include the file wow-alert.js and wow-alert.css in your html file.</li>
<li>Run usually the method <code>alert()</code> - <code>alert("Something")</code></li>
<li>Use the second parameter to set the button's label. - <code>alert("Something", "OK")</code></li>
<li>All done!</li>
</ul>
<h4>Exemple with callback</h4>
<pre>
    alert("Hello World!",
    {
        label: "YES",
        success: function () {
            console.log("User clicked YES");
        }
    }

    );
</pre>








