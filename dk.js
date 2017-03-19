function GetClock() {
    d = new Date();
    nhour = d.getHours();
    nmin = d.getMinutes();
    if (nmin &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;= 9) {nmin=&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;0&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;+nmin}
    document.getElementById('logo').innerHTML = nhour + &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;:&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; + nmin;
    setTimeout(&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;GetClock()&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;, 1000);
}
window.addEventListener(&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;load&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;,GetClock,false);
